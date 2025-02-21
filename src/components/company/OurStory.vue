<script setup>


</script>

<template>
  <section class="bsb-timeline-1">
    <div class="background-wrapper">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="row mb-3">
              <div class="justify-content-center align-content-center text-white">
                <h1>Our Story</h1>
              </div>
            </div>
            <ul class="timeline">
              <li class="timeline-item">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      <strong>2005:</strong> Dr. Michael Botts founds Botts Innovative Research, Inc. after two decades in R&D, serving public and private sectors.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      <strong>UAH Research:</strong> Led VisAnalysis and Systems Technology (VAST) Lab, pioneering Sensor Model Language (SensorML) and Open Geospatial Consortium (OGC) Sensor Web Enablement (SWE).
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      <strong>Innovation:</strong> Developed OpenSensorHub, an open-source platform integrating sensors, robots, and IoT into a unified 4D framework.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      <strong>Today:</strong> Botts-Inc specializes in open standards for sensor systems, national security, and scientific research, advancing OGC API – Connected Systems.
                    </p>
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
  height: auto;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/lines-long.png');
  background-size: cover;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.85;
  z-index: -1;
}
.bsb-timeline-1{
  --bsb-tl-color:var(--primary-color);
  --bsb-tl-circle-color: var(--primary-color);
  --bsb-tl-circle-size:18px;
  --bsb-tl-circle-offset:9px;
}
.bsb-timeline-1 .timeline{
  list-style:none;
  margin:0;
  padding:0;
  position:relative;
}
.bsb-timeline-1 .timeline:after {
  background-color: var(--bsb-tl-color);
  bottom: 0;
  content: "";
  left: 0;
  margin-left: -1px;
  position: absolute;
  top: 0;
  width: 2px;
}
.bsb-timeline-1 .timeline .timeline-item {
  margin: 0;
  padding: 0;
  position: relative;
}
.bsb-timeline-1 .timeline .timeline-item:before {
  background-color: var(--bsb-tl-circle-color);
  border-radius: 50%;
  content: "";
  height: var(--bsb-tl-circle-size);
  left: calc(var(--bsb-tl-circle-offset) * -1);
  position: absolute;
  top: 0;
  width: var(--bsb-tl-circle-size);
  z-index: 1;
}

.bsb-timeline-1 .timeline > .timeline-item .timeline-body {
  margin: 0;
  padding: 0;
  position: relative;
}
.bsb-timeline-1 .timeline > .timeline-item .timeline-content {
  padding: 0 0 2.5rem 2.5rem;
}

@media (min-width: 768px) {
  .bsb-timeline-1 .timeline > .timeline-item .timeline-content {
    padding-bottom: 3rem;
  }
}
p {
  color: #faf6ed;
  font-size: 1.25rem;
}
</style>