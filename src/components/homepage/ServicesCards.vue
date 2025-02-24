<script setup>
const services = [
  {
    title: "R&D Services",
    description: "The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for over two decades  Connected Systems specification..",
    moreDesc: "These R&D services have helped define the art of the possible with regard to heterogeneous sensor fusion, precision geopositioning across disparate sensor systems, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, heterogeneous space mission integration, 4D visualization frameworks, and much more.  The Botts-Inc team is always up for a new challenge, and manages an ongoing R&D roadmap for continuously advancing the frontiers of capability."
  },
  {
    title: "Architecture",
    description: "The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification.",
    moreDesc: "Customers have long relied on the Botts-Inc team to translate their mission and business requirements into interoperable architectures, and helping them navigate the standards process in an expedited manner.  Customers have also relied on the Botts-Inc team to put these interoperability standards into production implementation, which requires architecture leadership within their own organizations. "
  },
  {
    title: "Implementation",
    moreDesc: "The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix.",
    description: "The Botts-Inc team is not only a world class R&D services team, and leaders in developing OGC standards-based interoperability architectures, but a team that demands scalable and secure secure solutions to mission-critical problems."
  },
];
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div
          v-for="(item, index) in services"
          :key="index"
          class="col-lg-4 mb-3 d-flex align-items-stretch"

      >

        <div class="card">
          <div class="card-body d-flex flex-column">

            <div class="row">

                <h2 class="card-title text-center">{{ item.title }}</h2>


            </div>

            <hr />

            <div class="card-content">
              <p class="card-text mb-4">
                {{ item.description }}
              </p>
            </div>


            <div class="collapse" :id="'collapseJobDesc' + index">
              <div class="more-card collapse-text justify-content-center">

                <p class="card-text">
                  {{ item.moreDesc }}
                </p>

<!--                <div class="text-start mt-4">-->
<!--                  <a href="mailto:info@botts-inc.com" class="btn white-button">-->
<!--                    Contact Us-->
<!--                  </a>-->
<!--                </div>-->

              </div>
            </div>

            <div class="text-start mt-4">
              <p class="d-inline-block">
                <a
                    class="card-text text-decoration-none text-toggle"
                    type="button"
                    :data-bs-toggle="'collapse'"
                    :data-bs-target="'#collapseJobDesc' + index"
                    aria-expanded="false"
                    :aria-controls="'collapseJobDesc' + index"
                >
                  <b-avatar variant="light" icon="BIconArrowDown" class="text-collapsed"></b-avatar>
                  <b-avatar variant="light" icon="BIconArrowUp" class="text-expanded p-2"></b-avatar>
                  Learn More
                </a>
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-toggle[aria-expanded=false] .text-expanded {
  display: none;
}
.text-toggle[aria-expanded=true] .text-collapsed {
  display: none;
}

.white-button{
  font-size: 1.25rem;
}
.more-card{
  background-color: transparent;
}
.collapse-text{
  font-family: var(--font-primary);
  font-size: 1.15rem;
  color: #fff;
  text-align: left;
}

.card {
  background-color: transparent;
  border-color: var(--secondary-color);
  border-radius: 20px;
  padding: 15px;
  /**display: flex;**/
  /**flex-direction: column;**/
  /* align-items: center; */
  /* height: 100%; */
  width: 100%;
  height: fit-content;
  transition: 0.5s ease-in-out;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-title {
  margin: 0;
  text-align: left;
  font-size: 2.15rem;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.card-content {
  flex-grow: 1;
}
hr {
  width: 100%;
  border: 0;
  border-top: 1px solid #fff;
  margin: 0.5rem 0;
}

.card-text {
  color: #fff;
  font-size: 1.2rem;
  text-align: start;
  margin: 0;
}

.card:hover {
  background-image: linear-gradient(to bottom, var(--primary-color), var(--background-color));
  border-color: var(--secondary-color);
  transform: translateY(-10px);
}

.down-btn{
  color: white;
  font-size: 1.25rem;
}


@media only screen and (device-width: 768px) {
  .card-title{
    font-size: 1.7rem;
  }
  .down-btn{
    font-size: 1rem;
  }
  .card-text{
    font-size: 1rem;
  }
  .white-button{
    font-size: 1rem;
  }
}

@media only screen and (max-device-width: 480px) {
  .card-title{
    font-size: 1.35rem;
    text-align: start;
    align-content: center;
  }
  .down-btn{
    font-size: 1rem;
  }
  .white-button{
    font-size: 1rem;
  }
  .card-text{
    font-size: 1rem;
  }
}
</style>


<!--<template>-->
<!--  <div class="container-fluid">-->
<!--    <div class="row">-->
<!--      <div-->
<!--          v-for="(item, index) in services"-->
<!--          :key="index"-->
<!--          class="col-lg-4 mb-3 d-flex align-items-stretch"-->

<!--      >-->

<!--        <div class="card">-->
<!--         <div class="card-body d-flex flex-column">-->

<!--            <div class="row">-->
<!--              <div class="col-8 col-md-8 col-lg-9">-->
<!--                <h2 class="card-title">{{ item.title }}</h2>-->

<!--              </div>-->

<!--              <div class="col-4 col-md-4 col-lg-3">-->
<!--                <p class="d-inline-block">-->
<!--                  <button-->
<!--                      class="btn white-button"-->
<!--                      type="button"-->
<!--                      :data-bs-toggle="'collapse'"-->
<!--                      :data-bs-target="'#collapseJobDesc' + index"-->
<!--                      aria-expanded="false"-->
<!--                      :aria-controls="'collapseJobDesc' + index"-->
<!--                  >-->
<!--                    <i class="bi bi-arrow-down down-btn"></i>-->
<!--                  </button>-->
<!--                </p>-->
<!--              </div>-->
<!--            </div>-->

<!--            <hr />-->

<!--            <div class="card-content">-->
<!--              <p class="card-text mb-4">-->
<!--                {{ item.description }}-->
<!--              </p>-->
<!--            </div>-->


<!--            <div class="collapse" :id="'collapseJobDesc' + index">-->
<!--              <div class="more-card collapse-text justify-content-center">-->

<!--                <p class="card-text">-->
<!--                  {{ item.moreDesc }}-->
<!--                </p>-->

<!--                <div class="text-start mt-4">-->
<!--                  <a href="mailto:info@botts-inc.com" class="btn white-button">-->
<!--                    Contact Us-->
<!--                  </a>-->
<!--                </div>-->

<!--              </div>-->
<!--            </div>-->


<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
