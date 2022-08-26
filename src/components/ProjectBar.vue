<template>

  <div class="">
    <div
        class="group w-[350px] h-[350px] overflow-hidden bg-gradient-to-t from-[#000000c7] via-[#00000042] to-transparent bg-cover rounded-3xl absolute">

      <div
          class="h-full flex flex-col rounded-md p-6 bg-[#1f2937e6]  translate-y-[75%] group-hover:translate-y-[0%] transition duration-1000 ease-in-out">
        <h2 class="text-lg text-white font-bold capitalize">{{ title }}</h2>
        <h3 class="text-sm text-amber-300 uppercase">{{ type }}</h3>

        <p class="my-4 text-gray-300">
          {{ description }}
        </p>

        <div class="flex w-full items-center">
          <i class="fa fa-code text-amber-300"></i>
          <p class="text-sm mx-2">{{ stackUsed }}</p>
        </div>

        <Button name="Learn More" :href=link custom-classes="my-4 text-gray-700 font-bold flex justify-center uppercase"/>

      </div>

    </div>

    <div class="w-[350px] h-[350px] bg-cover rounded-3xl"
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
  reversed: {
    type: Boolean,
    default: false
  }
})


</script>
