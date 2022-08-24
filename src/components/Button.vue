<template>

  <router-link :to=href :class="[color, textColor, 'px-6', 'py-2.5', 'rounded-lg']">{{name}}</router-link>

</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
})
</script>
