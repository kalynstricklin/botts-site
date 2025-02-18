<script setup>
import JobTitles from "@/components/careers/JobTitles.vue";
</script>

<template>
  <div class="py-5">

    <div class="row py-5">
      <div class="text-center justify-content-center align-content-center text-white">
        <h1>Careers at Botts</h1>
<!--        <hr/>-->
      </div>
      <JobTitles/>
    </div>

  </div>
</template>

<style scoped>
hr{
  border: 2px solid var(--primary-color);
}
</style>