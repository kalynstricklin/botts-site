<script setup>

</script>

<template>
  <div class="background-wrapper">
    <div class="container-fluid mb-5">
        <div class="row">
          <div class="text-center justify-content-center align-content-center text-white">
            <span class="" style="color: #d39f44">WORK AT BOTTS</span>

            <h1 class="mt-2">Your next challenge awaits!</h1>

            <p class="mt-4">
              We are working at the crossroads of the Internet of Things (IoT), robotics, and cloud computing to build a seamless fabric that interconnects all types of devices and connected systems in what we call the “Sensor Web”. Our open source-, open standards-based OpenSensorHub API, and our commercially supported “open core” GeoRobotix solution, has the aim to improve how things get done in many sectors such as emergency response, smart cities, environmental monitoring, intelligence, and defense. We are a small but growing team where every member is vital. Come help us create the future now.
            </p>
            <b-button class="white-button" href="/jobs">View Opportunities</b-button>
          </div>
        </div>
    </div>
  </div>

</template>

<style scoped>
h1{
  font-size: 3rem;
}
p{
  font-size: 1.25rem;
}

.background-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 5rem 0;
  z-index: 1;
  height: auto;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/lines-long.png');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.85;
  z-index: -1;
}
</style>