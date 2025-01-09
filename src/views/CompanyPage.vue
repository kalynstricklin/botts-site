<script setup>
import AboutUs from "@/components/company/AboutUs.vue";
import image1 from "@/assets/black.jpg";

</script>

<template>
  <div>
    <div class="card company-card">
<!--      <section id="team-pics" class="mb-3">-->
<!--        <div class="container-fluid">-->
<!--          <div class="row justify-content-center align-content-center">-->
<!--            <div class="col-12 col-lg-10">-->
<!--              <img :src="image1" class="img-fluid rounded" style="max-height: 400px; width: 100%;">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->

      <section id="history" class="py-4">
        <AboutUs/>
      </section>


      <section id="team-pics" class="mb-3">

        <div class="container-fluid">
          <div class="row py-4">
            <h4 class="gen-sm-title">Team Photos</h4>
          </div>
          <div class="row g-2">
            <div class="col-12 col-lg-4">
              <img :src="image1" class="img-fluid rounded">
            </div>
            <div class="col-12 col-lg-4">
              <img :src="image1" class="img-fluid rounded">
            </div>
            <div class="col-12 col-lg-4">
              <img :src="image1" class="img-fluid rounded">
            </div>
          </div>
        </div>
      </section>



      <section id="team" class="py-3">

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
