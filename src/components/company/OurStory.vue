<script setup>

</script>

<template>
  <section class="bsb-timeline-1 py-5 py-xl-8">
    <div class="container-fluid">

      <div class="row justify-content-center">
<!--timeline-->
        <div class="col-12 col-lg-10">
          <h3 class="gen-orange-title mb-4">Our Story</h3>
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-body">
                <div class="timeline-content">
                  <p class="card-text m-0">
                    Botts Innovative Research, Inc. (Botts Inc.) is a boutique R&D services firm, founded by Dr. Michael Botts, that has been in business for nearly two decades, with a diverse set of private and public sector clients.
                  </p>
                </div>
              </div>
            </li>

            <li class="timeline-item">
              <div class="timeline-body">
                <div class="timeline-content">
                  <p class="card-text m-0">
                    Botts-Inc was built on Dr. Botts’ 20 years as a Principal Research Scientist within the National Space Science and Technology Center at the University of Alabama in Huntsville (UAH), where he ran the VisAnalysis and Systems Technology (VAST) Lab.  At UAH, his team was heavily involved in research and development in support of fusion and analysis of data from a wide variety of disparate sensors, resulting in Dr. Botts’ creation of Sensor Model Language (SensorML), and the Open Geospatial Consortium (OGC) SensorWebEnablement (SWE) architecture used all over the world.
                  </p>
                </div>
              </div>
            </li>

            <li class="timeline-item">
              <div class="timeline-body">
                <div class="timeline-content">

                  <p class="card-text m-0">
                    Botts-Inc team then created the world leading, open source, open standards-based OpenSensorHub for integrating Sensors, Things, and Robots (all comprised of sensors, actuators and processes) as location-enabled and geographically-aware, web-accessible services – whether space-based, airborne, mobile, in situ, and terrestrial remote – of all phenomenologies in to a common 4D framework. Dr. Botts is now helping to lead the emerging OGC API – Connected Systems specification that is modernizing the OGC SWE legacy using OpenAPI/RESTful patterns.
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-body">
                <div class="timeline-content">

                  <p class="card-text m-0">
                    Botts-Inc team then created the world leading, open source, open standards-based OpenSensorHub for integrating Sensors, Things, and Robots (all comprised of sensors, actuators and processes) as location-enabled and geographically-aware, web-accessible services – whether space-based, airborne, mobile, in situ, and terrestrial remote – of all phenomenologies in to a common 4D framework. Dr. Botts is now helping to lead the emerging OGC API – Connected Systems specification that is modernizing the OGC SWE legacy using OpenAPI/RESTful patterns.
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>
<!--        circle-->
        <div class="col-12 col-lg-2">

<!--          <div class="row mt-4">-->
<!--            <div class="col-sm-6 col-md-12 col-lg-12">-->
<!--              <button type="button" class="btn p-5 rounded-circle btn-lg timeline-circle" style="background-color: #d39f44;">-->

<!--                <div class="text-white" style="font-size: 1.8rem">2005</div>-->
<!--                <small class="text-white">BOTTS FOUNDED</small>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-12 col-lg-12">-->
<!--              <button type="button" class="btn p-5 rounded-circle btn-lg timeline-circle" style="background-color: #faf6ed;">-->
<!--                <div class="text-uppercase">Open Source</div>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-12 col-lg-12">-->
<!--              <button type="button" class="btn p-5 rounded-circle btn-lg timeline-circle" style="background-color: #d39f44;">-->
<!--                <div class="text-white" style="font-size: 1.8rem">30+</div>-->
<!--                <small class="text-white">EMPLOYEES</small>-->
<!--              </button>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-12 col-lg-12">-->
<!--              <button type="button" class="btn p-5 rounded-circle btn-lg timeline-circle" style="background-color: #faf6ed;">-->
<!--                <div class="text-uppercase"></div>-->
<!--              </button>-->
<!--            </div>-->

          </div>

<!--        </div>-->
      </div>
    </div>

  </section>
</template>


<style scoped>
.timeline-circle{
  width: 150px;
  height: 150px;
  text-align: center;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 0px;
  cursor: default;
  opacity: 80%;
}
.timeline-circle div {
  font-weight: bold;
  font-size: 1.3rem;
}
.timeline-circle small {
  font-size: 0.9rem;
  color: #444;
}
.right-circle{
  margin-left: 100px;
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