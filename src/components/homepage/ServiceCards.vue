<script setup>
// import { onMounted } from 'vue';
//
// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//     //loop over the entries
//     entries.forEach((entry, index) => {
//
//       //if element is visible
//       if (entry.isIntersecting) {
//
//         //add delay between cards
//         entry.target.style.animationDelay = `${index * 0.2}s`;
//         //add the animation class
//         entry.target.classList.add('card-animation');
//         return;
//
//       }
//     });
//     },
//     {
//       threshold: 0.2,
//     }
//   );
//
//   const cards = document.querySelectorAll('.card');
//   cards.forEach((card) => observer.observe(card));
// });
</script>


<template>
  <div class="container-fluid">

    <div class="row mb-3">
      <div class="col-12 col-lg-8 col-xxl-7">

        <span class="gen-sm-title">Discover our services </span>
      </div>
    </div>

    <div class="row g-5 justify-content-center align-items-center">
      <div class="col-12 col-lg-4 col-md-10 col-sm-12">
        <div class="card">

          <div class="card-body">
            <div class="justify-content-end align-items-end align-content-end text-end">
              <a href="#" class="justify-content-end align-items-end align-content-end text-end">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </a>
            </div>

            <h2 class="card-title">R&D Services</h2>
            <hr>
            <p class="card-text">
              With nearly two decades of innovation, Botts-Inc delivers cutting-edge R&D solutions—advancing capabilities in sensor fusion, geopositioning, geoprocessing, resilient architectures, UxS integration, space missions, and 4D visualization for national security, government, and commercial needs.
            </p>


          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-10 col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="justify-content-end align-items-end align-content-end text-end">
              <a href="#" class="justify-content-end align-items-end align-content-end text-end">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </a>
            </div>

            <h2 class="card-title">Architecture</h2>
            <hr>
            <p class="card-text">
              The Botts-Inc team have set the benchmark for interoperability across Space, Air, Land, Sea, and Cyber, pioneering standards like SensorML, SWE, and OGC API – Connected Systems to deliver mission-driven, standards-based architectures and production-ready implementations.
            </p>


          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-10 col-sm-12">
        <div class="card">

          <div class="card-body">
            <div class="justify-content-end align-items-end align-content-end text-end">
              <a href="#" class="justify-content-end align-items-end align-content-end text-end">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </a>
            </div>

            <h2 class="card-title">Implementation</h2>
            <hr>
            <p class="card-text">
              Botts-Inc combines world-class R&D expertise with leadership in OGC standards-based interoperability, delivering scalable, secure solutions like GeoRobotix—a commercially-supported SaaS and on-premise platform built on OpenSensorHub (OSH) to power high-performance, mission-critical production environments.
            </p>

          </div>

      </div>
    </div>
    </div>
  </div>
</template>


<!--@keyframes enter-animation {-->
<!--0% {-->
<!--transform: translateY(50px);-->
<!--opacity: 0;-->
<!--}-->
<!--100% {-->
<!--transform: translateY(0);-->
<!--opacity: 1;-->
<!--}-->
<!--}-->

<!--@media (prefers-reduced-motion: no-preference) {-->
<!--.card-animation {-->
<!--animation: enter-animation 0.8s ease-out backwards;-->
<!--}-->
<!--}-->
<style scoped>

.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 15px;
  padding: 15px;
  /**display: flex;
  flex-direction: column;
  justify-content: center;**/
  align-items: center;
}

hr{
  color: #fff;
}

.card-title {
  font-weight: bold;
  color: #fff;
}

.card-text {
  color: #fff;
  margin-bottom: 1rem;
}

.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
  border-radius: 15px;
  padding: 15px;
}

.card a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  margin-top: auto;
  text-align: end;
}

.card a:hover {
  color: #f4e9d4;
}
</style>

