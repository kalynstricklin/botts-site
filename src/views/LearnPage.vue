<script setup>

import {onMounted} from "vue";
import OSHLaptop from "@/components/learn/OSHLaptop.vue";
import SoftwareCards from "@/components/learn/SoftwareCards.vue";
import ClickableCards from "@/components/cards/ClickableCards.vue";

onMounted(() => {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (const element of reveals) {
      let windowHeight = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal, {passive: true});

  reveal();
});



const addResources = [
  {
    title: "Documentation",
    description: "Access technical documentation, user guides, and best practices to maximize OSH’s capabilities.",
    links: "https://opensensorhub.org/documentation/"
  },
  {
    title: "Presentations",
    description: "View presentations from events, and technical discussions about the latest innovations from OSH",
    links: "/learn/presentations"
  },
  {
    title: "OSH Community",
    description: "Join discussions, ask questions, and collaborate with other users, developers, and experts in the OSH community.",
    links: ""
  },
  {
    title: "OSH Showcase",
    description: "Provides ready to use examples designed to help developers build with the OSH.js toolkit, offering code snippets that you can easily integrate into using Connected Systems.",
    links: "https://opensensorhub.github.io/osh-js/dev/showcase/"
  },
];


</script>

<template>
  <div class="">
    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Learn to Build with the OpenSensorHub Platform</h1>
      </div>
    </div>

<!--    <SoftwareSimple/>-->



    <section class="py-5 reveal">
      <OSHLaptop/>
    </section>

    <section class="py-3 reveal">
      <SoftwareCards/>
    </section>



    <section id="additional-rsc" class="reveal py-3">
      <div class="row py-5">
        <div class="text-center justify-content-center align-content-center text-white">
          <h2>Additional Resources</h2>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div v-for="(item, index) in addResources" :key="index" class="col-lg-4 mb-3 d-flex align-items-stretch">
            <ClickableCards
                :title="item.title"
                :description="item.description"
                :links="item.links"
            />
          </div>
        </div>
      </div>
    </section>





<!--    <section class="py-3 reveal">-->
<!--      <GeoRobotix/>-->
<!--    </section>-->
  </div>
</template>

<style scoped>

.reveal{
  position: relative;
  transform: translateY(10px);
  opacity: 0;
  transition: 2s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}


h3{
  color: #d39f44;
}
@media only screen and (max-width: 481px) {
  h2{
    font-size: 1.3rem;
  }
}
</style>