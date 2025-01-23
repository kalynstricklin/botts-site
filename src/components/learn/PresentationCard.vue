<script setup>
import image from "@/assets/botts-diagram.webp"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="col-md-6 text-center mb-4">
        <div class="card-img">
          <img :src="image" class="img-fluid rounded about-img" alt="Presentation Image"/>
        </div>
      </div>


      <div class="col-md-6">
        <div class="py-4 px-5">
          <h2 class="gen-orange-title">Presentations</h2>
          <p class="about-text flex-wrap flex-grow-1">
            Botts’ team presentations from conferences and other events. Dive into this material to learn more about OpenSensorHub.
          </p>

          <div class="">
            <a href="/learn/presentations" class="btn mt-auto align-self-start white-btn">View More</a>
          </div>

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
  color: white;
}

.about-img {
  max-width: 75%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
}

</style>

