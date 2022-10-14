<template>
  <main class="bg-gray-800 px-0 lg:px-20">

    <!-- Projects -->
    <div id="portfolio" class="h-full min-h-[60vh] w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">Portfolio</h2>
      <p class="text-gray-400 mt-2">See some of my previous work!</p>

      <div class="w-full my-12 px-8 md:px-8 lg:px-16 flex flex-col md:grid m-auto md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">

        <ProjectItem class="lg:w-full" title="Link Qr" stack-used="Java + PHP" link="/portfolio/link-qr"
                     img-src="link-qr-2.png"
                     description="Android App for generating QR codes, also for scanning both Qr codes and Barcodes."
                     type="Mobile App"/>

        <ProjectItem class="lg:w-full" title="Trin App" stack-used="Java + PHP + MySql" link="/portfolio/trin"
                     img-src="trin.png"
                     description="Android App developed for the Team Revival in Nigeria (TRIN) to keep members of the community up to date with latest news, articles from the community."
                     type="Mobile App"/>

        <ProjectItem class="lg:w-full" title="Aprihive App" stack-used="Java + Kotlin + NodeJs + Firebase" link="/portfolio/aprihive"
                     img-src="aprihive.jfif"
                     description="An android app made to allow users connect with other sellers, engage with customers and close more sales from the app."
                     type="Mobile App"/>

        <ProjectItem class="lg:w-full" title="Reasonate" stack-used="Illustrator" link="/portfolio/reasonate"
                     img-src="reasonate-1.png"
                     description="Logo design for Reasonate, a non-profit oragnization that provides a platform to people to express themselves"
                     type="Logo Design"/>

        <ProjectItem class="lg:w-full" title="Camor" stack-used="Illustrator" link="/portfolio/camor"
                     img-src="camor.png"
                     description="A logo design for Camor. An imaginary charity foundation. Camor means Love"
                     type="Logo Design"/>

<!--        <ProjectItem title="Dutyist" stack-used="Illustrator" link="/portfolio/dutyist"
                     img-src="dutyist-1.png"
                     description="A logo design for Dutyist a productivity app."
                     type="Logo Design"/>-->

        <ProjectItem class="lg:w-full" title="Crystal Stitches" stack-used="Illustrator" link="/portfolio/crystal-stitches"
                     img-src="crystal-stitches.png"
                     description="A logo design for Crytal Stitches, A fashion design brand."
                     type="Logo Design"/>

<!--
        <ProjectItem class="lg:w-full" title="House Of Jemima" stack-used="Html + Css + Bootstrap" link="/portfolio/hoj"
                     img-src="hoj.png"
                     description="Website design for House of Jemima. A beauty store located in Lagos, Nigeria."
                     type="Website Development"/>
-->

        <ProjectItem class="lg:w-full" title="Themelite" stack-used="Java" link="/portfolio/themelite"
                     img-src="themelite.png"
                     description="Android Library for quick implementation of dark theme in native android apps."
                     type="Android Library"/>

        <ProjectItem class="lg:w-full" title="BYG App" stack-used="Java + PHP + MySql" link="/portfolio/byg"
                     img-src="byg.png"
                     description="Android Web App developed in Java for the Beautiful Yet Godly Website."
                     type="Mobile App"/>

<!--        <ProjectItem title="Edgewood College" stack-used="HTML + Tailwind CSS + NodeJs" link="/portfolio/edgewood-website"
                     img-src="ewc-2.png"
                     description="Website for Edgewood College, A sixth form college located in Lekki, Nigeria."
                     type="Website Development"/>-->

        <ProjectItem class="lg:w-full" title="CineFlix" stack-used="Vue + Vite + Tailwind CSS" link="/portfolio/cineflix"
                     img-src="cineflix.png"
                     description="Frontend web app design for a movie streaming app."
                     type="Web App"/>

        <ProjectItem class="lg:w-full" title="ChatHub" stack-used="Vue + Tailwind + Socket.io + NodeJS" link="/portfolio/chathub"
                     img-src="chathub.jpg"
                     description="Chathub is a realtime chat app. It allows users to chat with other users  anonymously in realtime."
                     type="Web App"/>

        <ProjectItem class="lg:w-full" title="Upskill" stack-used="Adobe After Effects" link="/portfolio/upskill"
                     img-src="upskill-new.mp4"
                     description="Logo Animation for Upskill. A community of tech entusiasts based in Obafemi Awolowo University (OAU), Nigeria."
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="Kik" stack-used="Adobe After Effects" link="/portfolio/kik"
                     img-src="kik logo animation.mp4"
                     description="Logo Animation for Kik. A social media messaging app. (Not Contracted)"
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="Aprihive" stack-used="Adobe After Effects" link="/portfolio/aprihive-logo-animation"
                     img-src="aprihive logo animation.mp4"
                     description="Logo Animation for Aprihive. An android app made to allow users connect with other sellers, engage with customers and close more sales from the app."
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="Target" stack-used="Adobe After Effects" link="/portfolio/target-logo-animation"
                     img-src="target logo animation.mp4"
                     description="Logo Animation for Target. A retail company based in the US. (Not Contracted)"
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="Edgewood College" stack-used="Adobe After Effects" link="/portfolio/ewc-logo-animation"
                     img-src="Edgewood-logo-animation.mp4"
                     description="Logo Animation for Edgewood College. A sixth form college located in Lekki, Nigeria. "
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="NGD" stack-used="Adobe After Effects" link="/portfolio/ngd-logo-animation"
                     img-src="ngd logo intro animation.mp4"
                     description="Logo Animation for Naija Graphics Designers (NGD). A community of designers based in Nigeria."
                     type="Logo Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="All Shop" stack-used="Adobe After Effects" link="/portfolio/all-shop"
                     img-src="All-shop-ad.mp4"
                     description="Video Animation for All Shop. A multivendor e-commerce platform."
                     type="Video Animation" :video="true"/>

        <ProjectItem class="lg:w-full" title="SafeDrop" stack-used="Adobe After Effects" link="/portfolio/safedrop"
                     img-src="safedrop.mp4"
                     description="Video Animation for SafeDrop. A Taxi and Logistics services company."
                     type="Video Animation" :video="true"/>


      </div>


    </div>

    <SocialWidgets />



  </main>
</template>

<script setup>
import ProjectItem from "../components/ProjectBar.vue"
import SocialWidgets from "../components/SocialWidgets.vue";

</script>


