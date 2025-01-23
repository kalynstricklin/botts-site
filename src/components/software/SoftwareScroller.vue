<script setup>

</script>

<template>
  <div class="container">
    <ul class="cards">
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">OpenSensorHub</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 25vh">
            <p class="card-text mb-4">
              OpenSensorHub (OSH) is an open standards based, open source software platform that supports all manner of Sensors, Things, and Robots, and is built around the concepts of modular, reconfigurable, plug-and-play components. OSH offers a node based architecture, where each node can support one or more sensor/actuator systems and can be deployed anywhere from the Cloud to the Edge (e.g. Android device, sensor or platform, or Raspberry PI). OSH nodes deployed in the field can support a wide variety of connectivity protocols for sensor and actuator systems including IP, WiFi, RS232, Bluetooth, IPC, etc. OSH is built upon Open Geospatial Consortium (OGC) sensor standards including the OGC SensorWebEnablement (SWE) and the emerging OGC API – Connected Systems specification.
            </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">OSH Web Client Toolkit</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
            <p class="card-text mb-4">
              Botts-Inc has three decades of experience developing 4D visualization capabilities for the integration of heterogeneous sensor datafeeds, beginning with its own Space Time Toolkit in the 1990s. This open-source, Java-based, interactive dynamic 4D environment for visualizing and analyzing data from a variety of disparate sources defined the era, demonstrating the Art of the Possible, using Open Geospatial Consortium sensor standards for the discovery, access, processing, visualization, and tasking of sensors of all kinds. With the emergence of CesiumJS, Botts-Inc saw the future it migrating its Space Time Toolkit capabilities to Cesium as the world’s best Javascript toolkit streaming geodetically accurate and process 4D worlds across the Web into a browser. This led Botts-Inc to develop the OSH Web Client Toolkit (OSH.js) which is natively integrated with CesiumJS, streaming realtime and historical sensor datafeeds into CesiumJS using OGC standards. OSH.js also supports javascript web mapping frameworks including OpenLayers, Leaflet, MapBox, Esri, etc., as well as a rich set of charting and graphing components for visualizing non-geospatial sensor feeds.          </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">OSH Android Node App</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 25vh">
            <p class="card-text mb-4">
              OSH is capable of running on the lightest Arduino or Raspberry Pi platforms, all the way to massive Cloud based clusters. There is also an OSH Android Node application that deploys an entire OSH node on your Android device, with native integration that exposes all sensors within your Android device, or tethered to your device, via OGC sensor services.          </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">SensorML Process Engine</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
            <p class="card-text mb-4">
              In addition to describing sensor systems, SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This enables the integration of AI/ML/CV and advanced geoprocessing libraries as atomic processes, and as orchestratable processing chains. This is what Botts-Inc built the SensorML Process Execution Engine for. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes (from the Edge to the Fog to the Cloud) to ensure that computationally intensive processes are executed in the most advantageous location for mission critical applications.
            </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">SensorML Web Tools</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
            <p class="card-text mb-4">
              The Botts-Inc team has developed and maintains a variety of open source web-based tools in support of SensorML. These include a SensorML document validator, schema browser, and SensorML Tableview (“PrettyView”) for human-readable presentation of a SensorML document, and a SensorML editor that removes the need to edit XML, providing a more human-friendly means of integrating your sensors. There is also a SensorML definitions server that provides easy discovery of definitions that can accelerate the information integration tasks required for robust sensor integrations.
            </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
      <li class="card">
        <div class="card-body d-flex flex-column">
          <h2 class="card-title text-white text-center">GeoRobotix</h2>
          <hr>
          <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 25vh">
            <p class="card-text mb-4">
              The Botts-Inc team team is not only a world class R&D services team, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.

              Using an “open core” model akin to Cesium and Elastic, GeoRobotix offers a full slate of products, from the Cloud to the Edge, built upon the open source-, open standards-based, OSH.  Each product has OSH at its core, packaged with a commercially-supported suite of components that enable security, scalability, high availability, manageability, & extensibility into particular fast changing operational environments.
            </p>
          </div>
          <div class="card-link-wrapper">
            <a href="#" class="card-link">Learn More</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>


#scroll-2::-webkit-scrollbar{
  width: 0px;
  background: transparent;
}
/**
#scroll-2::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}
#scroll-2::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #d3a045;
}
**/

hr{
  color: #fff;
}
.container{
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cards{
  display: grid;
  grid-auto-columns: 100%;
  grid-column-gap: 10px;
  grid-auto-flow: column;
  padding: 25px 0px;
  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

.card{
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 15%);
  scroll-snap-align: start;
  transition: all 0.2s;
  align-items: center;
}
.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
}

.card .card-content {
  margin: 20px 0;
  max-width: 85%;
}

.card .card-link-wrapper {
  margin-top: auto;
}
.card .card-text {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}
.card .card-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  background: #d39f44;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s;
}

.card:hover .card-link {
  background: #d39f44;
}

.cards::-webkit-scrollbar{
  height: 12px;
}
.cards::-webkit-scrollbar-thumb,
.cards::-webkit-scrollbar-track {
  border-radius: 92px;
}

.cards::-webkit-scrollbar-thumb {
  background:#d39f44;
}

.cards::-webkit-scrollbar-track {
  background: gainsboro;
}

@media (min-width: 500px) {
  .cards {
    grid-auto-columns: calc(50% - 10px);
    grid-column-gap: 20px;
  }
}

@media (min-width: 700px) {
  .cards {
    grid-auto-columns: calc(calc(100% / 3) - 20px);
    grid-column-gap: 30px;
  }
}

@media (min-width: 1100px) {
  .cards {
    grid-auto-columns: calc(25% - 30px);
    grid-column-gap: 40px;
  }
}
</style>