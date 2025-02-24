<script setup>
import JobTitles from "@/components/careers/JobTitles.vue";
import JoinTeam from "@/components/careers/JoinTeam.vue";
import teamTaiwan from "@/assets/team-taiwan.jpg";

</script>

<template>
  <div>
    <section id="join-team" class="reveal py-5">
      <JoinTeam/>
    </section>


    <section id="team-pics" class="reveal py-5">

      <div class="container-fluid">

        <div class="row g-2 justify-content-center">
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team Taiwan" class="img-fluid rounded img-thumbnail">
          </div>

          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <h2 class="text-white">What its like</h2>
            <p>

            </p>
          </div>

        </div>
      </div>
    </section>

    <section id="careers" class="reveal py-5">

      <JobTitles/>
    </section>


  </div>
</template>

<style scoped>

</style>