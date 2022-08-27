<template>

  <main class="text-gray-300 bg-gray-800 min-h-[92vh] w-full flex flex-col lg:flex-row justify-center px-4 lg:px-32">

    <div class="w-full lg:w-1/2 p-8 flex flex-col">
      <h1 class="font-ubuntu font-bold text-white text-3xl">Trin App</h1>
      <p class="text-amber-300 text-sm my-2">Trin100</p>
      <div class="w-full rounded-3xl my-4 min-h-[60vh] lg:h-full bg-center bg-cover" style="background-image: url('/img/portfolio/trin.png')"></div>

    </div>
    <div class="w-full lg:w-1/2 p-8">

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Description</h2>
        <p>
          Team revival in Nigeria is a community of teenagers in
          Nigeria whose goal and mission is to divinely
          inspire people to yearn and build an intimate relationship with God
        </p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Client</h2>
        <p>Personal Project for Trin100</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">My Role</h2>
        <p>
          I was tasked with developing a simple blog App
          that featured snippets from discussions, articles by
          members of the community.
        </p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Project Timeline</h2>
        <p>
          March 2021 - April 2021
        </p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Technologies Used</h2>
        <ul class="list-disc px-5">
          <li>Java</li>
          <li>PHP</li>
          <li>MySql</li>
        </ul>
      </div>
      
      <div class="flex w-full h-6">
        <IconButton href="https://github.com/jesulonimii/Trin-App" name="Check Project" text-color="text-gray-800" />
      </div>


    </div>

  </main>


</template>

<script setup>

import IconButton from "../components/IconButton.vue";
</script>
