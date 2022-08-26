<template>
  <main class="bg-gray-800 px-20">

    <!-- Hero Section -->
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
          <p class="m-2 text-gray-500">Scroll down</p>
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

    <!-- About Section -->
    <div class="h-full min-h-[60vh] w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">About Me</h2>
      <p class="text-gray-400 mt-2">Get to know more about me!</p>

      <div class="flex h-fit w-full mt-12 px-10 py-8">

        <div class="h-full w-full px-20">
          <p>
            I am William Jesulonimi Abodunrin, a developer based in Lagos, Nigeria.
            <br><br>
            I am currently a 200Level student of Obafemi Awolowo University studying for a BSc. in Computer Science and
            Engineering.
            <br><br>
            I am a full stack web developer and designer with 3+ years of experience equipped with knowledge of various
            technologies to solve problems by building efficient solutions ranging from Web/Mobile Apps to APIs.
            <br><br>
            I love technology, animations, football, movies and Manchester United. <b class="text-red-500">❤</b>
          </p>
        </div>

        <div class="h-full w-full flex flex-col justify-center items-center">

          <!-- stacks with language used -->
          <div class="flex justify-center items-center h-full w-full">
            <div class="bg-[#252f3e] drop-shadow-lg h-fit py-12 px-8 z-10 rounded-2xl">

              <ListItem class="my-4" content="Android Development" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Website Development" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Graphic Design" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Logo Animations & Motion Design" icon-color="#fcd34d"/>

            </div>
            <div class="bg-amber-300 drop-shadow-lg absolute h-fit py-12 px-8 rotate-[5deg] rounded-2xl">
              <div class="invisible">
                <ListItem class="my-4" content="Android Development" icon-color="#fcd34d"/>
                <ListItem class="my-4" content="Website Development" icon-color="#fcd34d"/>
                <ListItem class="my-4" content="Graphic Design" icon-color="#fcd34d"/>
                <ListItem class="my-4" content="Logo Animations & Motion Design" icon-color="#fcd34d"/>
              </div>
            </div>
          </div>

          <!-- Tech Stack -->
          <div class="flex flex-col mt-12 w-full px-8">
            <h3 class="font-ubuntu font-bold text-lg">Tech Stack 📚</h3>

            <div class="grid grid-cols-8 gap-2 my-4">
              <TechStackIcon stack="nodejs-icon"/>
              <TechStackIcon stack="vue"/>
              <TechStackIcon stack="tailwindcss-icon"/>
              <TechStackIcon stack="javascript"/>
              <TechStackIcon stack="mongodb-icon"/>
              <TechStackIcon stack="kotlin-icon"/>
              <TechStackIcon stack="firebase"/>
              <TechStackIcon stack="java"/>
              <TechStackIcon stack="adobe-after-effects"/>
              <TechStackIcon stack="adobe-photoshop"/>
              <TechStackIcon stack="adobe-illustrator"/>
              <TechStackIcon stack="blender"/>
              <TechStackIcon stack="html-5"/>
              <TechStackIcon stack="css-3"/>
              <TechStackIcon stack="git-icon"/>
              <TechStackIcon stack="github-icon" background="true"/>
            </div>

          </div>

        </div>

      </div>


    </div>

    <!-- Projects -->
    <div class="h-full min-h-[60vh] mt-10 w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">Projects</h2>
      <p class="text-gray-400 mt-2">See some of my previous work!</p>

      <div class="w-full my-12 px-16 flex grid grid-cols-3 gap-8">

        <ProjectItem title="Trin App" stack-used="Java + Kotlin + PHP + MySql" link=""
                     img-src="trin.png"
                     description="Android App developed for the Team Revival in Nigeria (TRIN) to keep members of the community up to date with latest news, articles from the community."
                     type="TRIN100"  class="w-fit"/>

        <ProjectItem class="w-fit" title="Reasonate" stack-used="Design" link=""
                     img-src="reasonate-1.png"
                     description="Logo design for Reasonate, a non-profit oragnization that provides a platform to people to express themselves"
                     type="reasonate.com"/>

        <ProjectItem class="w-fit" title="House Of Jemima" stack-used="Design" link=""
                     img-src="reasonate-1.png"
                     description="Logo design for Reasonate, a non-profit oragnization that provides a platform to people to express themselves"
                     type="Design"/>


      </div>


    </div>


  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
import ListItem from "../components/ListItem.vue";
import TechStackIcon from "../components/TechStackIcon.vue"
import ProjectItem from "../components/ProjectBar.vue"


</script>