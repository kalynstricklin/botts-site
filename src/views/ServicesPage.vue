<script setup>
</script>

<template>
  <div>
   <section id="rd-services" class="service-section">
     <div class="container-fluid">
       <div class="card service-card">
         <h2>
           R&D Services
         </h2>

           <p>
             The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for nearly two decades.  These R&D services have helped define the art of the possible with regard to integrating diverse sensors seamlessly, precision geopositioning across disparate sensor systems, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, heterogeneous space mission integration, 4D visualization frameworks, and much more.  The Botts-Inc team is always up for a new challenge, and manages an ongoing R&D roadmap for continuously advancing the frontiers of capability.
           </p>


         <a href="/services" class="btn btn-primary">Contact Us</a>
       </div>


     </div>
   </section>


    <section id="architecture" class="service-section">
      <div class="container-fluid">
        <div class="card service-card">
          <h2>
            Architecture
          </h2>

            <p>
              Dr. Botts and the Botts-Inc team have spent to more than two decades defining standards-based interoperability architectures for sensors, Things, robots, drones, control systems, devices and platforms across Space, Air, Land, Sea and Cyber.  The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification.  Customers have long relied on Dr. Botts and the Botts-Inc team to translate their mission and business requirements into interoperable architectures, and helping them navigate the standards process in an expedited manner.  Customers have also relied on the Botts-Inc team to put these interoperability standards into production implementation, which requires architecture leadership within their own organizations.        </p>


          <a href="/services" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>

    <section id="implementation" class="service-section">
      <div class="container-fluid">
        <div class="card service-card">
          <h2>
            Implementation
          </h2>

            <p>
              The Botts-Inc team is not only a world class R&D services team, and leaders in developing OGC standards-based interoperability architectures, but a team that demands scalable and secure secure solutions to mission-critical problems. The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses for a commercially-supported version of the OSH open source API for high performance, high availability, mission-critical production environments.
            </p>


          <a href="/services" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.service-section {
  padding: 40px 0;
}

.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.service-card {
  background-color: #f3f3f3;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
h2 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.8rem;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>