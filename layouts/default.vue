<template>
  <div class="w-full flex flex-col items-center h-screen py-3">
    <div class="w-11/12 sm:w-[45rem]">
      <header class="h-12 sm:full border bg-gray-100 border-gray-200 flex items-center justify-between px-10 text-md">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about2">About</NuxtLink>
            <NuxtLink to="/blogs">Blogs</NuxtLink>
            <NuxtLink to="/about2">Projects</NuxtLink>
    </header>
    <main class="flex-grow w-full h-full pt-4 mx-auto">
      <slot />
    </main>
    </div>
  </div>
</template>
