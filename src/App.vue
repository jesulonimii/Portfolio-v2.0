<template>
  <div class="w-full flex flex-col justify-between">
    <Header title="Jèsúlonimii™" imageLink="/img/me.jpg"/>
    <main class="bg-gray-800">
      <router-view v-slot="{ Component }" >
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <NavMenu  name="nav" class="lg:hidden"/>

  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/css/tailwind.css'
import NavMenu from './components/NavMenu.vue'

</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(2em);
  opacity: 0;
}
</style>

