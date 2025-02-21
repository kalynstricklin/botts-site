<script setup>

const services = [
  {
    title: "R&D SERVICES",
    description: "The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for over two decades."
  },
  {
    title: "Architecture",
    description: "The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification."
  },
  {
    title: "Implementation",
    description: "The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix."
  },

]

</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in services" :key="index" class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div  class="card">
          <div class="card-body d-flex flex-column">
<!--            <div class="justify-content-end align-items-end align-content-end text-end">-->
<!--              <a href="#" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </a>-->
<!--            </div>-->
            <h2 class="card-title text-white text-center text-uppercase">{{ item.title }}</h2>
            <hr>
            <div id="scroll-2" class="card-content" style="overflow-y: scroll; max-height: 20vh">
              <p class="card-text mb-4">
                {{item.description}}
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
  text-align: start;
}

.card:hover {
  background-image: linear-gradient(to bottom, var(--primary-color), var(--background-color));
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
