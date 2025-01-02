<script setup>
import JoinTeam from "@/components/team/JoinTeam.vue";
import OurTeam from "@/components/team/OurTeam.vue";
</script>

<template>
  <div>
    <div class="card team-card">

      <section id="team">
        <OurTeam/>
<!--        <TeamScroller/>-->
      </section>

      <section id="join-team">
        <JoinTeam/>
      </section>

    </div>

<!--    <section class="py-5">-->
<!--      <div class="container">-->
<!--        <div class="row justify-content-center text-center mb-2 mb-lg-4">-->
<!--          <div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">-->
<!--            <span class="text-muted">Our Team</span>-->
<!--            <h2 class="display-5 fw-bold">Meet the Team</h2>-->
<!--            <p class="lead">Botts Inc has a team of leading technologists to advance the vision for national security, public sector, private sector, and scientific communities.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->


<!--    <section id="leadership">-->
<!--      <TeamComponent/>-->
<!--    </section>-->

<!--    <section id="joinTeam" class="py-4">-->
<!--      <JoinTeamComponent/>-->
<!--    </section>-->
  </div>
</template>

<style scoped>
.team-card{
  border-color: #faf6ed;
  background-color: #faf6ed;
  padding: 15px;
}

</style>