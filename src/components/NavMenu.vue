<template>

  <div id="bottomSheet" class="col">
    <div class="w-full h-fit grid bottom-0 bg-gray-900 p-4 drop-shadow-2xl pb-8 text-white">

      <div class="">
        <div class="w-full mb-4" id="openBtn" @click="checkSheet('open')" >
          <i class="uil uil-apps  float-right text-3xl w-fit px-4 text-center"></i>
        </div>

        <div class="hidden" id="closeBtn" @click="checkSheet('close')">
          <i class="uil uil-times  float-right text-3xl w-fit px-4 text-center"></i>
        </div>
      </div>
      
      <ul class="my-2 flex h-fit">
        <router-link to="/home" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-estate text-2xl w-full text-center"></i>
          <p class="w-full text-center">Home</p>
        </router-link>

        <router-link to="/portfolio" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-bag text-2xl w-full text-center"></i>
          <p class="w-full text-center">Portfolio</p>
        </router-link>

        <router-link to="/contact" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-message text-2xl w-full text-center"></i>
          <p class="w-full text-center">Contact</p>
        </router-link>

      </ul>

      <ul class="my-2 flex h-fit">
        <router-link to="/about" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-file-alt text-2xl w-full text-center"></i>
          <p class="w-full text-center">About</p>
        </router-link>

        <router-link to="/twitter" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-twitter-alt text-2xl w-full text-center"></i>
          <p class="w-full text-center">Twitter</p>
        </router-link>

        <router-link to="/github" @click="checkSheet('close')" class="mx-1 flex flex-col bg-gray-900 h-fit w-1/3 p-2 rounded-xl justify-center">
          <i class="uil uil-github-alt text-2xl w-full text-center"></i>
          <p class="w-full text-center">Github</p>
        </router-link>
      </ul>


    </div>
  </div>

</template>

<script setup>




defineProps({
  name: {
    type: String,
    required: true
  },
  customClasses: {
    type: String
  }
})


let sheet, openToggle, closeToggle = null
import { onMounted } from 'vue';

onMounted(() => {
  sheet = document.querySelector('#bottomSheet')
  openToggle = document.querySelector('#openBtn')
  closeToggle = document.querySelector('#closeBtn')
});

function checkSheet(state) {
  if (state === "open"){
    sheet.setAttribute("class", "exp")
    openToggle.setAttribute("class", "hidden")
    closeToggle.setAttribute("class", "w-full mb-4")


  }
  else if (state === "close") {
    sheet.setAttribute("class", "col")
    closeToggle.setAttribute("class", "hidden")
    openToggle.setAttribute("class", "w-full mb-4")
  }
}







</script>

<style>

.exp{
  z-index: 200;
  position: fixed;
  bottom: 0;
  width: 100%;
  transform: translateY(0%);
  transition: 0.25s ease-in-out;
}

.col{
  z-index: 200;
  position: fixed;
  bottom: 0;
  width: 100%;
  transform: translateY(78%);
  transition: 0.25s ease-in-out;
}

</style>
