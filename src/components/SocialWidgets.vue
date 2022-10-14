<template>
  
  <div id="widget" class="hidden lg:flex flex-col translate-y-[100%] transition duration-500 sticky w-10 h-fit px-4 fixed absolute bottom-0 opacity-50 left-8 text-2xl text-gray-300 justify-center items-center">
    <a href="https://twitter.com/jesulonimii" target="_blank" class="my-1"><i class="uil uil-twitter"></i></a>
    <a href="/github" target="_blank" class="my-1"><i class="uil uil-github"></i></a>
    <a href="/mail" target="_blank" class="my-1"><i class="fa fa-envelope"></i></a>
    <div class="h-16 w-[2px] mt-1 bg-white"></div>
  </div>

</template>

<script setup>

document.onscroll = function() {
  let widget = document.querySelector('#widget')

  if (window.scrollY > 300) {
   widget.classList.remove('translate-y-[100%]')
  } else {
    widget.classList.add('translate-y-[100%]')
  }
}

</script>
