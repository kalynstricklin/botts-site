<script setup>
import image from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid">
    <div class="row">

      <div class="col-md">
        <div class="flex-grow-1 py-4 px-5 justify-content-center">
          <span class="gen-sm-title">Let's Build Something Together</span>
          <h2 class="about-lg-title">Join Our Team</h2>

          <div class="mt-5">
            <b-button class="btn-sm gen-btn">
              Available Positions
            </b-button>
          </div>
        </div>
      </div>


      <div class="col-md">
        <div class="card-img d-flex align-items-start">
          <img :src="image" class="img-fluid rounded about-img" alt="About Us"/>
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

