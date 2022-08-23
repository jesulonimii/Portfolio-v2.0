<template>

  <header class="bg-gray-800 min-h-[10vh] h-fit flex justify-between items-center px-20 py-4">
    <div class="w-fit flex text-white items-center" >
      <img :src=imageLink class="w-12 rounded-full" alt="logo">
      <p class="mx-4 text-xl">{{title}}</p>
    </div>
    <div class="flex text-md">
      <a href="/" class="text-white mx-4">Home</a>
      <a href="/about" class="text-white mx-4">About</a>
      <a href="/portfolio" class="text-white mx-4">Portfolio</a>
      <a href="/contact" class="text-white mx-4">Get in Touch</a>
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
