<script setup>

import PresentationCards from "@/components/presentations/PresentationCards.vue";
</script>

<template>
  <div class="container-fluid py-5">
    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Presentations</h1>
        <p class="section-subtitle" style="color: lightgray">All Presentations available to use. Please reference appropriately.</p>
      </div>
    </div>
    <section id="presentations">
      <PresentationCards/>
    </section>
  </div>
</template>

<style scoped>

</style>
