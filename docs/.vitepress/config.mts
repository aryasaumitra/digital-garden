import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/digital-garden/',

  title: "The Curious Generalist",
  description: "This website is my digital garden, a place where I document what I'm learning, building, reading, and exploring. You'll find notes on technology, systems, engineering, books, research papers, personal projects, and occasionally lessons learned from everyday work and life.",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Curiosity', link: '/curiosity/' },
      { text: 'Bookshelf', link: '/bookshelf/' },
      { text: 'Data Engineering', link: '/data-engineering/'  }
    ],

    sidebar: {
      '/curiosity/': sidebarCuriosity(),
      '/bookshelf/': sidebarBookshelf(),
      '/data-engineering/': sidebarDataEngineering()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aryasaumitra/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aryasaumitra22/' }
    ]
  }
})


function sidebarCuriosity(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Curiosity',
      collapsed: false,
      items: [
        { text: 'Experiments', link: '/curiosity/experiments' },
        { text: 'Questions', link: '/curiosity/questions' }
      ]
    }
  ]
}

function sidebarBookshelf(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Bookshelf',
      collapsed: false,
      items: [
        { text: 'Tiny Experiments', link: '/bookshelf/tiny-experiments' }
      ]
    }
  ]
}

function sidebarDataEngineering(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Data-Engineering',
      collapsed: false,
      items: [
        { text: 'Tiny Experiments', link: '/bookshelf/tiny-experiments' }
      ]
    }
  ]
}