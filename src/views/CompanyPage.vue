<script setup>
import OurStory from "@/components/company/OurStory.vue";
import {onMounted} from "vue";
import WorkAtBotts from "@/components/company/WorkAtBotts.vue";
// import team from "@/assets/team.webp";
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
  <div>
    <section id="story-timeline" class="reveal">
      <OurStory/>
    </section>

    <section id="team-pics" class="mb-3 reveal">
      <div class="background-wrapper">
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
      </div>
    </section>


    <section id="work-at-botts" class="reveal">
      <WorkAtBotts/>
    </section>



<!--    <section id="leadership" class="reveal">-->
<!--      <TeamComp/>-->
<!--    </section>-->

<!--    <section id="team-pics" class="mb-3 reveal">-->
<!--      <div class="container-fluid">-->
<!--        <div class="row py-4 m-2">-->
<!--          <h4 class="gen-orange-title">Team Photos</h4>-->
<!--        </div>-->
<!--        <div class="row g-2 justify-content-center">-->
<!--          <div class="col-12 col-lg-4 col-md-6 col-sm-12">-->
<!--            <img :src="image1" class="img-fluid rounded">-->
<!--          </div>-->
<!--          <div class="col-12 col-lg-4 col-md-6 col-sm-12">-->
<!--            <img :src="image1" class="img-fluid rounded">-->
<!--          </div>-->
<!--          <div class="col-12 col-lg-4 col-md-6 col-sm-12">-->
<!--            <img :src="image1" class="img-fluid rounded">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->


<!--    <section id="test-scroller" class="py-3 reveal">-->
<!--      <TestimonialScroller/>-->
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

.background-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 5rem 0;
  z-index: 1;
  height: auto;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/lines-long.png');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.85;
  z-index: -1;
}
</style>
