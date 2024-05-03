import React, { KeyboardEventHandler, useRef } from 'react'

import { ClearOutlined, SendOutlined } from '@ant-design/icons'

import { ChatRole, SendBarProps } from './interface'
import Show from './Show'
import { useTheme } from '@/Contexts/ThemeContext'

const SendBar = (props: SendBarProps) => {
  const { loading, disabled, onSend, onClear, onStop } = props
  const { theme } = useTheme()

  const inputRef = useRef<HTMLTextAreaElement>(null)

  const onInputAutoSize = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
    }
  }

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.style.height = 'auto'
      onClear()
    }
  }

  const handleSend = () => {
    const content = inputRef.current?.value
    if (content) {
      inputRef.current!.value = ''
      inputRef.current!.style.height = 'auto'
      onSend({
        content,
        role: ChatRole.User
      })
    }
  }

  const onKeydown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.shiftKey) {
      return
    }

    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleSend()
    }
  }

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '' : '#001529',
    color: theme === 'light' ? 'gray' : 'white'
  }
  const textAreaStyle = {
    backgroundColor: theme === 'light' ? '' : '#BDBDBD',
    caretColor: '#001529',
    color: '#001529'
  }

  return (
    <Show
      fallback={
        <div className="thinking">
          <span>Please wait ...</span>
          <div className="stop" onClick={onStop}>
            Stop
          </div>
        </div>
      }
      loading={loading}
    >
      <div className="send-bar">
        <textarea
          ref={inputRef!}
          className="input"
          disabled={disabled}
          placeholder="Shift + Enter for new line"
          autoComplete="off"
          rows={1}
          onKeyDown={onKeydown}
          onInput={onInputAutoSize}
          style={textAreaStyle}
        />
        <button
          className="button"
          title="Send"
          disabled={disabled}
          onClick={handleSend}
          style={buttonStyle}
        >
          <SendOutlined />
        </button>
        <button
          className="button"
          title="Clear"
          disabled={disabled}
          onClick={handleClear}
          style={buttonStyle}
        >
          <ClearOutlined />
        </button>
      </div>
    </Show>
  )
}

export default SendBar
