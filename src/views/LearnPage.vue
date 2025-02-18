<script setup>

import {onMounted} from "vue";
import LargeCard from "@/components/learn/LargeCard.vue";
import OSHLaptop from "@/components/learn/OSHLaptop.vue";
import ProjectComp from "@/components/learn/SoftwareCards.vue";
import GeoRobotix from "@/components/learn/GeoRobotix.vue";

onMounted(() => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal, {passive: true});

  reveal();
});

</script>

<template>
  <div class="py-5">

    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Learn to Build with the OpenSensorHub Platform</h1>
<!--        <hr/>-->
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

hr{
  border: 2px solid var(--primary-color);
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