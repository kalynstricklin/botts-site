<script setup>

import JobOpenings from "@/components/careers/JobOpenings.vue";

import image from "@/assets/black.jpg"
</script>

<template>
  <div>
    <section id="whybotts" class="py-4">
      <div>
        <div class="row mb-3">
          <div class="text-center justify-content-center align-content-center">
            <span class="gen-sm-title">Let's Build Something Together!</span>
            <h2 class="">Join Our Team</h2>
            <p>
              Botts’ team is gkdfasdlfassssssssssssssssssssssssssssssssssssssssss
            </p>


            <b-button
                href="#"
                target="_blank"
                class="gen-btn"
            >
              View Openings
            </b-button>

          </div>
        </div>
      </div>
    </section>

    <section id="image" class="py-2">
      <div class="container justify-content-center ">
        <img :src="image" class="img-fluid"/>
      </div>
    </section>

    <section id="jobs" class="py-4">
      <JobOpenings/>
    </section>
  </div>
</template>

<style scoped>

</style>