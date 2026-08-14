import { createContentLoader } from 'vitepress'

export default createContentLoader('blog/*.md', {
  transform(raw) {
    return raw
      .filter((page) => !page.url.endsWith('/blog/') && !page.url.endsWith('/blog/index.html'))
      .sort((a, b) => {
        const timeA = new Date(a.frontmatter.date).getTime()
        const timeB = new Date(b.frontmatter.date).getTime()
        return timeB - timeA // Descending order (newest first)
      })
  }
})