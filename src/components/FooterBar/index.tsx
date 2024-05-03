import React from 'react'

import { Layout } from 'antd'

import VersionBar from './VersionBar'

import styles from './index.module.less'
import { useTheme } from '@/Contexts/ThemeContext'

const { Footer } = Layout

const FooterBar = () => {
  const { theme } = useTheme()
  const versonBarStyle = {
    color: theme === 'light' ? '#fff' : '#fff',
    backgroundColor: theme === 'light' ? '#001529' : '#001529',
    fontSize: 14,
    fontWeight: 600
  }
  return (
    <Footer className={styles.footer} style={versonBarStyle}>
      <VersionBar className={styles.versionBar} />
    </Footer>
  )
}

export default FooterBar
