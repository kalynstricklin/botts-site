<script setup>
import image3 from "@/assets/arch.webp"
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <span class="text-white">Our Software</span>
        <h2 class="text-white">Let's Build Something Together!</h2>
      </div>
    </div>

    <div class="card main-card p-4 mt-4">
      <b-tabs content-class="mt-3" nav-class="tab-nav" justified>
        <b-tab title="OSH Connect" active>
          <div class="tab-content-wrapper">
            <img :src="image3" alt="OSH Web Client Toolkit" class="img-fluid tab-image" loading="lazy">
            <div class="text-content">
              <h2>OpenSensorHub Toolkit</h2>
              <p>
                OpenSensorHub Web Client toolkit allows you to visualize data from OSH. It provides the necessary tools to build your own web application for monitoring your sensors. It is pure javascript framework and does not require third party libraries. A set of external libraries is also available to easily build some part of your views such as Leaflet, OpenLayer, Cesium, Chart.js etc..
              </p>
              <div class="d-flex gap-2 mt-5">
                <a href="https://opensensorhub.github.io/osh-js/latest/site/guide/" class="btn white-button me-2" target="_blank">View Docs</a>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab title="OSH Android">
          <div class="tab-content-wrapper">
            <img :src="image3" alt="OSH Web Client Toolkit" class="img-fluid tab-image" loading="lazy">
            <div class="text-content">
              <h2>OSH Android</h2>
              <p>
                OSH is capable of running on the lightest Arduino or Raspberry Pi platforms, all the way to massive Cloud based clusters.
                There is also an OSH Android Node application that deploys an entire OSH node on your Android device, with native integration
                that exposes all sensors within your Android device, or tethered to your device, via OGC sensor services.
              </p>
              <div class="d-flex gap-2 mt-5">
                <a href="https://docs.opensensorhub.org/dev/android/" class="btn white-button me-2" target="_blank">View Docs</a>
                <a href="https://github.com/opensensorhub/osh-android" class="btn white-button" target="_blank">View on GitHub</a>
              </div>
            </div>
          </div>
        </b-tab>

        <b-tab title="SensorML Process Engine">
          <div class="tab-content-wrapper">
            <img :src="image3" alt="SensorML Process Execution Engine" class="img-fluid tab-image" loading="lazy">
            <div class="text-content">
              <h2>SensorML Process Execution Engine</h2>
              <p>
                In addition to describing sensor systems, SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This enables the integration of AI/ML/CV and advanced geoprocessing libraries as atomic processes, and as orchestratable processing chains. This is what Botts-Inc built the SensorML Process Execution Engine for. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes (from the Edge to the Fog to the Cloud) to ensure that computationally intensive processes are executed in the most advantageous location for mission critical applications.
              </p>
              <div class="d-flex gap-2 mt-5">
                <a href="https://docs.opensensorhub.org/dev/core-apis/sensorml-api/" class="btn white-button me-2" target="_blank">View Docs</a>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style scoped>
.main-card{
  background-color: rgba(169, 9, 9, 0.16);
  border-color:  rgba(169, 9, 9, 0.16);
  opacity: 100%;
}

.main-card:hover{
  transform: translateY(-5px);
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

<style>
.main-card .nav-tabs {
  border-bottom: none;
  justify-content: space-evenly;
}

.main-card .nav-tabs .nav-link {
  color: #c5c5c5;
  border: none;
  background: transparent;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-primary);
}

.main-card .nav-tabs .nav-link:hover {
  color: #fff;
  border: none;
}

.main-card .nav-tabs .nav-link.active {
  color: var(--primary-color);
  background: transparent;
  border: none;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.5px;
}

.main-card .tab-content {
  padding: 1rem 0;
}
</style>