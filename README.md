# ChatGPT Minimal

English | [简体中文](./README.zh-CN.md)

## Demo

Visit the [ChatGPT Minimal Demo Site](https://chatgpt-minimal.vercel.app)

## Features

ChatGPT Minimal is a lightweight chatbot built using Next.js and the OpenAI Streaming API for the GPT-3.5 model. It supports both OpenAI and Azure OpenAI accounts.

Components:

- Next.js v13
- OpenAI Streaming API (GPT-3.5 model, gpt-3.5-turbo)
- API Routes
- Chatbot UI with React and Ant Design

![demo](./docs/images/demo.jpg)

For a full-featured ChatGPT UI codebase, visit [ChatGPT Lite](https://github.com/blrchen/chatgpt-lite).

## Prerequisites

You need an OpenAI or Azure OpenAI account.

## Deployment

Refer to the [Environment Variables](#environment-variables) section for required environment variables.

### Deploy on Vercel

Click the button below to deploy on Vercel:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fblrchen%2Fchatgpt-minimal&project-name=chatgpt-minimal&framework=nextjs&repository-name=chatgpt-minimal)

### Deploy with Docker

For OpenAI account users:

```
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="<REPLACE-ME>" \
   blrchen/chatgpt-minimal
```

For Azure OpenAI account users:

```
docker run -d -p 3000:3000 \
   -e AZURE_OPENAI_API_BASE_URL="<REPLACE-ME>" \
   -e AZURE_OPENAI_API_KEY="<REPLACE-ME>" \
   -e AZURE_OPENAI_DEPLOYMENT="<REPLACE-ME>" \
   blrchen/chatgpt-minimal
```

## Development

### Running Locally

1. Install NodeJS 20.
2. Clone the repository.
3. Install dependencies with `npm install`.
4. Copy `.env.example` to `.env.local` and modify environment variables as needed.
5. Start the application using `npm run dev`.
6. Open `http://localhost:3000` in your browser.

### Running Locally with Docker

1. Clone the repository and go to the root directory.
2. Update the `OPENAI_API_KEY` environment variable in the `docker-compose.yml` file.
3. Build the application using `docker-compose build .`.
4. Start the application by running `docker-compose up -d`.

## Environment Variables

Required environment variables:

For OpenAI account:

| Name                | Description                                                                                             | Default Value            |
| ------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------ |
| OPENAI_API_BASE_URL | Use if you intend to use a reverse proxy for `api.openai.com`.                                          | `https://api.openai.com` |
| OPENAI_API_KEY      | Secret key string obtained from the [OpenAI API website](https://platform.openai.com/account/api-keys). |

For Azure OpenAI account:

| Name                      | Description                                    |
| ------------------------- | ---------------------------------------------- |
| AZURE_OPENAI_API_BASE_URL | Endpoint (e.g., https://xxx.openai.azure.com). |
| AZURE_OPENAI_API_KEY      | Key                                            |
| AZURE_OPENAI_DEPLOYMENT   | Model deployment name                          |

## Contribution

We welcome PRs of all sizes.
