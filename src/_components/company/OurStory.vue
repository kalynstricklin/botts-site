<script setup>
const milestones = [
  'GeoRobotix is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades with a diverse set of private and public sector clients.',

  'The company was built on Dr. Botts\' 20 years as a Principal Research Scientist at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab. His team\'s work on sensor data fusion led to the creation of Sensor Model Language (SensorML) and the Open Geospatial Consortium (OGC) Sensor Web Enablement (SWE) architecture, now used worldwide.',

  'The GeoRobotix team created OpenSensorHub, the world-leading open source platform for integrating Sensors, Things, and Robots as location-enabled, web-accessible services across space, air, land, and sea. Dr. Botts now leads the emerging OGC API – Connected Systems specification, modernizing OGC SWE with OpenAPI/RESTful patterns.',

  'GeoRobotix specializes in open standards and open source software for sensor systems within national security, public sector, private sector, and scientific communities. The team has extensive experience processing and fusing sensors from satellite and airborne platforms to mobile and static ground-based stations.'
]
</script>

<template>
  <section class="bsb-timeline-1">
    <div class="background-wrapper">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <h1 class="text-white mb-3">Our Story</h1>
            <ul class="timeline">
              <li v-for="(text, index) in milestones" :key="index" class="timeline-item">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="m-0">{{ text }}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.background-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 5rem 0;
  z-index: 1;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('@/assets/lines.png');
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.65;
  z-index: -1;
}

.bsb-timeline-1 {
  --tl-color: #faf6ed;
  --tl-circle-size: 18px;
  --tl-circle-offset: 9px;
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}

.timeline::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  margin-left: -1px;
  background-color: var(--tl-color);
}

.timeline-item {
  position: relative;
  margin: 0;
  padding: 0;
}

.timeline-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: calc(var(--tl-circle-offset) * -1);
  width: var(--tl-circle-size);
  height: var(--tl-circle-size);
  background-color: var(--tl-color);
  border-radius: 50%;
  z-index: 1;
}

.timeline-body {
  position: relative;
  margin: 0;
  padding: 0;
}

.timeline-content {
  padding: 0 0 2.5rem 2.5rem;
}

@media (min-width: 768px) {
  .timeline-content {
    padding-bottom: 3rem;
  }
}

p {
  color: #faf6ed;
  font-size: 1.25rem;
}
</style>
