<script setup>

// const scroll = () => {
//   const element = document.getElementById("opportunities");
//   element.scrollIntoView({behavior: 'smooth'});
// }
import JobOpenings from "@/components/careers/JobOpenings.vue";
import image1 from "@/assets/pexels-photo.jpg"
import image2 from "@/assets/feature-detect.jpg"
import image3 from "@/assets/arch.webp"
</script>

<template>
<!--  <div class="container-fluid white-container">-->
  <div class="py-5">

    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Careers at Botts</h1>
        <hr/>
      </div>
    </div>

    <section id="team-pics" class="mb-3">
     <div class="container-fluid image-container">
       <div class="row g-2 justify-content-center align-content-center">
         <div class="col-12 col-lg-4 col-md-6 col-sm-12">
           <img :src="image1" class="img-fluid rounded image">
         </div>
         <div class="col-12 col-lg-4 col-md-6 col-sm-12">
           <img :src="image2" class="img-fluid rounded image">
         </div>
         <div class="col-12 col-lg-4 col-md-6 col-sm-12">
           <img :src="image3" class="img-fluid rounded image">
         </div>
       </div>
     </div>
    </section>

    <section id="opportunities" class="py-4">

      <div class="row mb-3">
        <div class="text-center justify-content-center align-content-center text-white">
          <h2>Opportunities</h2>
        </div>
      </div>
      <JobOpenings/>
    </section>

  </div>
</template>

<style scoped>
hr{
  border: 2px solid var(--primary-color);
}
.image{
  filter: grayscale(100%);
}
</style>