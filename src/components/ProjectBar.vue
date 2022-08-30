<template>

  <div v-if=video class="lg:mx-2 my-4 w-full  flex md:w-full lg:w-1/3 justify-center relative">

    <div id="overlay" class="group w-full aspect-square overflow-hidden bg-cover rounded-3xl absolute z-10 "  >

      <div class="coverlay w-full h-full flex flex-col rounded-md p-6 sm:pt-8 md:pt-2 lg:pt-6 bg-[#374151ba] absolute group-hover:bg-[#1f2937e6] hover:bg-[#1f2937e6]  translate-y-[70%] sm:translate-y-[84.5%] lg:translate-y-[75%] group-hover:translate-y-[0%] transition duration-1000 ease-in-out">
        <h2 class="text-lg text-white font-bold capitalize">{{ title }}</h2>
        <h3 class="text-sm text-amber-300 uppercase">{{ type }}</h3>

        <p class="my-4 text-gray-300 text-sm lg:text-md">
          {{ description }}
        </p>

        <div class="flex w-full items-center">
          <i class="fa fa-code text-amber-300"></i>
          <p class="text-sm mx-2">{{ stackUsed }}</p>
        </div>

        <Button name="View Project" :href=link custom-classes="text-sm lg:text-md my-4 text-gray-700 font-bold flex justify-center "/>

      </div>

    </div>

    <div class="w-full aspect-square rounded-3xl relative flex overflow-hidden z-0">
      <video id="video" muted loop class="w-full h-full absolute object-cover z-0" webkit-playsinline playsinline >
        <source :src="[`/video/${imgSrc}`]" type="video/mp4" />
      </video>
    </div>


  </div>

  <div v-else class="lg:mx-2 my-4 w-full h-full flex md:w-full lg:w-1/3 justify-center  relative">

    <div id="overlay" class="group w-full aspect-square  overflow-hidden  bg-cover rounded-3xl absolute">
      <div class=" coverlay w-full h-full flex flex-col rounded-md p-6 sm:pt-8 md:pt-2 lg:pt-6 bg-[#374151ba] absolute group-hover:bg-[#1f2937e6]  translate-y-[70%] sm:translate-y-[84.5%] lg:translate-y-[75%] group-hover:translate-y-[0%] transition duration-1000 ease-in-out">
        <h2 class="text-lg text-white font-bold capitalize">{{ title }}</h2>
        <h3 class="text-sm text-amber-300 uppercase">{{ type }}</h3>

        <p class="my-4 text-gray-300 text-sm lg:text-md">
          {{ description }}
        </p>

        <div class="flex w-full items-center">
          <i class="fa fa-code text-amber-300"></i>
          <p class="text-sm mx-2">{{ stackUsed }}</p>
        </div>

        <Button name="View Project" :href=link custom-classes="text-sm lg:text-md my-4 text-gray-700 font-bold flex justify-center "/>

      </div>
    </div>

    <div class="w-full h-fit aspect-square bg-cover bg-center rounded-3xl"
         :style="[`background-image: url('/img/portfolio/${imgSrc}');`]">

    </div>
  </div>



</template>

<script setup>

import TechStackIcon from "./TechStackIcon.vue";
import Button from "./Button.vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  stackUsed: {
    type: String,
    required: true
  },
  video: {
    type: Boolean
  }
})


//video = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}

document.addEventListener('scroll', autoPlay)

function autoPlay(){

  const video = document.querySelectorAll("#video")

  video.forEach((el)=>{
    if (isInViewport(el)){

      if (el){
        el.play()
      }

    }
    else {
      if (!el.paused){
        el.pause()
      }
    }
  })

}




</script>

<style scoped>

@media (min-width: 500px) {
  .coverlay{
    transform: translateY(80%);
  }
}

@media (min-width: 580px) {
  .coverlay{
    transform: translateY(84%);
  }
}

@media (min-width: 625px) {
  .coverlay{
    transform: translateY(86%);
  }
}

@media (min-width: 619px) {
  .coverlay{
    transform: translateY(84%);
  }
}

@media (min-width: 735px) {
  .coverlay{
    transform: translateY(85%);
  }
}

@media (min-width: 772px) {
  .coverlay{
    transform: translateY(80%);
  }
}

@media (min-width: 980px) {
  .coverlay{
    transform: translateY(85%);
  }
}

@media (min-width: 1025px) {
  .coverlay{
    transform: translateY(60%);
  }
}

@media (min-width: 1095px) {
  .coverlay{
    transform: translateY(65%);
  }
}

@media (min-width: 1195px) {
  .coverlay{
    transform: translateY(69%);
  }
}

@media (min-width: 1320px) {
  .coverlay{
    transform: translateY(75%);
  }
}


</style>


