<template>
  <div>
    <!-- <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation> -->
    <h2 class="text-5xl font-normal">Maryam Noor</h2>
    <h2 class="text-2xl font-extralight text-gray-400 my-3">Polyglot engineer</h2>
    <div class="flex flex-row gap-7">
        <img src="../assets/imgs/envelope-solid.svg" width="23">
        <img src="../assets/imgs/github.svg" width="23">
        <img src="../assets/imgs/linkedin.svg" width="23">
    </div>
    <h2 class="text-3xl font-thin mt-8">Recent Post</h2>
    <hr class="mb-7">
    <BlogPosts/>
  </div>
</template>
