<script setup>
import rdImage from "@/assets/black.jpg";
import archImage from "@/assets/black.jpg";
import implImage from "@/assets/black.jpg";

</script>

<template>
  <div class="container-fluid service-container">

    <div class="row justify-content-center align-content-center mb-3">
      <div class="col-12 col-lg-8 col-xxl-7 mx-auto text-center">
        <h2 class="fw-bold service-title mt-3">Services</h2>
        <span class="card-text">Botts provides a range of services, from R&D services, to architecture and standards leadership, to production scale implementations of the OGC SensorWeb architecture via the open source, open standards OpenSensorHub.</span>
      </div>
    </div>

<!--    <div class="card service-card">-->
      <div class="row g-3 justify-content-center align-items-center">
        <div class="col-lg-3 col-md-6">
          <div class="card border-0">
            <img :src="rdImage" class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title">R&D Services</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card border-0">
            <img :src="archImage" class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title">Architecture</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="card border-0">
            <img :src="implImage" class="card-img-top rounded" />
            <div class="card-body">
              <h5 class="card-title">Implementation</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>

    <div class="text-center mt-4">
      <a href="#" class="btn learn-button">Learn More</a>
    </div>

<!--    </div>-->

  </div>
</template>

<style scoped>
.card-title{
  font-weight: bold;
  color: #d39f44;

}
.card-text{
  color: #d39f44;
}
.card{
  background-color: transparent;
}
.service-title{
  color: #d39f44;

}

.service-container{
  margin-bottom: 50px;
}


.learn-button {
  color: #fff;
  background-color: #d39f44;
  border-color: #d39f44;
  font-size: 1em;
  border-radius: 20px;
  text-transform: uppercase;
}
.learn-button:hover {
  text-transform: uppercase;
  color: #fff;
  background-color: #c08013;
  border-color: #c08013;
  font-size: 1em;
  border-radius: 20px;
}
</style>