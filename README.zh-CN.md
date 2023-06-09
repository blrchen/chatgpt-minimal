# ChatGPT Minimal

[English](./README.md) | 简体中文

ChatGPT Minimal 是一个使用 Next.js 和 OpenAI Streaming API 为 GPT-3.5 模型创建的简易聊天机器人。它同时支持 OpenAI 和 Azure OpenAI 帐户。

组件：
- Next.js v13
- OpenAI Streaming API（GPT-3.5 模型，gpt-3.5-turbo）
- API 路由
- 基于 React 和 Ant Design 的聊天机器人用户界面

如需访问具有完整功能的 ChatGPT UI，请前往 [GPT Lite](https://github.com/blrchen/gptlite)。

[在线演示](https://gptlite-minimal.vercel.app)
![演示](./docs/images/demo.jpg)

## 前提条件

需要一个 OpenAI 账户或 Azure OpenAI 账户。

## 本地运行

1. 安装 NodeJS 18。
2. 克隆仓库。
3. 使用 `npm install` 安装依赖。
4. 设置 `OPENAI_API_KEY` 环境变量。
5. 使用 `npm run dev` 启动应用。
6. 在浏览器中访问 `http://localhost:3000`。

## 使用 Docker 运行

1. 克隆仓库并进入根目录。
2. 更新 `docker-compose.yml` 文件中的 `OPENAI_API_KEY` 环境变量。
3. 使用 `docker-compose build .` 构建应用。
4. 运行 `docker-compose up -d` 启动。

## 在 Vercel 上一键部署

点击下面的按钮一键部署到 Vercel：
[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fblrchen%2Fgptlite-minimal&project-name=gptlite-minimal&framework=nextjs&repository-name=gptlite-minimal)

## 环境变量

OpenAI 相关环境变量：

| 名称                | 描述                                                                                                    | 默认值                   |
|---------------------|-------------------------------------------------------------------------------------------------------|------------------------|
| OPENAI_API_BASE_URL | 仅在打算为 `api.openai.com` 使用反向代理时使用。                                                        | `https://api.openai.com` |
| OPENAI_API_KEY      | 从 [OpenAI API 网站](https://platform.openai.com/account/api-keys) 获取密钥字符串。                     |

Azure Open AI 相关环境变量：

| 名称                       | 描述                                         |
|----------------------------|----------------------------------------------|
| AZURE_OPENAI_API_BASE_URL  | 端点（如，https://xxx.openai.azure.com）。     |
| AZURE_OPENAI_API_KEY       | 密钥                                         |
| AZURE_OPENAI_DEPLOYMENT    | 模型部署名称                                   |

## 贡献

欢迎提交各种大小的 PR。

## 免责声明

此代码仅用于演示和测试目的。