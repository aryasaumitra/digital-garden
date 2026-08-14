import { defineConfig, type DefaultTheme } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/digital-garden/',

  title: "The Curious Generalist",
  description: "This website is my digital garden, a place where I document what I'm learning, building, reading, and exploring. You'll find notes on technology, systems, engineering, books, research papers, personal projects, and occasionally lessons learned from everyday work and life.",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog & Notes', link: '/blog/' },
      { text: 'Bookshelf', link: '/bookshelf/' },
      { text: 'Data Engineering', link: '/data-engineering/'  }
    ],

    // sidebar: {
    //   '/curiosity/': sidebarCuriosity(),
    //   '/bookshelf/': sidebarBookshelf(),
    //   '/data-engineering/': sidebarDataEngineering()
    // },
    sidebar: generateSidebar([
      {
        documentRootPath: 'docs',
        scanStartPath: 'blog',
        resolvePath: '/blog/',
        collapsed: true,             // Collapse nested folder sections by default
      capitalizeFirst: true,       // Capitalize folder and file titles if frontmatter title is missing
      useTitleFromFileHeading: true, // Use the first H1 (# Title) inside the file as the sidebar label
      useTitleFromFrontmatter: true, // Prefer title from frontmatter if available
      hyphenToSpace: true,         // Convert `my-nested-note.md` to "My Nested Note"
      underscoreToSpace: true,
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'bookshelf',
        resolvePath: '/bookshelf/',
        collapsed: true,             // Collapse nested folder sections by default
      capitalizeFirst: true,       // Capitalize folder and file titles if frontmatter title is missing
      useTitleFromFileHeading: true, // Use the first H1 (# Title) inside the file as the sidebar label
      useTitleFromFrontmatter: true, // Prefer title from frontmatter if available
      hyphenToSpace: true,         // Convert `my-nested-note.md` to "My Nested Note"
      underscoreToSpace: true,
        
      },
      {
        documentRootPath: 'docs',
        scanStartPath: 'data-engineering',
        resolvePath: '/data-engineering/',
        collapsed: true,             // Collapse nested folder sections by default
      capitalizeFirst: true,       // Capitalize folder and file titles if frontmatter title is missing
      useTitleFromFileHeading: true, // Use the first H1 (# Title) inside the file as the sidebar label
      useTitleFromFrontmatter: true, // Prefer title from frontmatter if available
      hyphenToSpace: true,         // Convert `my-nested-note.md` to "My Nested Note"
      underscoreToSpace: true,
  
      }
    ]),

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
        { text: 'Snowflake', 
          link: '/data-engineering/snowflake',
          collapsed: false

        }
      ]
    }
  ]
}