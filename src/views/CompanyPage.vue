<script setup>
import OurStory from "@/_components/company/OurStory.vue";
import {onMounted} from "vue";
import WorkHere from "@/_components/company/WorkHere.vue";
import teamTaiwan from "@/assets/team-taiwan.jpg";

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
  <div class="page-content">
    <section id="story-timeline" class="reveal">
      <OurStory/>
    </section>

    <section id="work-at-botts" class="reveal">
      <WorkHere/>
    </section>

    <section id="team-pics" class="mb-3 reveal">
      <div class="container-fluid">
        <div class="row py-4 m-2 text-start">
          <span class="text-uppercase" style="color: lightgray">Gallery</span>
        </div>
        <div class="row g-2 justify-content-center">
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team Taiwan" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-content {
  padding-top: 80px;
}

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


</style>
