import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "《Naruto-V》个性博客1",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端',
        items: [
          { text: 'VitePress中文官网', link: 'https://vitepress.qzxdp.cn' },
          { text: 'vue', link: 'https://www.baidu.com' }
        ]
      },
      { 
        text: '后端',
        items: [
          {text: 'Java', link: '/Java-Study-Notes'},
          {text: 'Python', link: '/Python-Study-Notes'}
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }, {
        text: 'Java',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RagingJie' }
    ],

    footer: {
      message: '未曾放弃，何必认输，永觉不累',
      copyright: 'Copyright © 2024-present Naruto-V'
    }
  }
})
