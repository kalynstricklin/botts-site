<script setup>
import image from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center">


      <div class="col-md-6">
        <div class="py-4 px-5">
          <h2 class="display-5">Join Our Team</h2>
          <p class="about-text flex-wrap flex-grow-1">
          </p>

          <b-button href="/jobs" class="btn-sm gen-orange-btn">
            Available Positions
          </b-button>

        </div>
      </div>

      <div class="col-md-6 text-center mb-4">
        <div class="card-img">
          <img :src="image" class="img-fluid rounded about-img" alt="Mike Botts'"/>
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

