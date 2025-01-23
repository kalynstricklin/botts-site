<script setup>
import pexels from "@/assets/headintheclouds.jpg"


const scrollToContent = () =>{
  const target = document.getElementById('solutions-more');
  if(target){
    target.scrollTo({behavior: 'smooth'})
  }
}
</script>

<template>
  <div class="container-fluid">

    <div class="row mb-3">
      <div class="col-12 col-lg-8 col-xxl-7">
        <span class="gen-orange-title">Our Solutions</span>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row g-3 gx-5 justify-content-center align-content-center">
        <div class="col-12 col-lg-8 col-md-6">
          <p class="solution-text">
            Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm founded by Dr. Michael Botts, who has been in business for nearly two decades. Drawing from his experience running the VisAnalysis and Systems Technology (VAST) Lab, Botts Inc. serves a diverse range of private and public sector clients.
            Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm founded by Dr. Michael Botts, who has been in business for nearly two decades. Drawing from his experience running the VisAnalysis and Systems Technology (VAST) Lab, Botts Inc. serves a diverse range of private and public sector clients.
          </p>

          <div class="text-end">
            <b-button @click="scrollToContent" class="btn-sm gen-orange-btn text-end">Discover more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>

        </div>

        <div class="col-md-4">
          <img :src="pexels" alt="team" class="img-fluid about-img rounded" />
        </div>
      </div>
    </div>


  </div>

</template>

<style scoped>
.about-img{
  width: 100%;
  max-width: 525px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.solution-text{
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-size: 1.25em;
}


</style>