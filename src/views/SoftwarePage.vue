<script setup>
import OrangeCards from "@/components/OrangeCards.vue";

const softwareList = [
  {
    title: 'OpenSensorHub',
    text: '',
    button: 'Learn More'
  },
  {
    title: 'OSH Web Client Toolkit',
    text: '',
    button: 'Learn More'
  },

  {
    title: 'OSH Android Application',
    text: ''
    ,button: 'Learn More'
  },
  {
    title: 'SensorML Process Execution Engine',
    text: '',
    button: 'Learn More'
  },


  {
    title: 'SensorML Web Tools',
    text: '',
    button: 'Learn More'
  },

  {
    title: 'GeoRobotix',
    text: '',
    button: 'Learn More'
  },
]
</script>



<template>
  <div class="container-fluid py-2 mb-2">

    <div class="row mb-3">
      <div class="text-center justify-content-center align-content-center">
        <h2>Software</h2>
      </div>
    </div>

    <OrangeCards :items="softwareList"/>
  </div>

</template>

<style scoped>

</style>
