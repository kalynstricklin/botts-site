<script setup>
// import AboutUs from "@/components/company/AboutUs.vue";
// import image1 from "@/assets/team.webp";
// import TeamComp from "@/components/company/TeamComp.vue";
// import JoinTeam from "@/components/company/JoinTeam.vue";
import TeamCard from "@/components/company/TeamCard.vue";
import OurStory from "@/components/company/OurStory.vue";


</script>

<template>
  <div class="py-5">
<!--    <section id="history" class="py-5">-->
<!--      <AboutUs/>-->
<!--    </section>-->

    <section id="story-timeline" class="py-5">
      <OurStory/>

    </section>

    <section id="team-pics" class="mb-3">

      <div class="container-fluid">
        <div class="row py-4">
          <h4 class="gen-orange-title">Team Photos</h4>
        </div>
        <div class="row g-2 justify-content-center">
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="image1" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="image1" class="img-fluid rounded">
          </div>
          <div class="col-12 col-lg-4 col-md-6 col-sm-12">
            <img :src="image1" class="img-fluid rounded">
          </div>
        </div>
      </div>
    </section>



    <section id="team" class="py-5">
<!--      <TeamComp/>-->
      <TeamCard/>
    </section>

<!--    <section id="join" class="py-3">-->
<!--      <JoinTeam/>-->
<!--    </section>-->


  </div>
</template>


<!--.bg-soft {
  background-color: #f8f9fa;
}-->
<style scoped>

</style>


<!--  <div>-->
<!--    <div class="card">-->
<!--&lt;!&ndash;      <section id="team-pics" class="mb-3">&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="container-fluid">&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="row justify-content-center align-content-center">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="col-12 col-lg-10">&ndash;&gt;-->
<!--&lt;!&ndash;              <img :src="image1" class="img-fluid rounded" style="max-height: 400px; width: 100%;">&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;      </section>&ndash;&gt;-->

<!--      <section id="history" class="py-4">-->
<!--        <AboutUs/>-->
<!--      </section>-->


<!--      <section id="team-pics" class="mb-3">-->

<!--        <div class="container-fluid">-->
<!--          <div class="row py-4">-->
<!--            <h4 class="gen-orange-title">Team Photos</h4>-->
<!--          </div>-->
<!--          <div class="row g-2">-->
<!--            <div class="col-12 col-lg-4">-->
<!--              <img :src="image1" class="img-fluid rounded">-->
<!--            </div>-->
<!--            <div class="col-12 col-lg-4">-->
<!--              <img :src="image1" class="img-fluid rounded">-->
<!--            </div>-->
<!--            <div class="col-12 col-lg-4">-->
<!--              <img :src="image1" class="img-fluid rounded">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->



<!--      <section id="team" class="py-3">-->

<!--      </section>-->

<!--    </div>-->

<!--  </div>-->