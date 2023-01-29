<template>
    <div class="flex flex-row justify-between my-3">
        <p class="text-lg"><span class="mr-3">{{ id }}</span>{{title}}</p>
        <span class="text-lg">{{ date }}</span>
    </div>
    <hr>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  date: String
})
</script>

<style lang="scss" scoped>

</style>