<script setup>
const services = [
  {
    title: 'R&D Services',
    text: 'The GeoRobotix team has provided field-defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for nearly two decades. These services have helped define the art of the possible with regard to heterogeneous sensor fusion, precision geopositioning, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, and 4D visualization frameworks.'
  },
  {
    title: 'Implementation',
    text: 'The GeoRobotix team has spent more than two decades defining standards-based interoperability architectures for sensors, Things, robots, drones, control systems, devices and platforms across Space, Air, Land, Sea and Cyber. We pioneered the OGC Sensor Model Language (SensorML), Sensor Web Enablement (SWE), and the emerging OGC API – Connected Systems specification.'
  },
  {
    title: 'Architecture',
    text: 'The GeoRobotix team delivers world-class R&D services and leads in developing OGC standards-based interoperability architectures with scalable, secure solutions to mission-critical problems. GeoRobotix provides a commercially-supported SaaS/On-Prem version of OpenSensorHub (OSH) for high-performance, high-availability production environments.'
  }
]
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="service in services"
        :key="service.title"
        class="col-lg-4 mb-3 d-flex align-items-stretch"
      >
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h2 class="card-title text-white text-center">{{ service.title }}</h2>
            <hr>
            <div class="card-content">
              <p class="card-text mb-4">{{ service.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  overflow-y: auto;
  max-height: 20vh;
  scrollbar-width: none;
}

.card-content::-webkit-scrollbar {
  display: none;
}

hr {
  color: #fff;
}

.card-text {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: start;
}

.card:hover {
  background-image: linear-gradient(to bottom, var(--primary-color), #000);
}
</style>
