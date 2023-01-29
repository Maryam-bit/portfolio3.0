<template>
    <template v-for="blog of blogs" :key="blog.id">
      <NuxtLink :to="blog._path">
        <Card :title="blog.title" :date="blog.releaseDate" :id="blog.id" />
      </NuxtLink>
    </template>
</template>

<script setup>
const blogs = await queryContent("blogs").find()
</script>

<style lang="scss" scoped></style>
