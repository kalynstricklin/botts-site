<script setup>
import diagramImage from "@/assets/blue1.jpg"
</script>

<template>
  <div>
   <section id="rd-services">
     <div class="container-fluid">
       <h2>R&D Services</h2>
       <div class="card">
         <p>
           The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for nearly two decades.  These R&D services have helped define the art of the possible with regard to heterogeneous sensor fusion, precision geopositioning across disparate sensor systems, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, heterogeneous space mission integration, 4D visualization frameworks, and much more.  The Botts-Inc team is always up for a new challenge, and manages an ongoing R&D roadmap for continuously advancing the frontiers of capability.
         </p>
       </div>
     </div>
   </section>


    <section id="architecture">
      <div class="container-fluid">
        <h2>Architecture</h2>
        <div class="card">
          <p>
            Dr. Botts and the Botts-Inc team have spent to more than two decades defining standards-based interoperability architectures for sensors, Things, robots, drones, control systems, devices and platforms across Space, Air, Land, Sea and Cyber.  The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification.  Customers have long relied on Dr. Botts and the Botts-Inc team to translate their mission and business requirements into interoperable architectures, and helping them navigate the standards process in an expedited manner.  Customers have also relied on the Botts-Inc team to put these interoperability standards into production implementation, which requires architecture leadership within their own organizations.        </p>
        </div>
      </div>
    </section>

    <section id="implementation">
      <div class="container-fluid">
        <h2>Implementation</h2>
        <div class="card">
          <p>
            The Botts-Inc team is not only a world class R&D services team, and leaders in developing OGC standards-based interoperability architectures, but a team that demands scalable and secure secure solutions to mission-critical problems. The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses for a commercially-supported version of the OSH open source API for high performance, high availability, mission-critical production environments.
          </p>
        </div>
      </div>
    </section>


    <div class="container-fluid custom-container">
<!--      <div class="card">-->
        <div class="card-wrapper">
          <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>
          <div class="overlay-card">
            <div class="overlay-text">
              <h4>Heading</h4>
              <p>Mike Botts</p>
            </div>
          </div>
        </div>
<!--      </div>-->

<!--      <div class="card">-->
        <div class="card-wrapper">
          <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>
          <div class="overlay-card">
            <div class="overlay-text">
              <h4>Heading</h4>
              <p>Mike Botts</p>
            </div>
          </div>
        </div>
<!--      </div>-->

<!--      <div class="card">-->
        <div class="card-wrapper">
          <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>
          <div class="overlay-card">
            <div class="overlay-text">
              <h4>Heading</h4>
              <p>Mike Botts</p>
            </div>
          </div>
        </div>
<!--      </div>-->
    </div>

  </div>
</template>

<style scoped>
.container-fluid.custom-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
}

.card-wrapper {
  position: relative;
  width: 400px;
  height: 350px;
}

.card {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: transparent;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.overlay-card {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 85%;
  background: white;
  /**box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);**/
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}

.overlay-text h4 {
  margin: 0;
  font-size: 1.2em;
}

.overlay-text p {
  margin: 5px 0 0;
  font-size: 1em;
  color: gray;
}

</style>