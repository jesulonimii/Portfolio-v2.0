<template>

  <div v-if=video class="mx-0 my-4 w-full justify-center flex md:block">
    <div id="vidOverlay"  class="pointer-events-none lg:pointer-events-auto z-10 group w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden bg-cover rounded-3xl absolute">

      <div  class="h-full flex flex-col rounded-md p-6 bg-[#374151ba] group-hover:bg-[#1f2937e6] hover:bg-[#1f2937e6]  translate-y-[70%] lg:translate-y-[75%] hover:translate-y-[0%] group-hover:translate-y-[0%] transition duration-1000 ease-in-out">
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

    <div class="peer-hover:video-container lg:hidden w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-3xl  relative overflow-hidden z-0">
      <video id="video" muted loop class="w-full h-full absolute object-cover z-0"  @mouseover=onVidPlay($event) >
        <source :src="[`/video/${imgSrc}`]" type="video/mp4" />
      </video>
    </div>

    <div class="hidden lg:block w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-3xl relative overflow-hidden z-0">
      <video autoplay muted loop class="w-full h-full absolute object-cover z-0" >
        <source :src="[`/video/${imgSrc}`]" type="video/mp4" />
      </video>
    </div>


  </div>

  <div v-else class="mx-0 my-4 w-full justify-center flex md:block">
    <div
        class="group w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden  bg-cover rounded-3xl absolute">

      <div
          class="h-full flex flex-col rounded-md p-6 bg-[#374151ba] group-hover:bg-[#1f2937e6]  translate-y-[70%] lg:translate-y-[75%] group-hover:translate-y-[0%] transition duration-1000 ease-in-out">
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

    <div class="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] bg-cover bg-center rounded-3xl"
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

function onVidPlay(event) {

  document.querySelectorAll('video').forEach(vid => vid.pause());
  event.target.play()

  let overlay = document.querySelectorAll('#vidOverlay')

  /*overlay.forEach((x)=>{

    x.setAttribute('class', 'lg:pointer-events-auto z-10 group w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden bg-cover rounded-3xl absolute')

  })
*/



}

function onVidPause(event) {

  let overlay = document.querySelectorAll('#vidOverlay')

  overlay.forEach((x)=>{

    x.setAttribute('class', 'pointer-events-none lg:pointer-events-auto z-10 group w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] overflow-hidden bg-cover rounded-3xl absolute')

  })


}




</script>


