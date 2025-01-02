<script setup>

import architectureImage from "@/assets/pexels-photo.jpg";
import rdImage from "@/assets/pexels-photo.jpg";
import implImage from "@/assets/pexels-photo.jpg";


const cards = [
  { title: "R&D Services", text: "The Botts-Inc team has delivered nearly two decadetion for national security, governmeal, and scientific sectors.", photo: rdImage, link: 'rd-services' },
  { title: "Architecture", text: "The Botts-ancing cteam has delivered nearly two decades of pioneerint, commercial, and scientific sectors.", photo: architectureImage, link: 'architecture' },
  { title: "Implementation", text: "The Bott advancing capabilitieg, resilig, resilient sent sensing, UxS integration, spacefic sectors.", photo: implImage, link: 'implementation' },
];

</script>

<template>
  <div class="container-fluid">
    <div class="row g-3 justify-content-center">

      <h2 class="fw-bold text-center">What we do</h2>
      <!-- R&D Section -->
      <div class="col-lg-3 col-md-6" v-for="(item, index) in cards" :key="index">
<!--        <div class="card rounded custom-card">-->
          <img class="card-img-top p-2" :src="item.photo" :alt="`${item.title}`">

          <div class="card-body align-content-center text-center">
            <h5 class="card-title mb-2">{{ item.title }}</h5>
            <p class="card-text">
              {{item.text}}
            </p>
            <div class="d-flex justify-content-center text-center">
              <b-button :to="{path: '/learn', hash: `#${item.link}`}" class="custom-button">
                Learn More
                <i class="bi bi-arrow-right ms-2"></i>
              </b-button>
            </div>
          </div>

          <!--            <div class="card-img-overlay card-inverse">-->
          <!--              <h3 class="text-stroke text-white pb-5">-->
          <!--                Architecture-->
          <!--              </h3>-->
          <!--            </div>-->

        </div>
<!--      </div>-->


    </div>
  </div>
</template>


<style scoped>

.card{
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/**#d7c72b**/
.custom-button {
  background-color: transparent;
  border-color: #d39f44;
  color: #d39f44;
  transition: all 0.3s ease;
}
/**#f1d914**/
.custom-button:hover {
  background-color: #d39f44;
  border-color: #d39f44;
  color: #faf6ed;
}

.card-title{
  color: #d39f44;

  font-size: 1.8em;
}

/**#e3e2e2**/
/**#f6f6f6**/
/**#d39f44**/
/**#faf6ed**/
.custom-card{
  background-color: transparent;
  border: none;
}

@media (max-width: 768px) {
  .card-group {
    flex-direction: column;
    align-items: center;
  }

  .custom-card {
    max-width: 100%;
  }
}
</style>



<!--      &lt;!&ndash; Architecture Section &ndash;&gt;-->
<!--      <div class="col-md-4">-->
<!--        <div class="card rounded shadow-sm custom-card">-->

<!--          <img class="card-img-top p-2" :src="architectureImage" alt="Architecture Image">-->

<!--          <div class="card-body text-white">-->
<!--            <h5 class="card-title">Architecture</h5>-->
<!--            <p class="card-text">-->
<!--              bottts-->
<!--              The Botts-Inc team have spent over two decades pioneering standards-based interoperability architectures across domains, leading the development of SensorML, SWE architecture, and OGC API standards, while helping customers translate requirements into interoperable systems.-->
<!--            </p>-->
<!--            <div class="d-flex">-->
<!--              <b-button href="#" class="custom-button">-->
<!--                Learn More-->
<!--                <i class="bi bi-arrow-right ms-2"></i>-->
<!--              </b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Implementation Section &ndash;&gt;-->
<!--      <div class="col-md-4">-->
<!--        <div class="card rounded shadow-sm custom-card">-->
<!--          <img class="card-img-top p-2" :src="implImage" alt="Impl Image">-->
<!--          <div class="card-body text-white">-->
<!--            <h5 class="card-title">Implementation</h5>-->
<!--            <p class="card-text">-->
<!--              The Botts-Inc team not only excels in R&D and developing OGC standards-based architectures but also creates scalable solutions, as shown by their launch of GeoRobotix, a SaaS/On-Prem platform providing a secure, high-performance version of the OpenSensorHub (OSH) API for mission-critical environments.-->
<!--            </p>-->
<!--            <div class="d-flex">-->
<!--              <b-button href="#" class="custom-button">-->
<!--                Learn More-->
<!--                <i class="bi bi-arrow-right ms-2"></i>-->
<!--              </b-button>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
