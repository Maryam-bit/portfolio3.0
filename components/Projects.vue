<template>
    {{ qc }}
    <template v-for="link in qc" :key="link.id">
      <NuxtLink :to="link._path">
        <Card :title="link.title" :date="link.releaseDate" :id="link.id" />
      </NuxtLink>
    </template>
</template>

<script setup>
const qc = await queryContent("blogs").find()
</script>

<style lang="scss" scoped></style>
