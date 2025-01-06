<!--<script setup>-->
<!--import image from "@/assets/black.jpg"-->
<!--</script>-->

<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row">-->

<!--      <div class="col-md">-->
<!--        <div class="flex-grow-1 py-4 px-5 justify-content-center">-->
<!--          <span class="gen-sm-title">Let's Build Something Together</span>-->
<!--          <h2 class="about-lg-title">Join Our Team</h2>-->

<!--          <div class="mt-5">-->
<!--            <b-button class="btn-sm gen-btn">-->
<!--              Available Positions-->
<!--            </b-button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->


<!--      <div class="col-md">-->
<!--        <div class="card-img d-flex align-items-start">-->
<!--          <img :src="image" class="img-fluid rounded about-img" alt="About Us"/>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.about-text{-->
<!--  line-height: 1.6;-->
<!--  letter-spacing: 0.03em;-->
<!--  font-size: 1.25em;-->
<!--}-->


<!--</style>-->

<script setup>
import image from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center">


      <div class="col-md-6">
        <div class="py-4 px-5">
<!--          <span class="gen-sm-title">Let's Build Something Together</span>-->
          <h2 class="display-5">Join Our Team</h2>
          <p class="about-text flex-wrap flex-grow-1">
          </p>

          <b-button href="/presentations" class="btn-sm gen-btn">
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

