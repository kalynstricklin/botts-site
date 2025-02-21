<script setup>
const software = [
  {
    title: "OSH-Connect",
    description: "A library that interacts with OpenSensorHub using OGC API Connected Systems.",
    github: 'https://github.com/Botts-Innovative-Research/OSHConnect-Java',
    docs: '',

  },
  {
    title: "OSH-Android",
    description: "An open-source Android application that deploys a OSH node on your Android device.",
    github: 'https://github.com/opensensorhub/osh-android',
    docs: 'https://docs.opensensorhub.org/dev/android/',
  },
  {
    title: "OSH Web Client Toolkit",
    description: "An open-source JavaScript library for visualizing sensor data through OpenSensorHub",
    github: 'https://github.com/opensensorhub/osh-js',
    docs: 'https://opensensorhub.github.io/osh-js/latest/site/guide/',
  },
  {
    title: "OSH-Viewer",
    description: "OpenSensorViewer is a web app for OpenSensorHub that enables interaction and visualization of sensor data using OGC standards like SensorML and Sensor Web API.",
    github: 'https://github.com/opensensorhub/osh-viewer',
    docs: '',
  },
  {
    title: "SensorML Process Engine",
    description: "This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes.",
    github: '',
    docs: 'https://docs.opensensorhub.org/dev/core-apis/sensorml-api/',
  },
  {
    title: "SensorML Process Engine",
    description: "This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes.",
    github: '',
    docs: 'https://docs.opensensorhub.org/dev/core-apis/sensorml-api/',
  },
]
</script>


<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in software" :key="index" class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div  class="card">
          <div class="card-body">

            <h3 class="card-title text-white text-start">{{ item.title }}</h3>
<!--            <div id="" class="card-content">-->
            <p class="card-text">
              {{item.description}}
            </p>
            <div class="d-flex gap-2 mt-2">
              <a :href="item.docs" class="btn white-button me-2" target="_blank">View Docs</a>
              <a :href="item.github" class="btn white-button" target="_blank">View on GitHub</a>
            </div>
<!--            </div>-->

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
.card:hover{
  transform: translateY(-10px);
  transition: 0.5s;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-text {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  text-align: start;
}

.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
}

.card a {
  font-family: var(--font-primary);
  font-size: 1rem;
}

</style>
