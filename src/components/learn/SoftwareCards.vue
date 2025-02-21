<script setup>
import arch from "@/assets/arch.webp"

import pexels from "@/assets/pexels-photo.jpg"
</script>

<template>

  <div class="container-fluid">
<!--    title-->
    <div class="row mt-5">
      <div class="text-center justify-content-center align-content-center">
        <span class="text-white">Our Software</span>
        <h2 class="text-white">Let's Build Something Together!</h2>
      </div>
    </div>

<!--      tabs-->
    <div class="nav align-items-center justify-content-evenly py-3">
      <li class="nav-item">
        <a class="nav-link active" id="tab1-tab" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">
          OSH-Connect
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">
        OSH-Android
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
          SensorML Process Engine
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">
          OSH Web Client Toolkit
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab5-tab" data-bs-toggle="tab" href="#tab5" role="tab" aria-controls="tab5" aria-selected="false">
          OSH-Viewer
        </a>
      </li>
    </div>

<!--    tab content-->
    <div class="card orange-card p-4">
      <div class="tab-content" id="myTabContent">

          <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
<!--            <a href="https://opensensorhub.github.io/osh-js/latest/site/guide/" class="text-decoration-none" target="_blank">-->
            <div class="tab-content-wrapper">
              <img :src="pexels" alt="OSH Web Client Toolkit" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">
                <h2>OSH-Connect</h2>
                <p>
                  A library that interacts with OpenSensorHub using OGC API Connected Systems.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="" class="btn white-button me-2" target="_blank">View Docs</a>
                  <a href="https://github.com/Botts-Innovative-Research/OSHConnect-Java" class="btn-lg white-button text-decoration-none" target="_blank">View on GitHub</a>
                </div>
              </div>
            </div>
<!--            </a>-->
          </div>


        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
<!--          <a href="https://docs.opensensorhub.org/dev/android/" class="text-decoration-none" target="_blank">-->
          <div class="tab-content-wrapper">
            <img :src="arch" alt="OSH Web Client Toolkit" class="img-fluid tab-image" loading="lazy">
            <div class="text-content">
              <h2>OSH-Android</h2>
              <p>
                An open-source Android application that deploys a OSH node on your Android device.
              </p>
              <div class="d-flex gap-2 mt-5">
                <a href="https://docs.opensensorhub.org/dev/android/" class="btn white-button me-2" target="_blank">View Docs</a>
                <a href="https://github.com/opensensorhub/osh-android" class=" text-decoration-none btn white-button" target="_blank">View on GitHub</a>
              </div>
            </div>
          </div>
<!--          </a>-->

        </div>

        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
<!--          <a href="https://docs.opensensorhub.org/dev/core-apis/sensorml-api/" class="text-decoration-none" target="_blank">-->
            <div class="tab-content-wrapper">
              <img :src="arch" alt="SensorML Process Execution Engine" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">

                <h2>SensorML Process Execution Engine</h2>
                <p>
                 SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This is what Botts-Inc built the SensorML Process Execution Engine for. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes (from the Edge to the Fog to the Cloud) to ensure that computationally intensive processes are executed in the most advantageous location for mission critical applications.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://docs.opensensorhub.org/dev/core-apis/sensorml-api/" class="btn white-button me-2" target="_blank">View Docs</a>
                  <a href="" class="btn white-button text-decoration-none" target="_blank">View on GitHub</a>
                </div>
              </div>

            </div>
<!--          </a>-->
        </div>

        <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
          <a href="" class="text-decoration-none" target="_blank">
            <div class="tab-content-wrapper">
              <img :src="arch" alt="SensorML web tools" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">

                <b-card-title>OSH Web Client Toolkit</b-card-title>
                <p>
                  An open-source JavaScript library for visualizing sensor data from OpenSensorHub.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://github.com/opensensorhub/osh-js" class="btn white-button me-2" target="_blank">View Docs</a>
                  <a href="https://opensensorhub.github.io/osh-js/latest/site/guide/" class="btn white-button text-decoration-none" target="_blank">View on GitHub</a>
                </div>
              </div>

            </div>
          </a>

        </div>

        <div class="tab-pane fade" id="tab5" role="tabpanel" aria-labelledby="tab5-tab">
          <a href="" class="text-decoration-none" target="_blank">
            <div class="tab-content-wrapper">
              <img :src="arch" alt="SensorML web tools" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">

                <b-card-title>OSH-Viewer</b-card-title>
                <p>
                  OpenSensorViewer is a web app for OpenSensorHub that enables interaction and visualization of sensor data using OGC standards like SensorML and Sensor Web API.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://github.com/opensensorhub/osh-viewer" class="btn white-button me-2" target="_blank">View Docs</a>
                  <a href="" class="btn white-button text-decoration-none" target="_blank">View on GitHub</a>
                </div>
              </div>

            </div>
          </a>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.orange-card{
  background-color: rgba(112, 112, 112, 0.2);
  border-color: rgba(112, 112, 112, 0.2);
  opacity: 100%;
}

.orange-card:hover{
  transform: translateY(-5px);
}

.nav-link{
  color: #c5c5c5;
}
.nav-link.active{
  color: var(--primary-color);
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.5px;
}

.tab-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tab-image {
  max-width: 40%;
  height: auto;
}



.text-content {
  text-align: left;
  width: 55%;
  color: #fff;
}
p{
  text-align: left;
  font-size: 1.25rem;
}
a{
  font-family: var(--font-primary);
  font-size: 1.25rem;
}
@media only screen and (max-width: 768px) {
  .tab-content-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .tab-image {
    max-width: 100%;
    margin-bottom: 15px;
  }
  .text-content {
    width: 100%;
  }
  p{
    font-size: 1rem;
  }
}

</style>