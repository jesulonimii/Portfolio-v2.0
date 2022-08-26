<template>
  <main class="bg-gray-800 px-0 lg:px-20">

    <!-- Projects -->
    <div id="portfolio" class="h-full min-h-[60vh] w-full flex flex-col items-center text-white">

      <h2 class="font-ubuntu font-bold text-4xl mt-12 w-fit h-fit">Portfolio</h2>
      <p class="text-gray-400 mt-2">See some of my previous work!</p>

      <div class="w-full my-12 lg:px-16 flex flex-col md:grid m-auto md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">

        <ProjectItem title="Link Qr" stack-used="Java + PHP" link=""
                     img-src="link-qr-2.png"
                     description="Android App for generating QR codes, also for scanning both Qr codes and Barcodes."
                     type="Mobile App"/>

        <ProjectItem title="Trin App" stack-used="Java + PHP + MySql" link=""
                     img-src="trin.png"
                     description="Android App developed for the Team Revival in Nigeria (TRIN) to keep members of the community up to date with latest news, articles from the community."
                     type="Mobile App"/>

        <ProjectItem title="Aprihive App" stack-used="Java + Kotlin + NodeJs + Firebase" link=""
                     img-src="aprihive.jfif"
                     description="An android app made to allow users connect with other sellers, engage with customers and close more sales from the app."
                     type="Mobile App"/>

        <ProjectItem title="Reasonate" stack-used="Illustrator" link=""
                     img-src="reasonate-1.png"
                     description="Logo design for Reasonate, a non-profit oragnization that provides a platform to people to express themselves"
                     type="Logo Design"/>

        <ProjectItem title="Camor" stack-used="Illustrator" link=""
                     img-src="camor.png"
                     description="A logo design for Camor. An imaginary charity foundation. Camor means Love"
                     type="Logo Design"/>

        <ProjectItem title="House Of Jemima" stack-used="Html + Css + Bootstrap" link=""
                     img-src="hoj.png"
                     description="Website design for House of Jemima. A beauty store located in Lagos, Nigeria."
                     type="Website Development"/>

        <ProjectItem title="Themelite" stack-used="Java" link=""
                     img-src="themelite.png"
                     description="Android Library for quick implementation of dark theme in natiive android apps."
                     type="Android Library"/>

        <ProjectItem title="BYG App" stack-used="Java + PHP + MySql" link=""
                     img-src="byg.png"
                     description="Android Web App developed in Java for the Beautiful Yet Godly Website."
                     type="Mobile App"/>

        <ProjectItem title="Edgewood College" stack-used="HTML + Tailwind CSS + NodeJs" link=""
                     img-src="ewc-2.png"
                     description="Website for Edgewood College, A sixth form college located in Lekki, Nigeria."
                     type="Website Development"/>

        <ProjectItem title="Upskill" stack-used="Adobe After Effects" link=""
                     img-src="upskill-new.mp4"
                     description="Logo Animation for Upskill. A community of tech entusiasts based in Obafemi Awolowo University (OAU), Nigeria."
                     type="Logo Animation" :video="true"/>

        <ProjectItem title="Kik" stack-used="Adobe After Effects" link=""
                     img-src="kik logo animation.mp4"
                     description="Logo Animation for Kik. A social media messaging app. (Not Contracted)"
                     type="Logo Animation" :video="true"/>

        <ProjectItem title="Aprihive" stack-used="Adobe After Effects" link=""
                     img-src="aprihive logo animation.mp4"
                     description="Logo Animation for Aprihive. An android app made to allow users connect with other sellers, engage with customers and close more sales from the app."
                     type="Logo Animation" :video="true"/>

        <ProjectItem title="Target" stack-used="Adobe After Effects" link=""
                     img-src="target logo animation.mp4"
                     description="Logo Animation for Target. A retail company based in the US. (Not Contracted)"
                     type="Logo Animation" :video="true"/>

        <ProjectItem title="EdgeWood College" stack-used="Adobe After Effects" link=""
                     img-src="Edgewood-logo-animation.mp4"
                     description="Logo Animation for Krusad. A mobile app startup"
                     type="Logo Animation" :video="true"/>

        <ProjectItem title="NGD" stack-used="Adobe After Effects" link=""
                     img-src="ndg logo intro animation.mp4"
                     description="Logo Animation for Naija Graphics Designers (NGD). A community of designers based in Nigeria."
                     type="Logo Animation" :video="true"/>




      </div>


    </div>


  </main>
</template>

<script setup>
import ProjectItem from "../components/ProjectBar.vue"
</script>


