<template>

  <a v-if="external" :href=href :class="[color, textColor, 'px-6 py-2.5 rounded-lg', customClasses]">{{name}}</a>
  <router-link v-else :to=href :class="[color, textColor, 'px-6 py-2.5 rounded-lg', customClasses]">{{name}}</router-link>

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
  external: {
    type: Boolean,
    default: false
  }
})
</script>
