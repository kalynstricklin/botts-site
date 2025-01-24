<script setup>


</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
<!--            <div class="justify-content-end align-items-end align-content-end text-end">-->
<!--              <a href="#" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </a>-->
<!--            </div>-->
            <h2 class="card-title text-white text-center">R&D Services</h2>
            <hr>
            <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
              <p class="card-text mb-4">
                The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for nearly two decades.  These R&D services have helped define the art of the possible with regard to heterogeneous sensor fusion, precision geopositioning across disparate sensor systems, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, heterogeneous space mission integration, 4D visualization frameworks, and much more.  The Botts-Inc team is always up for a new challenge, and manages an ongoing R&D roadmap for continuously advancing the frontiers of capability.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
<!--            <div class="justify-content-end align-items-end align-content-end text-end">-->
<!--              <a href="#" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </a>-->
<!--            </div>-->
            <h2 class="card-title text-white text-center">Implementation</h2>
            <hr>
            <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
              <p class="card-text mb-4">
                Dr. Botts and the Botts-Inc team have spent to more than two decades defining standards-based interoperability architectures for sensors, Things, robots, drones, control systems, devices and platforms across Space, Air, Land, Sea and Cyber.  The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification.  Customers have long relied on Dr. Botts and the Botts-Inc team to translate their mission and business requirements into interoperable architectures, and helping them navigate the standards process in an expedited manner.  Customers have also relied on the Botts-Inc team to put these interoperability standards into production implementation, which requires architecture leadership within their own organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
<!--            <div class="justify-content-end align-items-end align-content-end text-end">-->
<!--              <a href="#" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </a>-->
<!--            </div>-->
            <h2 class="card-title text-white text-center">Architecture</h2>
            <hr>
            <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
              <p class="card-text mb-4">
                The Botts-Inc team is not only a world class R&D services team, and leaders in developing OGC standards-based interoperability architectures, but a team that demands scalable and secure secure solutions to mission-critical problems. The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses for a commercially-supported version of the OSH open source API for high performance, high availability, mission-critical production environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#scroll-2::-webkit-scrollbar{
  width: 0px;
  background: transparent;
}
.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

hr{
  color: #fff;
}

.card-text {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
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

@media only screen and (max-width: 481px) {

}

</style>
