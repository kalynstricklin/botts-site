<script setup>
import oshlaptop from "@/assets/OSH-laptop.png"
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-lg-4 col-md-10">
        <div class="text-section">

          <h2 class="text-white">
            OpenSensorHub
          </h2>

          <p class="flex-wrap flex-grow-1 text-white mt-3">
            OpenSensorHub (OSH) is an open standards based, open source software platform that supports all manner of Sensors, Things, and Robots, and is built around the concepts of modular, reconfigurable, plug-and-play components. OSH offers a node based architecture, where each node can support one or more sensor/actuator systems and can be deployed anywhere from the Cloud to the Edge (e.g. Android device, sensor or platform, or Raspberry PI).
          </p>

        </div>
      </div>
      <div class="col-12 col-lg-7 col-md-12">
        <div class="card-img">
          <img :src="oshlaptop" class="img-fluid about-img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-section{
  text-align: left;
}
.about-img {
  max-width: 100%;
  height: auto;
}
p{
  font-size: 1.25rem;
}
@media only screen and (max-width: 480px) {

}

</style>

