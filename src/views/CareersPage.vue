<script setup>

// const scroll = () => {
//   const element = document.getElementById("opportunities");
//   element.scrollIntoView({behavior: 'smooth'});
// }
import JobOpenings from "@/components/careers/JobOpenings.vue";
import image1 from "@/assets/black.jpg"
</script>

<template>
  <div class="container-fluid white-container">

    <div class="row py-4">
      <div class="text-center justify-content-center align-content-center">
        <h1>Careers at Botts</h1>
        <hr/>
      </div>
    </div>

    <section id="team-pics" class="mb-3">
     <div class="container-fluid">
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

    <section id="opportunities" class="py-4">

      <div class="row mb-3">
        <div class="text-center justify-content-center align-content-center">
          <h2>Opportunities</h2>
        </div>
      </div>
      <JobOpenings/>
    </section>

  </div>
</template>

<style scoped>
hr{
  border: 2px solid #d39f44;
}

</style>