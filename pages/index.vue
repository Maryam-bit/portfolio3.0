<template>
  <div>
    <h2 class="text-base md:text-lg font-normal text-gray-500 mt-10 mb-5">
      Polyglot engineer, enjoy learning new technologies
    </h2>
    <div class="flex flex-row gap-7">
      <a rel="preconnect" href="mailto:noormaryam530@gmailcom"
        ><img src="../assets/imgs/envelope-solid.svg" width="21px" height="21px" alt="mail"
      /></a>
      <a rel="preconnect" href="https://github.com/Maryam-bit" target="_blank"
        ><img src="../assets/imgs/github.svg" width="21px" height="21px" alt="github"
      /></a>
      <a rel="preconnect" href="https://www.linkedin.com/in/maryam-noor-/" target="_blank"
        ><img src="../assets/imgs/linkedin.svg" width="21px" height="21px" alt="linkedin"
      /></a>
    </div>

    <!-- blogs  -->
    <h2 class="text-xl md:text-[26px] font-[700] text-gray-700 mt-10">Recent Posts</h2>
    <hr class="mb-7 mt-1 border-2 border-gray-200" />
    <BlogPosts />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Maryam Noor',
  meta: [
    { hid: 'og:title', property: 'og:title', content: 'Maryam Noor' },
    { hid: 'og:description', property: 'og:description', content: 'A curated selection of my personal projects and insights' },
  ],
})
</script>
