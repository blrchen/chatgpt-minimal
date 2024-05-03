import { useEffect, useReducer, useRef, useState } from 'react'

import { FilesetResolver, LlmInference } from '@mediapipe/tasks-genai';

import ClipboardJS from 'clipboard'
import { throttle } from 'lodash-es'

import { ChatGPTProps, ChatMessage, ChatRole } from './interface'

const scrollDown = throttle(
  () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  },
  300,
  {
    leading: true,
    trailing: false
  }
)

let llmInference: LlmInference;  // This will hold our model instance

const initializeModel = async () => {
  const genai = await FilesetResolver.forGenAiTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai@latest/wasm"
  );
  llmInference = await LlmInference.createFromOptions(genai, {
    baseOptions: {
      modelAssetPath: '/models/gemma-1.1-2b-it-gpu-int4.bin'
    },
    maxTokens: 8192,
    topK: 10,
    temperature: 0.5,
    randomSeed: 101
  });
};

export const useGemma = (props: ChatGPTProps) => {
  const { fetchPath } = props
  const [, forceUpdate] = useReducer((x) => !x, false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [disabled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const controller = useRef<AbortController | null>(null)
  const currentMessage = useRef<string>('')

  const archiveCurrentMessage = () => {
    const content = currentMessage.current
    currentMessage.current = ''
    setLoading(false)
    if (content) {
      setMessages((messages) => {
        return [
          ...messages,
          {
            content,
            role: ChatRole.Assistant
          }
        ]
      })
      scrollDown()
    }
  }

  const fetchMessage = async (messages: ChatMessage[]) => {
    try {
      currentMessage.current = ''
      controller.current = new AbortController()
      setLoading(true)

      const lastTwoMsgs = messages.slice(-1);
      const inputString = JSON.stringify(lastTwoMsgs);

      console.log(inputString);

      llmInference.generateResponse(inputString, (partialResult, done) => {
        if (partialResult) {
            currentMessage.current += partialResult;
            forceUpdate();
            scrollDown();
        }

        if (done) {
            archiveCurrentMessage();
        }
      });
    } catch (e) {
      console.error(e)
      setLoading(false)
      return
    }
  }

  const onStop = () => {
    if (controller.current) {
      controller.current.abort()
      archiveCurrentMessage()
    }
  }

  const onSend = (message: ChatMessage) => {
    const newMessages = [...messages, message]
    setMessages(newMessages)
    fetchMessage(newMessages)
  }

  const onClear = () => {
    setMessages([])
  }

  useEffect(() => {
    initializeModel();
    new ClipboardJS('.chat-wrapper .copy-btn')
  }, [])

  return {
    loading,
    disabled,
    messages,
    currentMessage,
    onSend,
    onClear,
    onStop
  }
}
