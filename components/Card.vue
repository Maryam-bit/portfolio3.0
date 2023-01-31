<template>
    <div class="flex flex-row justify-between gap-5 mt-5 mb-1 text-base md:text-lg">
        <p><span class="mr-3">{{ id }}</span>{{title}}</p>
        <span>{{ date }}</span>
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
