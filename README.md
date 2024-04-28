# Chatterbox

## Features

Chatterbox is a lightweight chatbot built using Next.js and the Gemma 1.1 2b it. Everything happens on the edge in your browser, using the system GPU.

Components:

- Next.js v13
- Gemma 1.1 2b it model weights
- Chatbot UI with React and Ant Design

## Prerequisites

You need a Kaggle account.

## Deployment

Simply add the correct model weights in `public/models` folder.

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

## Citation

Based on the work in [chatgpt-minimal](https://github.com/blrchen/chatgpt-minimal).
