<template>
    <div class="flex flex-row justify-between mt-5 mb-1">
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
