<template>

  <header class="sticky z-50 top-0 bg-gray-800 min-h-[10vh] h-fit flex justify-between items-center px-20 py-2">
    <a class="w-fit flex text-white items-center" href="/" >
      <img :src=imageLink class="max-w-[50px] rounded-full" alt="logo">
      <p class="mx-4 text-xl">{{title}}</p>
    </a>
    <div class="hidden md:flex text-md">
      <router-link to="/home" class="text-white mx-4">Home</router-link>
      <router-link to="#about" class="text-white mx-4">About</router-link>
      <router-link to="/portfolio" class="text-white mx-4">Portfolio</router-link>
      <router-link to="#contact" class="text-white mx-4">Get in Touch</router-link>
    </div>
  </header>

</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
})
</script>
