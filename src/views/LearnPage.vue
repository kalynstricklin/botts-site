<script setup>

import LearnCards from "@/components/learn/LearnCards.vue";
import PresentationCard from "@/components/learn/PresentationCard.vue";
import BlogPosts from "@/components/learn/BlogPosts.vue";
import ProjectCarousels from "@/components/learn/ProjectCarousels.vue";



</script>

<template>
  <div>
    <div class="container-fluid white-container">
      <section id="cards" class="py-4">
        <LearnCards/>
      </section>

      <section id="presentations" class="py-4">
        <PresentationCard/>
      </section>

    </div>


    <section id="projects" class="py-3">
      <ProjectCarousels/>
    </section>

    <div class="container-fluid white-container">
      <section id="presentations">
        <BlogPosts/>
      </section>
    </div>


  </div>
</template>

<style scoped>
.team-card{
  border-color: #faf6ed;
  background-color: #faf6ed;
  padding: 15px;
}

</style>