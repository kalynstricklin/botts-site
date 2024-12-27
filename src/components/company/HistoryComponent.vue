<script setup>
import pexels from "@/assets/pexels-photo.jpg"
</script>

<template>
  <div class="container">
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-6">
        <div class="mt-5 mt-lg-0">
          <div class="history-card rounded">
            <img :src="pexels" alt="Research team or related image" class="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="col-lg-8 mx-auto">
          <span class="text-muted">Our Story</span>
          <h2 class="display-5 fw-bold title-card">About Us</h2>
<!--          <p>-->
<!--            Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.-->
<!--          </p>-->

<!--          <p>-->
<!--            Botts-Inc was built on Dr. Botts’ 20 years as a Principal Research Scientist within the National Space Science and Technology Center at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab.-->
<!--          </p>-->
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.history-card{
  background-color: #d39e43;
  border-color: #d39e43;
  padding: 10px;
}

.title-card{
  color: #d39f44;
}

p {
  text-align: justify;
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 768px) {
  .about-container {
    flex-direction: column;
    align-items: center;
  }
}

</style>