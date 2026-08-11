import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/digital-garden/',

  title: "The Curious Generalist",
  description: "This website is my digital garden, a place where I document what I'm learning, building, reading, and exploring. You'll find notes on technology, systems, engineering, books, research papers, personal projects, and occasionally lessons learned from everyday work and life.",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curiosity', link: '/curiosity/' },
      { text: 'Bookshelf', link: '/bookshelf/' }
    ],

    sidebar: [
    {
      text: 'Curiosity',
      items: [
        { text: 'Experiments', link: '/curiosity/experiments' },
        { text: 'Questions', link: '/curiosity/questions' }
      ]
    },
    {
        text: 'Bookshelf',
        items: [
          { text: 'Tiny Experiments', link: '/bookshelf/tiny-experiments' }
        ]
      }
],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aryasaumitra/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aryasaumitra22/' }
    ]
  }
})