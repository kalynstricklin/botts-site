<script setup>
import teamImg from "@/assets/headshots/mikebotts-headshot.jpg";
</script>



<template>
  <div class="card rounded mike-card border-0">

      <div class="row g-0 align-items-center justify-content-center">
        <div class="col-lg-6">
          <div class="col-lg-8 mx-auto">
            <span class="text-muted">Our Founder</span>
            <h3 class="display-5 fw-bold">Dr. Mike Botts</h3>
            <p class="founder-desc">Dr. Botts is the creator and chief architect of Sensor Model Language (SensorML), an Open Geospatial Consortium (OGC) technical standard for describing the measurement and processing of observations from any sensor system. He is the chair of the OGC Connected Systems Specification Working Group and has been instrumental in the development and implementation of the OGC SWE architecture.</p>


          </div>
        </div>

        <div class="col-lg-4">
          <div class="mt-5 mt-lg-0">
            <img alt="" class="img-fluid rounded"  :src="teamImg"/>
          </div>
        </div>
      </div>


  </div>
</template>

<style>
.mike-card{
  background-color: transparent;
  padding: 20px;
}
.founder-desc{
  color: #333;
}
</style>
