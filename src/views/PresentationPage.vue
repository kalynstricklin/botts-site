<script setup>

import PresentationCards from "@/_components/presentations/PresentationCards.vue";
</script>

<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row py-5">
        <div class="col-12 text-center text-white">
          <h1>Presentations</h1>
          <p class="section-subtitle" style="color: lightgray">All Presentations available to use. Please reference appropriately.</p>
        </div>
      </div>
    </div>
    <section id="presentations">
      <PresentationCards/>
    </section>
  </div>
</template>

<style scoped>
.page-content {
  padding-top: 80px;
}
</style>
