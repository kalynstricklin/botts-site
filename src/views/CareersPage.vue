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

<!--    <section id="image-story" class="py-5">-->
<!--      <div class="container-fluid">-->
<!--        <b-card no-body class="bg-dark-subtle">-->
<!--          <b-row no-gutters>-->
<!--            <b-col md="6">-->
<!--              <b-card-img :src="teamTaiwan" alt="Taiwan team" class="p-4"></b-card-img>-->
<!--            </b-col>-->
<!--            <b-col md="6">-->
<!--              <b-card-body title="Opps" class="text-white">-->
<!--                <b-card-text class="text-white">-->
<!--                  This is a wider card with supporting text as a natural lead-in to additional content.-->
<!--                  This content is a little bit longer.-->
<!--                </b-card-text>-->
<!--              </b-card-body>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--        </b-card>-->
<!--      </div>-->

<!--    </section>-->

    <section id="team-pics" class="reveal py-5">

      <div class="container-fluid">
        <div class="row m-2 text-start">
          <span class="text-uppercase" style="color: lightgray">Gallery</span>
        </div>
        <div class="row g-2 justify-content-center">
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team Taiwan" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="teamTaiwan" alt="Team" class="img-fluid rounded">
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