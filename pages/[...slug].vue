<template>
  <main class="prose prose-pre:bg-[#fafafa] mt-10 max-w-full">
    <ContentDoc :path="$route.path">
  <template v-slot="{ doc }">  
      <ContentRenderer :value="doc" />
  </template>
  <template #not-found><Error/></template>
</ContentDoc>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  }
}
</script>