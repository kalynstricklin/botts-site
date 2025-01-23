<script setup>

// import LearnCards from "@/components/learn/LearnCards.vue";
import PresentationCard from "@/components/learn/PresentationCard.vue";
// import BlogPosts from "@/components/learn/BlogPosts.vue";
import ProjectCarousels from "@/components/learn/ProjectCarousels.vue";
import AdditionalResourceCards from "@/components/learn/AdditionalResourceCards.vue";
import SoftwareScroller from "@/components/software/SoftwareScroller.vue";
</script>

<template>
  <div>

      <div class="row mt-2">
        <div class="text-center justify-content-center align-content-center">
          <h2 class="text-white">Let's Build Something Together!</h2>
        </div>
      </div>

<!--      <section id="cards" class="py-4">-->
<!--        <LearnCards/>-->
<!--      </section>-->



    <section id="software" class="py-3">
      <div class="row">
        <div class="text-center justify-content-center align-content-center text-white">
          <h3>Discover our Software</h3>
        </div>
      </div>
      <SoftwareScroller/>
    </section>


    <section id="projects" class="py-3">
      <div class="row mb-3">
        <div class="text-center justify-content-center align-content-center text-white">
          <h3>Current Projects</h3>
        </div>
      </div>
      <ProjectCarousels/>
    </section>

    <section id="presentations" class="py-3">
      <PresentationCard/>
    </section>



    <section id="additional-srcs" class="py-3">
      <div class="row mb-3">
        <div class="text-center justify-content-center align-content-center text-white">
          <h3>Additional Resources</h3>
        </div>
      </div>
      <AdditionalResourceCards/>
    </section>




<!--      <section id="blog">-->
<!--        <BlogPosts/>-->
<!--      </section>-->



  </div>
</template>

<style scoped>
h3{
  color: #d39f44;
}
@media only screen and (max-width: 481px) {
  h2{
    font-size: 1.3rem;
  }
}
</style>