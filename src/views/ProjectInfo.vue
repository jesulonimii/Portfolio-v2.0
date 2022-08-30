<template>

  <main class="text-gray-300 bg-gray-800 h-fit min-h-[90vh] w-full flex flex-col lg:flex-row justify-center px-4 lg:px-32">

    <div class="w-full lg:w-1/2 px-8 lg:pt-8 flex flex-col h-full my-4">
      <h1 class="font-ubuntu font-bold text-white text-3xl">{{ project.name }}</h1>
      <p class="text-amber-300 text-sm my-2">{{ project.company }}</p>

      <div class="-mx-14 md:mx-0">
        <swiper v-if="project.video" class="w-full aspect-video my-4 -m-80" :slides-per-view=1 :space-between=10 @swiper=onSwiper @slideChange=onSlideChange>

          <swiper-slide v-for="video in project.images" class="flex flex-col">
            <video id="video" webkit-playsinline playsinline autoplay muted controlsList="nodownload" loop class="w-full h-full rounded-0 md:rounded-2xl absolute object-cover z-0"  >
              <source :src="[`/video/${video}`]" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div v-if=project.sound @click=toggleMute class="group cursor-pointer h-fit relative text-gray-800 z-50 px-2 py-1.5 mx-4 my-2 flex items-center bg-amber-300 overflow-hidden w-8 hover:w-40 opacity-60 hover:opacity-100 transition-width duration-[1s] ease-in-out rounded-full">
              <i id="toggle" class="fa-solid fa-volume-xmark"></i>
              <p id="toggleText" class="mx-2 whitespace-nowrap text-sm font-bold">Unmute Video</p>
            </div>
          </swiper-slide>
        </swiper>

        <swiper v-else-if="project.images.length === 1" class="w-full aspect-square my-4 lg:h-full" :slides-per-view=1 :space-between=10 @swiper=onSwiper @slideChange=onSlideChange>

          <swiper-slide v-for="img in project.images">
            <div class="w-full rounded-3xl my-4 pb-[100%] lg:h-full bg-center bg-cover" :style="[`background-image: url('/img/portfolio/${img}')`]"></div>
          </swiper-slide>
        </swiper>
        <swiper v-else class="w-full pb-[100%] my-4 lg:h-full" :centered-slides=true :loop=true :autoplay=autoplay :grab-cursor=true :pagination=true :slides-per-view=1.1 :space-between=10 @swiper=onSwiper @slideChange=onSlideChange>

          <swiper-slide v-for="img in project.images">
            <div class="w-full rounded-3xl my-4 pb-[100%] lg:h-full bg-center bg-cover" :style="[`background-image: url('/img/portfolio/${img}')`]"></div>
          </swiper-slide>
        </swiper>

      </div>


    </div>
    <div class="w-full lg:w-1/2 px-8 lg:pt-8 justify-center flex flex-col">

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Description</h2>
        <p>{{ project.description }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Product</h2>
        <p>{{ project.product }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">My Role</h2>
        <p>{{ project.role }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Project Timeline</h2>
        <p>{{ project.timeline }}</p>
      </div>

      <div class="my-4 flex flex-col">
        <h2 class="text-sm text-amber-300">Technologies & Tools Used</h2>
        <ul class="list-disc px-5">
          <li v-for="x in project.stack">{{ x }}</li>

        </ul>
      </div>

      <div class="flex w-full h-6 mt-8 mb-36 lg:mb-0">
        <IconButton v-if="project.link" :href="project.link.url" :icon="project.link.to" name="Check Project" text-color="text-gray-800" />
      </div>
      
    </div>

  </main>


</template>

<script setup>
import { useRoute } from 'vue-router';
import IconButton from "../components/IconButton.vue";


const route = useRoute();

const portfolioItemData = {
  trin: {
    name: "Trin App",
    company: "Trin100",
    description: "Team revival in Nigeria is a community of teenagers in Nigeria whose goal and mission is to divinely inspire people to yearn and build an intimate relationship with God.",
    product: "Mobile App",
    role: "I was tasked with developing a simple blog App that featured snippets from discussions, articles by members of the community.",
    timeline: "March 2021 - April 2021",
    images: ["trin.png"],
    stack: ["Java", "PHP", "Mysql"],
    link: {to:"github", url: "https://github.com/jesulonimii/Trin-App"}
  },
  byg: {
    name: "BYG App",
    company: "Personal Project",
    description: "Beautiful Yet Godly is an organization that writes christian article that'll keep you encouraged, laughing or in deep thoughts. 🙂",
    product: "Mobile App",
    role: "I developed an App that housed the website for BYG website and links to the social media handles of the community and also displayed in a feed: news flash and short articles from a REST API I built.",
    timeline: "February 2021 - March 2021",
    images: ["byg.png"],
    stack: ["Java", "PHP", "Mysql"],
    link: {to:"github", url: "https://github.com/jesulonimii/BYG-App-Source-Code"}
  },
  linkQr: {
    name: "Link-QR App",
    company: "Personal Project",
    description: "Link-Qr is an android application for creating QR codes, scanning Qr codes and barcodes in real time.",
    product: "Mobile App",
    role: "I developed the frontend of the app.",
    timeline: "February 2021 - March 2021",
    images: ["link-qr.png", "link-qr-2.png"],
    stack: ["Java", "PHP", "Mysql"],
    link: {to:"github", url: "https://github.com/jesulonimii/Link-Qr"}
  },
  aprihive: {
    name: "Aprihive",
    company: "Aprihive",
    description: "Aprihive is an android app made to allow users connect with other sellers, engage with customers and close more sales from the app.",
    product: "Website, Mobile App & Backend",
    role: "I developed both the frontend app, the backend and the landing page of the website.",
    timeline: "October 2021 - present.",
    images: ["aprihive.jfif", "aprihive-4.jpg", "aprihive-2.jpg", "aprihive-3.jpg",  "aprihive-5.jpg"],
    stack: ["Java", "Kotlin", "Firebase", "NodeJs", "TailwindCss" ],
    link: {to:"globe", url: "https://aprihive.com"}
  },
  camor: {
    name: "Camor",
    company: "Personal Project",
    description: "Camor is an imaginary charity foundation. Camor means Love.",
    product: "Logo Design",
    role: "Logo design to capture what the brand is all about.",
    timeline: "October 2021",
    images: ["camor.png", "camor-4.jpg", "camor-2.jpg", "camor-3.jpg" ],
    stack: ["Inkscape"],
    link: null
  },
  reasonate: {
    name: "Reasonate",
    company: "Personal Project",
    description: "Reasonate is an imaginary non-profit oragnization that provides a platform to people to express themselves and the issues they go through in their society as a result of environment, government etc.",
    product: "Logo Design",
    role: "Logo design to capture what the brand is all about.",
    timeline: "February 2021",
    images: ["Reasonate-1.png", "Reasonate-4.jpg", "Reasonate-2.jpg", "Reasonate-3.jpg" ],
    stack: ["Inkscape", "Adobe Photoshop", "Figma"],
    link: null
  },
  themelite: {
    name: "Themelite",
    company: "Themelite",
    description: "Themelite is an android Android Library for quick implementation of dark theme in native android apps.",
    product: "Java Library",
    role: "I developed the library in android studio.",
    timeline: "February 2021",
    images: ["Themelite.png"],
    stack: ["Java"],
    link: {to:"github", url: "https://github.com/jesulonimii/Themelite"}
  },
  hoj: {
    name: "House Of Jemima",
    company: "House of Jemima",
    description: "House of Jemima is a beauty store located in Lagos, Nigeria.",
    product: "Website",
    role: "I developed the website to show information about the store and drive visitors to the social media handles of the store.",
    timeline: "June 2021",
    images: ["hoj.png"],
    stack: ["Bootstrap",  "HTML", "CSS", "Javascript"],
    link: {to:"github", url: "https://github.com/jesulonimii/Themelite"}
  },
  dutyist: {
    name: "Dutyist",
    company: "Dutyist",
    description: "Dutyist is a productivity app.",
    product: "Logo Design",
    role: "Logo design to capture what the brand is all about.",
    timeline: "July 2022",
    images: ["dutyist-1.png", "dutyist-2.png" ],
    stack: ["July 2022"],
    link: null
  },
  "crystal-stitches": {
    name: "Crystal Stitches",
    company: "Crystal Stitches",
    description: "Crystal Stitches is an imaginary charity foundation. Crystal Stitches means Love.",
    product: "Logo Design",
    role: "Logo design to capture what the brand is all about.",
    timeline: "July 2022",
    images: ["Crystal-Stitches.png", "crystal-stitches (6).png", "crystal-stitches (2).png", "crystal-stitches (3).png", "crystal-stitches (4).png", "crystal-stitches (1).png"],
    stack: ["Adobe Illustrator", "Photoshop"],
    link: null
  },
  kik: {
    name: "Kik Logo Animation",
    company: "Personal Project",
    description: "Kik is a social media messaging app.",
    product: "Logo Animation",
    role: "I created a simple but catchy logo Animation to showcase what Kik as a brand is about.",
    timeline: "August 30th 2021",
    images: ["kik logo animation.mp4"],
    video: true,
    sound: false,
    stack: ["Adobe After Effects"],
    link: null
  },
  upskill: {
    name: "Upskill Logo Animation",
    company: "Upskill",
    description: "Upskill is a community of tech entusiasts based in Obafemi Awolowo University (OAU), Nigeria.",
    product: "Logo Animation",
    role: "I created a simple but catchy logo Animation for Upskill.",
    timeline: "March 2022",
    images: ["upskill-new.mp4"],
    video: true,
    sound: false,
    stack: ["Adobe After Effects"],
    link: null
  },
  ["aprihive-logo-animation"]: {
    name: "Aprihive Logo Animation",
    company: "Aprihive",
    description: "Aprihive is an android app made to allow users connect with other sellers, engage with customers and close more sales from the app.",
    product: "Logo Animation",
    role: "I created a simple but catchy logo Animation to illustrate the tag lines of the brand.",
    timeline: "November 2021",
    images: ["aprihive logo animation.mp4"],
    video: true,
    sound: false,
    stack: ["Adobe After Effects"],
    link: null
  },
  ["target-logo-animation"]: {
    name: "Target Logo Animation",
    company: "Personal Project",
    description: "Target is top tier retail company based in the US",
    product: "Logo Animation",
    role: "I created a catchy logo animation. The idea was to get as creative as I could with the logo.",
    timeline: "October 2021",
    images: ["target logo animation.mp4"],
    video: true,
    sound: false,
    stack: ["Adobe After Effects", "Blender"],
    link: null
  },
  ["ewc-logo-animation"]: {
    name: "Edgewood College Logo Animation",
    company: "Edgewood College",
    description: "Edgewood College is a sixth form college located in Lekki, Nigeria.",
    product: "Logo Animation",
    role: "I worked on the logo animation",
    timeline: "May 2022",
    images: ["Edgewood-logo-animation.mp4"],
    video: true,
    sound: false,
    stack: ["Adobe After Effects"],
    link: null
  },
  ["ngd-logo-animation"]: {
    name: "NGD Logo Animation",
    company: "Personal Project",
    description: "Naija Graphics Designers, Shortened and better known as NGD is a Facebook community of designers based in Nigeria.",
    product: "Logo Animation",
    role: "I created a simple but catchy logo Animation to showcase briefly what NGD is made up of",
    timeline: "August 30th 2021",
    images: ["ngd logo intro animation.mp4"],
    video: true,
    sound: true,
    stack: ["Adobe After Effects"],
    link: null
  },


}

let project = portfolioItemData[route.params.name.toLowerCase()]




// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

SwiperCore.use([ Pagination, Autoplay])
const autoplay= {
  delay: 3500,
  disableOnInteraction: false
}
const onSwiper = (swiper) => {};
const onSlideChange = () => {};

function toggleMute() {
  console.log('hi mom')

  const video = document.getElementById("video");
  const toggle = document.getElementById("toggle");
  const toggleText = document.getElementById("toggleText");

  if (video.muted){
    video.muted = !video.muted;
    toggle.setAttribute("class", "fa fa-volume-high")
    toggleText.innerHTML = "Mute Video"
  }
  else {
    toggle.setAttribute("class", "fa-solid fa-volume-xmark")
    toggleText.innerHTML = "Unmute Video"
    video.muted = !video.muted
  }


}


</script>
