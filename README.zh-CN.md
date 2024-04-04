# ChatGPT Minimal

[English](./README.md) | 简体中文

## 演示

访问 [ChatGPT Minimal 演示网站](https://chatgpt-minimal.vercel.app)

## 功能

ChatGPT Minimal 是一个简单的聊天机器人，使用 Next.js 和 OpenAI Streaming API 为 GPT-3.5 模型创建。它支持 OpenAI 和 Azure OpenAI 帐户。

组件：

- Next.js v13
- OpenAI Streaming API（GPT-3.5 模型，gpt-3.5-turbo）
- API 路由
- 基于 React 和 Ant Design 的聊天机器人用户界面

![演示](./docs/images/demo.jpg)

如需完整功能的 ChatGPT UI代码库，请访问 [ChatGPT Lite](https://github.com/blrchen/chatgpt-lite)。

## 前提条件

需要OpenAI账户或Azure OpenAI账户。

## 部署

参考[环境变量](#环境变量)了解所需环境变量。

### 在Vercel上部署

点击下方按钮部署到Vercel：
[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fblrchen%2Fchatgpt-minimal&project-name=chatgpt-minimal&framework=nextjs&repository-name=chatgpt-minimal)

### 使用Docker部署

OpenAI账户用户：

```
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="<REPLACE-ME>" \
   blrchen/chatgpt-minimal
```

Azure OpenAI账户用户：

```
docker run -d -p 3000:3000 \
   -e AZURE_OPENAI_API_BASE_URL="<REPLACE-ME>" \
   -e AZURE_OPENAI_API_KEY="<REPLACE-ME>" \
   -e AZURE_OPENAI_DEPLOYMENT="<REPLACE-ME>" \
   blrchen/chatgpt-minimal
```

## 开发

### 本地运行

1. 安装NodeJS 20。
2. 克隆仓库。
3. 使用`npm install`安装依赖。
4. 复制`.env.example`文件为`.env.local`并更新环境变量。
5. 使用`npm run dev`启动应用。
6. 在浏览器中访问`http://localhost:3000`。

### 使用Docker本地运行

1. 克隆仓库并导航至根目录。
2. 在`docker-compose.yml`文件中更新`OPENAI_API_KEY`环境变量。
3. 使用`docker-compose build .`构建应用。
4. 运行`docker-compose up -d`启动。

## 环境变量

运行应用需要的环境变量：

OpenAI账户环境变量：

| 名称                | 描述                                                                               | 默认值                   |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| OPENAI_API_BASE_URL | 如需为`api.openai.com`使用反向代理，请使用此变量。                                 | `https://api.openai.com` |
| OPENAI_API_KEY      | 从[OpenAI API网站](https://platform.openai.com/account/api-keys)获取的密钥字符串。 |

Azure OpenAI账户环境变量：

| 名称                      | 描述                                       |
| ------------------------- | ------------------------------------------ |
| AZURE_OPENAI_API_BASE_URL | 端点（如，https://xxx.openai.azure.com）。 |
| AZURE_OPENAI_API_KEY      | 密钥                                       |
| AZURE_OPENAI_DEPLOYMENT   | 模型部署名称                               |

## 贡献

欢迎提交各种大小的PR。
