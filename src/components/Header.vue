<template>

  <header class="pt-8 md:pt-0 sticky border-b-[1px] border-gray-900 z-50 top-0 bg-gray-800 max-h-[10vh] h-fit flex justify-between items-center px-6 md:px-20 py-4">
    <a class="w-fit flex text-white items-center py-1" href="/" >
      <img :src=imageLink class="w-8 max-w-[50px] rounded-full" alt="logo">
      <p class="mx-4  md:text-xl">{{title}}</p>
    </a>
    <div class="hidden lg:flex text-md">
      <router-link to="/home" class="text-white mx-4">Home</router-link>
      <router-link to="/about" class="text-white mx-4">About</router-link>
      <router-link to="/portfolio" class="text-white mx-4">Portfolio</router-link>
      <router-link to="/contact" class="text-white mx-4">Get in Touch</router-link>
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
