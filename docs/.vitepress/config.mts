import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/digital-garden/',

  title: "The Curious Generalist",
  description: "This website is my digital garden, a place where I document what I'm learning, building, reading, and exploring. You'll find notes on technology, systems, engineering, books, research papers, personal projects, and occasionally lessons learned from everyday work and life.",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aryasaumitra/digital-garden' }
    ]
  }
})