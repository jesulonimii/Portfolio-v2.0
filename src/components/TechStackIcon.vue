<template>
  <a :title=name(stack) >
    <img v-if="size != null" :style="[`transform: scale(${size})`]" class="mx-1 px-2" :src="[`https://raw.githubusercontent.com/gilbarbara/logos/master/logos/${stack}.svg`]" />
    <img v-else-if="background" class="w-12 h-12 mx-1 px-2 bg-white rounded-full" :src="[`https://raw.githubusercontent.com/gilbarbara/logos/master/logos/${stack}.svg`]" />
    <img v-else class="w-12 h-12 mx-1 px-2" :src="[`https://raw.githubusercontent.com/gilbarbara/logos/master/logos/${stack}.svg`]" />
  </a>

</template>

<script setup>
defineProps({
  stack:{
    type: String,
    required: true
  },
  size:{
    type: String,
    default: null
  },
  background:{
    type: Boolean
  }
})



function name(stack) {
  if (stack.includes('-icon')){
    return stack.substring(0,1).toUpperCase() + stack.substring(1, stack.length - 5)
  }
  else {
    return stack.substring(0,1).toUpperCase() + stack.substring(1)
  }
}


</script>