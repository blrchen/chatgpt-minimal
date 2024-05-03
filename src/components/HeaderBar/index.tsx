import React from 'react'

import { GithubOutlined } from '@ant-design/icons'
import { Layout, Space, Switch, Typography } from 'antd'

import styles from './index.module.less'
import { useTheme } from '@/Contexts/ThemeContext'

const { Link } = Typography

const { Header } = Layout

const HeaderBar = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/logo192.png" />
            <h1>Chatterbox</h1>
          </Link>
        </div>
        <Space className={styles.right} size={0}>
          <Switch
            checked={theme === 'dark'}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <span className={styles.right}>
            <Link
              className={styles.action}
              href="https://github.com/blrchen/chatgpt-minimal"
              target="_blank"
            >
              <GithubOutlined />
            </Link>
          </span>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar
