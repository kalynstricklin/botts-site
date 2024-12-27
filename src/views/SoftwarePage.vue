<script setup>

</script>



<!--<img src="../assets/botts-diagram.webp" alt="OpenSensorHub" class="img-fluid mb-3" />-->

<template>
<div>
  <section class="text-center p-2 mt-2">
    <h1>Let's Build Something Together!</h1>
  </section>

  <div class="container py-4">
    <div class="row g-8 justify-content-center">


      <div class="col-lg-8 p-4 rounded shadow-sm">
        <h4>OpenSensorHub</h4>

        <p>
          OpenSensorHub (OSH) is an open-source, standards-based platform for integrating Sensors, Things, and Robots. Its modular, plug-and-play architecture supports deployment from the Cloud to the Edge (e.g., Android devices, Raspberry Pi) and connects via IP, WiFi, Bluetooth, RS232, and more.
          Built on Open Geospatial Consortium (OGC) standards like SensorWebEnablement (SWE) and OGC API – Connected Systems, OSH integrates sensors across all platforms (space, airborne, mobile, and terrestrial), enabling AI/ML algorithms for real-time processing. It supports dynamic mission planning, messaging, and collaboration, interfacing seamlessly with ATAK, WebTAK, and WinTAK.
        </p>

      </div>



      <div class="col-lg-8 p-4 rounded shadow-sm">

            <h4>OSH Web Client Toolkit</h4>
            <p>
              With over 30 years of expertise in 4D visualization, Botts-Inc revolutionized sensor data integration with its open-source Space Time Toolkit in the 1990s. Leveraging Open Geospatial Consortium (OGC) standards, it set the benchmark for dynamic 4D visualization and analysis.
              Recognizing CesiumJS as the future of geodetically accurate 4D web streaming, Botts-Inc migrated its capabilities to create the OSH Web Client Toolkit (OSH.js). Natively integrated with CesiumJS, OSH.js streams real-time and historical sensor data using OGC standards while supporting frameworks like OpenLayers, Leaflet, and MapBox, along with advanced charting tools for non-geospatial data visualization.
            </p>

      </div>


      <div class="col-lg-8 p-4 rounded shadow-sm">

            <h4>OSH Android Application</h4>
            <p>
              OSH is capable of running on the lightest Arduino or Raspberry Pi platforms, all the way to massive Cloud based clusters. There is also an OSH Android Node application that deploys an entire OSH node on your Android device, with native integration that exposes all sensors within your Android device, or tethered to your device, via OGC sensor services.
            </p>


      </div>


      <div class="col-lg-8 p-4 rounded shadow-sm">

            <h4>SensorML Process Execution Engine</h4>
            <p>
              In addition to describing sensor systems, SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This enables the integration of AI/ML/CV and advanced geoprocessing libraries as atomic processes, and as orchestratable processing chains. This is what Botts-Inc built the SensorML Process Execution Engine for. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes (from the Edge to the Fog to the Cloud) to ensure that computationally intensive processes are executed in the most advantageous location for mission critical applications.
            </p>


      </div>

      <div class="col-lg-8 p-4 rounded shadow-sm">

            <h4>SensorML Web Tools</h4>
            <p>
              The Botts-Inc team has developed and maintains a variety of open source web-based tools in support of SensorML. These include a SensorML document validator, schema browser, and SensorML Tableview (“PrettyView”) for human-readable presentation of a SensorML document, and a SensorML editor that removes the need to edit XML, providing a more human-friendly means of integrating your sensors. There is also a SensorML definitions server that provides easy discovery of definitions that can accelerate the information integration tasks required for robust sensor integrations.
            </p>

      </div>

      <div class="col-lg-8 p-4 rounded shadow-sm">
            <h4>GeoRobotix</h4>
            <p>
              The Botts-Inc team team is not only a world class R&D services team, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.
            </p>

            <p>
              Using an “open core” model akin to Cesium and Elastic, GeoRobotix offers a full slate of products, from the Cloud to the Edge, built upon the open source-, open standards-based, OSH.  Each product has OSH at its core, packaged with a commercially-supported suite of components that enable security, scalability, high availability, manageability, & extensibility into particular fast changing operational environments.
            </p>
      </div>

    </div>
  </div>
</div>

</template>

<style scoped>
.container {
  max-width: 1200px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}

.b-accordion-item {
  margin-bottom: 1rem;
}
</style>