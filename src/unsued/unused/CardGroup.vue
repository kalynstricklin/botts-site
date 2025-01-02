<script setup>

import architectureImage from "@/assets/arch.webp";
import rdImage from "@/assets/headintheclouds.jpg";
import implImage from "@/assets/pexels-photo.jpg";


const cards = [
  { title: "R&D Services", text: "The Botts-Inc team has delivered nearly two decades of pioneering R&D services, advancing capabilities in sensor fusion, geopositioning, geoprocessing, resilient sensing, UxS integration, space missions, and 4D visualization for national security, government, commercial, and scientific sectors.", photo: rdImage, link: 'rd-services' },
  { title: "Architecture", text: "The Botts-Inc team has delivered nearly two decades of pioneering R&D services, advancing capabilities in sensor fusion, geopositioning, geoprocessing, resilient sensing, UxS integration, space missions, and 4D visualization for national security, government, commercial, and scientific sectors.", photo: architectureImage, link: 'architecture' },
  { title: "Implementation", text: "The Botts-Inc team has delivered nearly two decades of pioneering R&D services, advancing capabilities in sensor fusion, geopositioning, geoprocessing, resilient sensing, UxS integration, space missions, and 4D visualization for national security, government, commercial, and scientific sectors.", photo: implImage, link: 'implementation' },
];

</script>

<template>
  <div class="container-fluid">
    <div class="row g-3">

      <!-- R&D Section -->
      <div class="col-md-4" v-for="(item, index) in cards" :key="index">
        <div class="card rounded shadow-sm custom-card">
          <img class="card-img-top p-2" :src="item.photo" :alt="`${item.title}`">

          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{item.text}}
            </p>
            <div class="d-flex">
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
      </div>


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
  border-color: #fcead9;
  color: #fcead9;
  transition: all 0.3s ease;
}
/**#f1d914**/
.custom-button:hover {
  background-color: transparent;
  border-color: #501f10;
  color: #501f10;
}

.card-text{
  color: #0a0203;
}
.card-title{
  color: #0a0203;
}
.card-group{
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 20px;

}
/**#e3e2e2**/
/**#f6f6f6**/
.custom-card{
  background-color: #c34727;
  border-color: #c34727;
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
