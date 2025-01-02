<script setup>
import image from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-md-6 text-center mb-4">
        <div class="card-img">
          <img :src="image" class="img-fluid rounded about-img" alt="Mike Botts'"/>
        </div>
      </div>


      <div class="col-md-6">
        <div class="py-4 px-5">
          <h2 class="gen-sm-title">Presentations</h2>
          <p class="about-text flex-wrap flex-grow-1">
            Botts’ team presentations from conferences and other events. Dive into this material to learn more about OpenSensorHub
          </p>

          <b-button href="/presentations" class="btn-sm gen-btn">View Presentations
            <i class="bi bi-arrow-down-right"></i>
          </b-button>

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

.about-img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
}

</style>

