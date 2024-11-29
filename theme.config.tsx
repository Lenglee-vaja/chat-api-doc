import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
   logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
        <path d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-4.414L12 18.586 9.414 16H5V4h14v12z"></path>
        <circle cx="15" cy="10" r="2"></circle>
        <circle cx="9" cy="10" r="2"></circle>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Lailaolab Chat Service
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Lailaolab',
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://nextra.site" target="_blank">
        🎉 Lailaolab Chat Service is released. Read more →
      </a>
    )
  }
}

export default config
