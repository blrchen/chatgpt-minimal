import ChatGPT from '@/components/ChatGPT'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'

import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'

import styles from './index.module.less'
import { useTheme } from '@/Contexts/ThemeContext'

export default function Home() {
  const { theme } = useTheme()

  const layoutStyle = {
    boxSizing: 'border-box' as 'border-box',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#fff' : '#212121',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '0 20px',
    margin: '0 auto'
  }

  return (
    <Layout hasSider className={styles.layout}>
      <Layout style={layoutStyle}>
        <HeaderBar />
        <Content className={styles.main}>
          <ChatGPT fetchPath="/api/chat-completion" />
        </Content>
        <FooterBar />
      </Layout>
    </Layout>
  )
}
