---
title: Blog Posts
---

<script setup>
import { data as posts } from './posts.data.ts'
</script>

# ✍️ Writing & Notes

<div class="blog-list">
  <div v-for="post in posts" :key="post.url" class="blog-card">
    <h2><a :href="post.url">{{ post.frontmatter.title }}</a></h2>
    <p class="post-meta">🗓️ {{ post.frontmatter.date }} • 👤 {{ post.frontmatter.author || 'Arya' }}</p>
    <p>{{ post.frontmatter.summary }}</p>
  </div>
</div>