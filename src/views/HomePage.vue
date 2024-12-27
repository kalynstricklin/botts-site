<script setup>
// import CardGroup from "@/components/homepage/CardGroup.vue";
import HomeImage from "@/components/homepage/HomeImage.vue";
import MissionStatement from "@/components/homepage/MissionStatement.vue";
import TestimonialComponents from "@/components/homepage/TestimonialComponents.vue";
import ImageComp from "@/components/homepage/ImageComp.vue";



</script>

<template>
  <div>
    <section class="py-2">
      <HomeImage/>
    </section>

    <div class="card">
      <section class="py-2">
        <MissionStatement/>
      </section>


      <section class="py-2">
        <ImageComp/>
      </section>



      <section class="py-3">
        <TestimonialComponents/>
      </section>
    </div>
<!--    <section>-->
<!--      <CardGroup class="py-3"/>-->
<!--    </section>-->


  </div>

</template>

<style scoped>
</style>

