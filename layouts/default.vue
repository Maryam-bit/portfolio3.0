<template>
  <div class="w-full flex flex-col items-center h-screen py-5">
    <div class="w-full sm:w-[40rem] md:w-[48rem] lg:w-[55rem]">
      <header
        class="h-12 sm:full flex items-center justify-between text-md px-1"
      >
        <NuxtLink class="nav-items main-nav-item" to="/"
          ><p class="text-lg md:text-2xl font-[600]">
            👨‍💻 Maryam Noor
          </p></NuxtLink
        >
        <div class="text-md md:text-lg flex gap-2">
          <NuxtLink class="nav-items" to="/">Home</NuxtLink>
          <NuxtLink class="nav-items" to="/blogs">Blogs</NuxtLink>
          <NuxtLink class="nav-items" to="/projects">Projects</NuxtLink>
        </div>
      </header>
      <main class="flex-grow w-full h-full pt-4 mx-auto px-5">
        <slot />
      </main>
    </div>
  </div>
</template>
<style scoped>
.router-link-active {
  @apply bg-gray-100;
}
.main-nav-item {
  @apply bg-transparent;
}
.nav-items {
  @apply px-3 py-3 rounded-md hover:bg-gray-100;
}
</style>
