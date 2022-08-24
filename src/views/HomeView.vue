<template>
  <main class="bg-gray-800 px-16">
    <div class="h-full min-h-[90vh]   items-center flex">

      <div class="w-1/6 flex justify-center items-center text-3xl text-amber-300">
        <div class="items-center flex flex-col justify-center px-2 py-2 rounded-full h-fit w-fit bg-gray-700">
          <a href="#" class="w-fit"><i class="my-2 fa fa-github"></i></a>
          <a href="#" class="w-fit"><i class="my-2 fa-brands fa-linkedin"></i></a>
          <a href="#" class="w-fit"><i class="my-2 fa fa-instagram"></i></a>
          <a href="#" class="w-fit"><i class="my-2 fa fa-twitter"></i></a>
        </div>

      </div>

      <div class="w-2/6 flex flex-col justify-center h-full text-white">

        <div class="max-w-[500px] h-fit">
          <h1 class="font-ubuntu font-medium text-5xl">Hi, I'm William</h1>
          <h2 class="my-2 text-amber-300">Fullstack Developer & Designer</h2>
          <p class="my-4 text-gray-300">
            High-level experience in web design and devlopment knowledge, producing quality work.
          </p>
          <div class="my-8">
            <Button name="Contact" href="/portfolio" color="bg-amber-300" textColor="text-gray-800" class="my-8"/>
          </div>
        </div>

        <div class="mt-16 flex items-center w-fit rounded-full">
          <p class="m-2">Scroll down</p>
          <i class="fa fa-arrow-down fa-bounce text-amber-300"></i>
        </div>

      </div>

      <div class="w-3/6 px-24 mr-12">

        <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <mask id="mask0" mask-type="alpha">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
          </mask>
          <g mask="url(#mask0)">
            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
            <image class="w-full" href="../assets/me.jpg"/>
          </g>
        </svg>

      </div>



    </div>

    <div class="h-full min-h-[60vh] w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">About Me</h2>
      <p class="text-gray-400 mt-2">Get to Know me</p>


    </div>

  </main>
</template>

<script setup>
import Button from '../components/Button.vue'


</script>