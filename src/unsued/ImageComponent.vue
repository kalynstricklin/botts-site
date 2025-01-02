<script setup>
import teamImg from "@/assets/headshots/mikebotts-headshot.jpg";
</script>



<template>
  <div class="container-fluid">
    <div class="card rounded mike-card border-0">

      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-6">
          <div class="col-lg-8 mx-auto">
            <span class="text-muted founder-desc">Our Founder</span>
            <h3 class="display-5 fw-bold">Dr. Mike Botts</h3>

          </div>
        </div>

        <div class="col-lg-4">
          <div class="mt-5 mt-lg-0">
            <img alt="" class="img-fluid rounded"  :src="teamImg"/>
          </div>
        </div>
      </div>


    </div>
  </div>

</template>

<style>
.mike-card{
  background-color: rgb(222, 102, 56);
  padding: 20px;
  color: #f5ebdf
}
.founder-desc{
  color: #f5ebdf;
}
</style>
