<script setup>

import {onMounted} from "vue";
import LargeCard from "@/components/learn/LargeCard.vue";
import OSHLaptop from "@/components/learn/OSHLaptop.vue";
import ProjectComp from "@/components/learn/SoftwareCards.vue";
import GeoRobotix from "@/components/learn/GeoRobotix.vue";

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

</script>

<template>
  <div class="">
    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Learn to Build with the OpenSensorHub Platform</h1>
      </div>
    </div>

    <section class="reveal">
      <LargeCard/>
    </section>

    <section class="py-5 reveal">
      <OSHLaptop/>
    </section>

    <section class="py-3 reveal">
      <ProjectComp/>
    </section>

    <section class="py-3 reveal">
      <GeoRobotix/>
    </section>
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