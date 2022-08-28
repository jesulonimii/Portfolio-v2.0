<template>

  <main class="text-gray-300 bg-gray-800 h-fit min-h-[90vh] w-full flex flex-col lg:flex-row justify-center px-4 lg:px-32">

    <!--    <div class="w-full lg:w-1/2 px-8 lg:py-8 flex flex-col h-full">
          <h1 class="font-ubuntu font-bold text-white text-3xl">Trin App</h1>
          <p class="text-amber-300 text-sm my-2">Trin100</p>
          <div class="w-full rounded-3xl my-4 pb-[100%] lg:h-full bg-center bg-cover" style="background-image: url('/img/portfolio/trin.png')"></div>

        </div>-->
    <div class="w-full lg:w-1/2 px-8 lg:py-8 flex flex-col h-full">
      <h1 class="font-ubuntu font-bold text-white text-3xl">{{ project.name }}</h1>
      <p class="text-amber-300 text-sm my-2">{{ project.company }}</p>

      <swiper class="w-full pb-[100%] my-4 lg:h-full" :effect="fade" :centered-slides=true :loop=true :autoplay=autoplay :grab-cursor=true :pagination=true :slides-per-view=1.1 :space-between=10 @swiper=onSwiper @slideChange=onSlideChange>

        <swiper-slide v-for="img in project.images">
          <div class="w-full rounded-3xl my-4 pb-[100%] lg:h-full bg-center bg-cover" :style="[`background-image: url('/img/portfolio/${img}')`]"></div>
        </swiper-slide>
      </swiper>

    </div>
    <div class="w-full lg:w-1/2 px-8 lg:py-8">

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Description</h2>
        <p>{{ project.description }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Product</h2>
        <p>{{ project.product }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">My Role</h2>
        <p>{{ project.role }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Project Timeline</h2>
        <p>{{ project.timeline }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Technologies Used</h2>
        <ul class="list-disc px-5">
          <li v-for="x in project.stack">{{ x }}</li>

        </ul>
      </div>

      <div class="flex w-full h-6">
        <IconButton href="https://github.com/jesulonimii/Trin-App" name="Check Project" text-color="text-gray-800" />
      </div>


    </div>

  </main>


</template>

<script setup>
import { useRoute } from 'vue-router';
import IconButton from "../components/IconButton.vue";


const route = useRoute();

const portfolioItemData = {
  trin: {
    name: "Trin App",
    company: "Trin100",
    description: "Team revival in Nigeria is a community of teenagers in Nigeria whose goal and mission is to divinely inspire people to yearn and build an intimate relationship with God.",
    product: "Mobile App",
    role: "I was tasked with developing a simple blog App that featured snippets from discussions, articles by members of the community.",
    timeline: "March 2021 - April 2021",
    images: ["trin.png", "byg.png"],
    stack: ["Java", "PHP", "Mysql"]
  },
  byg: {
    name: "BYG App",
    company: "Beautiful Yet Godly",
    description: "Beautiful Yet Godly is a community of teenagers in Nigeria whose goal and mission is to divinely inspire people to yearn and build an intimate relationship with God.",
    product: "Mobile App",
    role: "I was tasked with developing a simple blog App that featured snippets from discussions, articles by members of the community.",
    timeline: "June 2021 - July 2021",
    images: ["byg.png", "camor.png"],
    stack: ["Java", "PHP", "Mysql"]
  }
}

let project = portfolioItemData[route.params.name]




// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

SwiperCore.use([ Pagination, Autoplay])
const autoplay= {
  delay: 3500,
  disableOnInteraction: false
}
const onSwiper = (swiper) => {};
const onSlideChange = () => {};



</script>
