<script setup>
import pexels from "@/assets/pexels-photo.jpg"
</script>

<template>
  <div class="card about-card">

    <div class="row justify-content-center">

      <div class="col-md-4">
        <img :src="pexels" alt="team" class="img-fluid about-img rounded" />
      </div>


      <div class="col-12 col-lg-8 col-xxl-7 mx-auto">
        <span class="text-muted">Our History</span>
        <h2 class="display-5 fw-bold">About Us</h2>
        <span class="lead">
          Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.
        </span>
        <span class="lead">
          Botts-Inc was built on where he ran the VisAnalysis and Systems Technology (VAST) Lab.
        </span>
      </div>
    </div>
  </div>

</template>

<style scoped>


.about-img{
  width: 100%;
  max-width: 550px;
  height: auto;

}
.about-card{
  background: #faf6ed;
  padding: 10px;
}
p, h2{
  color: #333;
}


@media (max-width: 768px) {
  .about-card {
    padding: 15px;
  }

  .image-card {
    margin-bottom: 15px;
  }

  p {
    font-size: 0.9rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .about-card {
    text-align: center;
  }

  .ms-md-2, .ms-lg-5 {
    margin: 0 !important;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>


<!--.about-card {-->
<!--background-color: #d3a146;-->
<!--border-color: #d3a146;-->
<!--padding: 20px;-->
<!--}-->

<!--.image-card {-->
<!--background-color: #fcead9;-->
<!--border-color: #fcead9;-->
<!--padding: 10px;-->
<!--text-align: center;-->
<!--}-->



<!--.about-card{-->
<!--background-color: #de6638;-->
<!--border-color: #de6638;-->
<!--padding: 10px;-->
<!--}-->
<!--.history-card{-->
<!--background-color: #efe9d3;-->
<!--border-color: #efe9d3;-->
<!--padding: 10px;-->
<!--}-->

<!--.history-img{
  height: 350px;
  width: 100%;
  max-width: 475px;
  object-fit: cover;
}


.text-card{
  background-color: #201b18;
  border-color: #201b18;
  padding: 30px;
  height: auto;
}


.title-card{
  color: #201b18;
}

p {
  color: #201b18;
  text-align: justify;
  line-height: 1.6;
  margin: 0;
}-->

<!--.container-fluid {
    padding: 0 15px;
  }
  .row {
    flex-direction: column;
  }
  .history-img {
    width: 100%;
    height: auto;
  }
  .text-card {
    padding: 20px;
  }-->

<!--  <div class="about-container container-fluid">-->
<!--    <div class="row gx-4 align-items-center">-->

<!--      <div class="col-lg-4">-->
<!--        <div class="mt-5 mt-lg-0">-->
<!--          <img :src="pexels" alt="Research team or related image" class="img-fluid rounded history-img" />-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="col-lg-4">-->
<!--        <div class="col-lg-8 mx-auto">-->
<!--          <div class="text-card rounded">-->
<!--            <span class="text-muted">Our Story</span>-->
<!--              <h2 class="display-5 fw-bold title-card">About Us</h2>-->
<!--              <p>-->
<!--                Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.-->
<!--              </p>-->

<!--              <p>-->
<!--                Botts-Inc was built on Dr. Botts’ 20 years as a Principal Research Scientist within the National Space Science and Technology Center at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab.-->
<!--              </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--ms-md-2 ms-lg-5-->




<!--  </div>-->
<!--  <div class="container-fluid">-->
<!--&lt;!&ndash;    <div class="card rounded about-card border-0">&ndash;&gt;-->
<!--      <div class="row align-items-center justify-content-center g-0">-->

<!--        <div class="col-md-6 col-lg-4">-->
<!--          <div class="rounded">-->
<!--            <img :src="pexels" alt="team" class="img-fluid rounded-3" />-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-md-6 col-lg-8">-->
<!--          <div class="ms-md-2 ms-lg-5 mt-2">-->
<!--            <span class="text-muted">Our Story</span>-->
<!--            <h2 class="display-5 fw-bold">About Us</h2>-->
<!--            <p class="">-->
<!--              Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.-->
<!--            </p>-->
<!--            <p class="">-->
<!--              Botts-Inc was built on Dr. Botts’ 20 years as a Principal Research Scientist within the National Space Science and Technology Center at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->