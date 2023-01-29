<template>
  <ContentNavigation v-slot="{ navigation }">
    <template v-for="link of navigation" :key="link.id">
      <NuxtLink :to="link._path">
        <Card :title="link.title" :date="link.releaseDate" :id="link.id" />
      </NuxtLink>
    </template>
  </ContentNavigation>
</template>

<script setup></script>

<style lang="scss" scoped></style>
