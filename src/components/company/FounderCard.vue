<script setup>
import image from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center">

      <div class="col-lg-6 col-md-6 col-sm-10">
        <div class="py-4 px-5">
          <span class="gen-sm-title">Our Founder</span>
          <h2>Dr. Mike Botts</h2>
          <p class="about-text flex-wrap flex-grow-1">
            Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm founded by Dr. Michael Botts, who has been in business for nearly two decades. Drawing from his experience running the VisAnalysis and Systems Technology (VAST) Lab, Botts Inc. serves a diverse range of private and public sector clients.
          </p>

        </div>
      </div>

      <div class="col-md-6 text-center mb-4">
        <div class="card-img">
          <img :src="image" class="img-fluid rounded img-box" alt="Mike Botts'"/>
        </div>
      </div>



    </div>
  </div>
</template>

<style scoped>

.about-text{
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-size: 1.25em;
}



</style>

