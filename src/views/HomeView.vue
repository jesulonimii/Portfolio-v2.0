<template>
  <main class="bg-gray-800 px-0 lg:px-20">

    <!-- Hero Section -->
    <div id="home" class="h-full min-h-[90vh]  items-center flex">

      <div class="w-1/6 flex justify-center items-center text-3xl text-amber-300">
        <div class="items-center flex flex-col justify-center px-2 py-2 rounded-full h-fit w-fit bg-gray-700">
          <a href="/github" target="_blank" class="w-fit"><i class="my-2 fa fa-github"></i></a>
          <a href="https://linkedin.com/in/jesulonimii" target="_blank" class="w-fit"><i class="my-2 fa-brands fa-linkedin"></i></a>
          <a href="https://instagram.com/jesulonimii" target="_blank" class="w-fit"><i class="my-2 fa fa-instagram"></i></a>
          <a href="https://twitter.com/jesulonimii" target="_blank" class="w-fit"><i class="my-2 fa fa-twitter"></i></a>
        </div>

      </div>

      <div class=" w-5/6 h-full flex flex-col-reverse lg:flex-row">
        <div class="w-full lg:w-2/5 flex flex-col justify-center h-full text-white">

          <div class="lg:max-w-[500px] mx-8 lg:mx-0  h-fit">
            <h1 class="hidden">Founder Aprihive, Experienced developer and designer, providing solutions since 2019.</h1>
            <h1 class="font-ubuntu font-medium text-3xl lg:text-5xl ">Hi, I'm William</h1>
            <h2 class="my-2 text-amber-300">Fullstack Developer & Designer</h2>
            <p class="my-4 text-gray-300">
              Founder Aprihive, Experienced developer and designer, providing solutions since 2019.
            </p>
            <div class="my-8">
              <Button name="Contact Me!" href="/mail" color="bg-amber-300" textColor="text-gray-800" class="my-8"/>
            </div>
          </div>

          <div class="mt-16 mx-8 lg:mx-0 flex items-center w-fit rounded-full">
            <p class="m-2 text-gray-500">Scroll down</p>
            <i class="fa fa-arrow-down fa-bounce text-amber-300"></i>
          </div>

        </div>

        <div class="hidden lg:block lg:w-3/5  my-8 lg:my-0 pr-56 md:px-24 lg:mr-12">

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




    </div>

    <!-- About Section -->
    <div id="about" class="h-full min-h-[60vh] w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">About Me</h2>
      <p class="text-gray-400 mt-2">Get to know more about me!</p>

      <div class="flex flex-col lg:flex-row h-fit w-full mt-12 px-10 py-8">

        <div class="h-full w-full px-0 lg:px-20">
          <h1 class="hidden">Who is Abodunrin William Jesulonimi?</h1>
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

        <div class="h-full my-12 lg:my-0 w-full flex flex-col justify-center items-center">

          <!-- stacks with language used -->
          <div class="flex justify-center items-center h-full w-full my-8 lg:my-12 w-fit relative">
            <div class="bg-[#252f3e] w-full drop-shadow-lg h-fit py-12 px-8 z-10 rounded-2xl">

              <ListItem class="my-4" content="Android Development" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Website Development" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Graphic Design" icon-color="#fcd34d"/>
              <ListItem class="my-4" content="Logo Animations & Motion Design" icon-color="#fcd34d"/>

            </div>
            <div class="bg-amber-300 w-full drop-shadow-lg absolute h-fit py-12 px-8 rotate-[5deg] rounded-2xl">
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
            <h3 class="font-ubuntu font-bold text-lg w-full flex justify-center capitalize">Tech Stack and Tools 📚</h3>

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
              <TechStackIcon stack="mysql"/>
              <TechStackIcon stack="css-3"/>
              <TechStackIcon stack="git-icon"/>
              <TechStackIcon stack="php"/>
            </div>

          </div>

        </div>

      </div>


    </div>

    <!-- Projects -->
    <div id="portfolio" class="h-full min-h-[60vh] mt-10 w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">Projects</h2>
      <p class="text-gray-400 mt-2">See some of my previous work!</p>

      <div class="w-full my-12 lg:px-16 flex flex-col md:flex-row">


        <ProjectItem title="Trin App" stack-used="Java + PHP + MySql" link="portfolio/trin"
                     img-src="trin.png"
                     description="Android App developed for the Team Revival in Nigeria (TRIN) to keep members of the community up to date with latest news, articles from the community."
                     type="Mobile App"/>


        <ProjectItem title="Camor" stack-used="Illustrator" link="portfolio/camor"
                     img-src="camor.png"
                     description="A logo design for Camor. An imaginary charity foundation. Camor means Love"
                     type="Logo Design"/>


        <ProjectItem title="Kik" stack-used="Adobe After Effects" link=""
                     img-src="kik logo animation.mp4"
                     description="Logo Animation for Kik. A social media messaging app. (Not Contracted)"
                     type="Logo Animation" :video="true" />






      </div>

      <Button name="View Full Portfolio" href="/portfolio" custom-classes="text-gray-800"/>


    </div>
    
    <div class="h-16 my-12"></div>


  </main>
</template>

<script setup>
import Button from '../components/Button.vue'
import ListItem from "../components/ListItem.vue";
import TechStackIcon from "../components/TechStackIcon.vue"
import ProjectItem from "../components/ProjectBar.vue"


const videos = document.getElementsByTagName("video");


</script>