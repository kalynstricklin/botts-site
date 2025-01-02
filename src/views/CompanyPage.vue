<script setup>
// import TeamScroller from "@/components/company/TeamScroller.vue";
import AboutUs from "@/components/company/AboutUs.vue";
import TestimonialScroller from "@/components/company/TestimonialScroller.vue";
// import JoinTeam from "@/components/company/JoinTeam.vue";
</script>

<template>
  <div>
    <div class="card company-card">
      <section id="history" class="py-2">
        <AboutUs/>
      </section>

      <section id="test-scroller" class="py-3">
        <TestimonialScroller/>
      </section>

<!--      <section id="leadership" class="py-4">-->
<!--        <TeamScroller/>-->
<!--      </section>-->

<!--      <section id="joinTeam" class="py-4">-->
<!--        <JoinTeam/>-->
<!--      </section>-->
    </div>

  </div>

</template>

<style scoped>
.company-card{
  border-color: #faf6ed;
  background-color: #faf6ed;
  padding: 15px;
}
</style>
