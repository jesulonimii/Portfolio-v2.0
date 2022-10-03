<template>


  <a v-if="external" target="_blank" :href=href :class="[color, textColor, 'px-2 py-6 rounded-lg flex items-center justify-center', customClasses]" >
    <i :class="['fa text-2xl', `fa-${icon}`]"></i>
    <p class="mx-2 uppercase text-sm font-bold">{{name}} </p>
  </a>

  <a v-else :href=href :class="[color, textColor, 'px-2 py-6 rounded-lg flex items-center justify-center', customClasses]" v-if="external">
    <i :class="['fa text-2xl', `fa-${icon}`]"></i>
    <p class="mx-2 uppercase text-sm font-bold">{{name}} </p>
  </a>

</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: "bg-amber-300"
  },
  textColor: {
    type: String,
    default: "text-white"
  },
  href: {
    type: String,
    required: true
  },
  customClasses: {
    type: String
  },
  icon: {
    type: String
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>
