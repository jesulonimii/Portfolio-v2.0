<template>

  <header class="sticky  border-b-[1px] bg-[#1f2937d1] lg:border-0 border-gray-900 z-50 top-0 max-h-[10vh] h-fit flex justify-between items-center px-6 md:px-20 py-8 filter backdrop-blur-[4px]">

    <a class="w-[10%] flex text-white items-center py-1" href="/" >
      <img :src=imageLink class="w-8 max-w-[50px] rounded-full" alt="logo">
      <p class="mx-4  md:text-xl lg:hidden">{{title}}</p>
    </a>

    <div class="w-[80%] hidden lg:flex justify-center text-md">
      <router-link to="/home" class="text-white hover:text-amber-300 mx-4">Home</router-link>
      <router-link to="/about" class="text-white hover:text-amber-300 mx-4">About</router-link>
      <router-link to="/portfolio" class="text-white hover:text-amber-300 mx-4">Portfolio</router-link>
      <router-link to="/playlist" class="text-white hover:text-amber-300 mx-4">Playlist</router-link>
      <router-link to="/contact" class="text-white hover:text-amber-300 mx-4">Get in Touch</router-link>
    </div>

    <div class="w-fit">
      <ButtonOutlined href="/assets/[resume]-Jesulonimii.pdf" :external=true name="Résumé" class="flex w-fit text-sm" />
    </div>


  </header>


</template>

<script setup>
import ButtonOutlined from "./ButtonOutlined.vue";

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
