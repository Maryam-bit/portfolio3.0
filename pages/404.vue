<template>
    <div class="not-found">
      <h1>404 - Page not found</h1>
      <p>The page you are looking for could not be found.</p>
      <nuxt-link to="/">Go back to the homepage</nuxt-link>
    </div>
</template>
  
  <style>
  .not-found {
    text-align: center;
    margin-top: 100px;
  }
</style>

<script setup lang="ts">
useHead({
  title: 'Maryam Noor',
  meta: [
    { hid: 'og:title', property: 'og:title', content: '404' },
    { hid: 'og:description', property: 'og:description', content: 'Page not found' },
  ],
})
</script>