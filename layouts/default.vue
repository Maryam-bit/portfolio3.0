<template>
  <div class="w-full flex flex-col items-center h-screen overflow-hidden py-3">
    <div class="sm:w-2/6">
      <header class="h-12 sm:full bg-slate-200 border border-slate-300 flex items-center justify-between px-10 text-md">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about2">About</NuxtLink>
            <NuxtLink to="/about2">Blogs</NuxtLink>
            <NuxtLink to="/about2">Projects</NuxtLink>
    </header>
    <main class="flex-grow w-full h-full p-4 mx-auto max-w-7xl">
      <slot />
    </main>
    </div>
  </div>
</template>
