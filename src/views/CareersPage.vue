<script setup>
import JobTitles from "@/_components/careers/JobTitles.vue";
</script>

<template>
  <div class="careers-page">
    <div class="container-fluid">
      <div class="page-header text-center mb-5 text-white">
          <h1>Careers at GeoRobotix</h1>
      </div>
      <JobTitles />
    </div>
  </div>
</template>

<style scoped>
.careers-page {
  min-height: 100vh;
  padding: 20px 20px;
}
.page-header h1 {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

}
@media (max-width: 480px) {
  .careers-page {
    padding: 40px 15px;
  }

  .page-header h1 {
    font-size: 1.75rem;
  }

}
</style>