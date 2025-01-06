<script setup>

import JobOpenings from "@/components/careers/JobOpenings.vue";
import ImageGallery from "@/components/company/ImageGallery.vue";

const scroll = () => {
  const element = document.getElementById("opportunities");
  element.scrollIntoView({behavior: 'smooth'});
}
</script>

<template>
  <div class="container-fluid white-container">
    <section id="whybotts" class="py-4">
      <div>
        <div class="row mb-3">
          <div class="text-center justify-content-center align-content-center">
            <span class="gen-sm-title">Let's Build Something Together!</span>
            <h2 class="">Join Our Team</h2>
            <p>
              Botts’ team is
            </p>


            <b-button
                @click="scroll"
                class="gen-btn"
            >
              View Openings
            </b-button>

          </div>
        </div>
      </div>
    </section>

    <section id="company-images">
      <ImageGallery/>
    </section>
    <!--    <section id="image" class="py-2">-->
    <!--      <div class="container justify-content-center ">-->
    <!--        <img :src="image" class="img-fluid"/>-->
    <!--      </div>-->
    <!--    </section>-->

    <section id="opportunities" class="py-4">
      <JobOpenings/>
    </section>
  </div>
</template>

<style scoped>

</style>