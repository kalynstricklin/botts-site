<script setup>
import image3 from "@/assets/arch.webp"
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
          OSH Connect
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" id="tab2-tab" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">
        OSH Android
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="tab3-tab" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">
          SensorML Process Engine
        </a>
      </li>
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" id="tab4-tab" data-bs-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">-->
<!--          SensorML Web Tools-->
<!--        </a>-->
<!--      </li>-->
    </div>

<!--    tab content-->
    <div class="card orange-card p-4">
      <div class="tab-content" id="myTabContent">

          <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
<!--            <a href="https://opensensorhub.github.io/osh-js/latest/site/guide/" class="text-decoration-none" target="_blank">-->
            <div class="tab-content-wrapper">
              <img :src="image3" alt="OSH Web Client Toolkit" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">
                <h2>OpenSensorHub Toolkit</h2>
                <p>
                  OpenSensorHub Web Client toolkit allows you to visualize data from OSH. It provides the necessary tools to build your own web application for monitoring your sensors. It is pure javascript framework and does not require third party libraries. A set of external libraries is also available to easily build some part of your views such as Leaflet, OpenLayer, Cesium, Chart.js etc..
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://opensensorhub.github.io/osh-js/latest/site/guide/" class="btn white-button me-2" target="_blank">View Docs</a>
<!--                  <a href="https://github.com/opensensorhub/osh-android" class="btn-lg white-button" target="_blank">View on GitHub</a>-->
                </div>
              </div>
            </div>
<!--            </a>-->
          </div>


        <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
<!--          <a href="https://docs.opensensorhub.org/dev/android/" class="text-decoration-none" target="_blank">-->
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
<!--          </a>-->

        </div>

        <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
<!--          <a href="https://docs.opensensorhub.org/dev/core-apis/sensorml-api/" class="text-decoration-none" target="_blank">-->
            <div class="tab-content-wrapper">
              <img :src="image3" alt="SensorML Process Execution Engine" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">

                <h2>SensorML Process Execution Engine</h2>
                <p>
                  In addition to describing sensor systems, SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This enables the integration of AI/ML/CV and advanced geoprocessing libraries as atomic processes, and as orchestratable processing chains. This is what Botts-Inc built the SensorML Process Execution Engine for. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes (from the Edge to the Fog to the Cloud) to ensure that computationally intensive processes are executed in the most advantageous location for mission critical applications.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://docs.opensensorhub.org/dev/core-apis/sensorml-api/" class="btn white-button me-2" target="_blank">View Docs</a>
<!--                  <a href="https://github.com/opensensorhub/osh-android" class="btn white-button" target="_blank">View on GitHub</a>-->
                </div>
              </div>

            </div>
<!--          </a>-->
        </div>

<!--        <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">-->
<!--          <a href="" class="text-decoration-none" target="_blank">-->
<!--            <div class="tab-content-wrapper">-->
<!--              <img :src="image3" alt="SensorML web tools" class="img-fluid tab-image" loading="lazy">-->
<!--              <div class="text-content">-->

<!--                <b-card-title>SensorML Web Tools</b-card-title>-->
<!--                <p>-->
<!--                  The Botts-Inc team has developed and maintains a variety of open source web-based tools in support of SensorML. These include a SensorML document validator, schema browser, and SensorML Tableview (“PrettyView”) for human-readable presentation of a SensorML document, and a SensorML editor that removes the need to edit XML, providing a more human-friendly means of integrating your sensors. There is also a SensorML definitions server that provides easy discovery of definitions that can accelerate the information integration tasks required for robust sensor integrations.-->
<!--                </p>-->
<!--              </div>-->

<!--            </div>-->
<!--          </a>-->

<!--        </div>-->

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