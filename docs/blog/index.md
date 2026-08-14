---
title: Blog Posts
---

<script setup>
import { withBase } from 'vitepress'
import { data as posts } from './posts.data.ts'
</script>

<div class="blog-list">
  <div v-if="!posts.length">
    <p>No posts found.</p>
  </div>

  <div v-for="post in posts" :key="post.url" class="blog-card">
    <h2>
      <a :href="withBase(post.url)">
        {{ post.frontmatter.title || 'Untitled Post' }}
      </a>
    </h2>
    <p class="post-meta">🗓️ {{ post.frontmatter.date }}</p>
    <p v-if="post.frontmatter.summary">{{ post.frontmatter.summary }}</p>
  </div>
</div>