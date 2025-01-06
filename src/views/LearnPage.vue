<script setup>

import LearnCards from "@/components/learn/LearnCards.vue";
import PresentationCard from "@/components/learn/PresentationCard.vue";
import BlogPosts from "@/components/learn/BlogPosts.vue";
</script>

<template>
  <div class="container-fluid white-container">
    <div>
      <section id="cards" class="py-4">
        <LearnCards/>
      </section>

      <section id="presentations" class="py-4">
        <PresentationCard/>
      </section>

      <section id="presentations">
        <BlogPosts/>
      </section>

    </div>

    <div class="justify-content-center text-center py-4">
      <span class="text-center fw-bold">All Presentations and Documents are available to use. Please reference appropriately.</span>

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