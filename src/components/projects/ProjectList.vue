<script setup>
import ListComp from "@/components/ListComp.vue";

const projectList = [
  {
    header: "Fusion and visualization of disparate sensor data",
    text: "The Botts-Inc team has been engaged in visualization and analysis of disparate sensor data within decision support tools. With the development of the initial versions of Space Time Toolkit in 1995 and its evolution and continued maintenance today, the team has vast experience with providing users with interactive graphical representation of data, as well as on-demand data processing and client-server interaction.",
  },
  {
    header: "Geolocation of data from a wide variety of remote sensors",
    text: "Beginning first with satellite-borne sensors and then moving to airborne and ground-based sensors, the team has 15+ years of experience in the precision geolocation of remotely sensed data. In addition to promotion of the benefits of on-demand geolocation and processing, the team has been working with the Community Sensor Model (CSM) arena to help establish standards for describing remote sensors and processing their data.",
  },
  {
    header: "Application of SensorWebs to “detect and react”",
    text: "The importance of sensors is that they can provide actionable information. Additionally, information derived one one set of sensors calls for the tasking of other sensors to verify or gain additional actionable information. The Botts-Inc team has been exercising and testing the application of web services to enable workflows for supporting these “detect and react”cycles.",

  },
  {
    header: "Processing and fusion of video from multiple sources",
    text: "At Botts-Inc, we believe that a video camera is just another sensor and should be treated as one. This includes video cameras on-board aircraft as well as ground-based cameras on static or dynamic platforms. In addition to dealing with the traditional challenges of video (e.g. high-volume, rapid-update), we are promoting and demonstrating the need to provide adequate sensor description and adequate ancillary data to support processing and fusion of these video observations with data from other sources.",

  },
  {
    header: "Enabling airborne resources in a SensorWeb environment",
    text: "From airborne scanners, imagers, and video cameras, the team has been involved in research and development surrounding airborne assets. In addition to on-demand geolocation of airborne observations, the team at Botts-Inc is exploring concepts for on-board web services and processing using SWE standards.",

  },
  {
    header: "Integration of UxS and robotics platforms within a SensorWeb environment",
    text: "Thinking beyond sensors, the Botts-Inc team has demonstrated how to integrate robotic platforms and all manner of UxS (e.g., UAS, UGV, UUV, USV) into interoperable OGC based SensorWebs, managing not only there heterogeneous observation streams, but also the ability task their control streams with all manner of commands. As sensing platforms become increasingly autonomous, this is critical.",

  },
  {
    header: "Participation in military/intelligence testbeds",
    text: "Over many years, the Botts-Inc team has participated in many national security related Interoperability testbeds which provide a testing ground for new sensors and sensor-oriented information technology. In addition, the team has been engaged in other defense/intelligence demonstration projects, including both customer implementations and interoperability testbeds conducted by the OGC, funded by various government agencies and military services.",

  },
];
</script>

<template>
  <div class="container-fluid">
    <div class="row mb-4 text-center">
      <h2>Projects</h2>
    </div>

    <ListComp :items="projectList" />
  </div>
</template>

<style scoped>

</style>
