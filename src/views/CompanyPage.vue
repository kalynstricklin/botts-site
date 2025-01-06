<script setup>
import AboutUs from "@/components/company/AboutUs.vue";
import ImageGallery from "@/components/company/ImageGallery.vue";
import FounderCard from "@/components/company/FounderCard.vue";

</script>

<template>
  <div>
    <div class="card company-card">
      <section id="history" class="py-2">
        <AboutUs/>
      </section>

      <section id="company-images" class="py-3">
          <ImageGallery/>
      </section>


      <section id="company-images" class="py-3">
        <FounderCard/>
      </section>

    </div>

  </div>

</template>

<style scoped>
.company-card{
  border-color: #faf6ed;
  background-color: #faf6ed;
  padding: 15px;
}


</style>
