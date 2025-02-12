<script setup>
import OurStory from "@/components/company/OurStory.vue";
import {onMounted} from "vue";

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


</style>
