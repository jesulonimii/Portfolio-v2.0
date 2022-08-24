<template>
  <div class="w-full flex flex-col justify-between">
    <Header title="Jèsúlonimii™" imageLink="http://jesulonimii.herokuapp.com/images/jesulonimii.jpg"/>
    <main>
      <RouterView />
    </main>
  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/css/tailwind.css'

</script>

