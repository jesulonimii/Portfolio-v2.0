<template>

  <a v-if="external" :href=href class="px-6 py-2.5 rounded-md hover:bg-[#fcd34d17] capitalize border-2 border-amber-300">{{name}}</a>
  <router-link v-else :to=href class="px-6 py-2.5 rounded-md hover:bg-[#fcd34d17] capitalize border-2 border-amber-300 text-amber-300">{{name}}</router-link>

</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>
