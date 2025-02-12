<script setup>


</script>

<template>
  <section class="bsb-timeline-1">
    <div class="background-wrapper">
      <div class="container-fluid">

        <div class="row justify-content-center">

          <!--timeline-->
          <div class="col-12 col-lg-10">
            <div class="row mb-3">
              <div class="justify-content-center align-content-center text-white">
                <h2>Our Story</h2>
              </div>
            </div>
            <ul class="timeline">
              <li class="timeline-item ">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item ">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      Botts-Inc was built on Dr. Botts’ 20 years as a Principal Research Scientist within the National Space Science and Technology Center at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab.  At UAH, his team was heavily involved in research and development in support of fusion and analysis of data from a wide variety of disparate sensors, resulting in Dr. Botts’ creation of Sensor Model Language (SensorML), and the Open Geospatial Consortium (OGC) SensorWebEnablement (SWE) architecture used all over the world.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item ">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      Botts-Inc team then created the world leading, open source, open standards-based OpenSensorHub for integrating Sensors, Things, and Robots (all comprised of sensors, actuators and processes) as location-enabled and geographically-aware, web-accessible services – whether space-based, airborne, mobile, in situ, and terrestrial remote – of all phenomenologies in to a common 4D framework. Dr. Botts is now helping to lead the emerging OGC API – Connected Systems specification that is modernizing the OGC SWE legacy using OpenAPI/RESTful patterns.
                    </p>
                  </div>
                </div>
              </li>
              <li class="timeline-item ">
                <div class="timeline-body">
                  <div class="timeline-content">
                    <p class="card-text m-0">
                      Botts Innovative Research, Inc (Botts-Inc) specializes in the design and application of open standards and open source software for sensor systems within the national security, public sector, private sector, and scientific communities. Botts-Inc has been heavily involved in the design, development, and implementation of the Open Geospatial Consortium (OGC) Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification, discovering and tasking of sensors, publishing and subscribing to alerts, and streaming, parsing, processing, and portrayal of real-time and archived observations. Botts-Inc has extensive experience in processing and fusing a wide range of sensors, from those on satellite and airborne platforms, to those on mobile and static ground-based stations.                    </p>
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
  background-image: url('@/assets/lines.png');
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.65;
  z-index: -1;
}
.bsb-timeline-1{
  --bsb-tl-color: #faf6ed;
  --bsb-tl-circle-color: #faf6ed;
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
}
</style>