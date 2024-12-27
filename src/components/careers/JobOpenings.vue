<script setup>

// import oshlogo from "@/assets/OSH-Logo-NoText.png";

const positions = [
  { position: "Full Stack Developer", skills: "Kubernetes, Docker, Linux, Java, Javascript, XML, JSON, Protobuf, Vue.js, 3JS, MQTT/MQTT.js, WebSockets, OpenAPI/REST, OSGI, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, Android, ATAK/TAK, OGC API, OGC SWE, OGC API-Connected System, TCP/IP, UDP, ZeroConf, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.). DevSecOps and CI/CD experience required"},
  { position: "Android/IPhone Mobile Developer", skills: "Exactly what it sounds like.  We already have OSH integration with all sensors on the Android platform, or those accessible through Bluetooth, LTE, USB. IPC, etc.  Similar skills on iPhone platform, including iPhone LiDAR are of interest.  Deploying OSH on Android and iPhone with CesiumNative, CesiumJS WebKit, or other approaches will be of interest.  Working knowledge of Cordova, ReactNative, Flutter, NativeScript, etc. are essential."},
  { position: "Javascript UI/UX Developer", skills: "Javascript, XML, JSON, Protobuf, Vue.js, 3JS, multi-window applications, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, OpenAPI/REST, MQTT.js, WebSockets, WebWorkers.  If you are not proficient in all, you are not disqualified.  Clearances are a bonus."},
  { position: "Sensor System Integration Expert", skills: "Java, Python, OpenAPI/REST, TCP/IP, UDP, ZeroConf, MQTT, WebSockets, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.), Python.  Working knowledge of existing domain specific sensor feeds and APIs is a bonus.  Working knowledge of OGC API, OGC SWE or OGC API – Connected Systems is a bonus.  If you are not proficient in all, you are not disqualified.  Clearances are a bonus."},
  { position: "4D Metaverse/Simulation Developer", skills: "Java, C++, Unreal Engine, Unity, O3DE, NVIDIA OmniVerse, OpenGL, WebGL, glTF, 3D computer graphics in general.  All integrations will occur beside Cesium for Unreal, Cesium for Unity, Cesium for O3DE, due to the requirement for a geodetically correct 3D world. Clearances are a bonus."},
  { position: "Cloud Native Engineer", skills: "Expertise is AWS, GCP, Azure, OpenStack, etc., using Kubernetes, Docker, etc. with knowledge of deployment optimization options for scalable infrastructure, Cloud databases, distributed Pub/Sub, load balancing, caching strategies, etc.  Experience with running SaaS infrastructure, deploying on hybrid clouds, and OnPrem SaaS deployments."},
  { position: "Expeditionary Engineer", skills: "Ability to engage with customers in dynamic mission environments.  Kubernetes, Docker, DevSecOps, network troubleshooting, troubleshooting of restrictive customer desktop environment management systems, capable of collaboration with hardware and networking professionals.  Ability to become proficient with OpenSensorHub, and to support the development of OSH drivers for sensitive systems/devices.  This job can require travel, and extended onsite deployment.  Field testing of capabilities outside the wire may be required.  Clearances required."},
  { position: "Edge Deployment Engineer", skills: "Capable of quickly becoming familiar with different communications and computing environments for the purposes of rapid deployment of capabilities at the Edge.  Interested in configuring all manner of hardware systems (e.g., sensors, Things, robots, drones, control systems, devices, platforms, etc.).  Capable of reaching back to developers to resolve anomalies, and of deploying patches and updates.  This job involves significant field testing of customer capabilities that are integrated with OSH.  Configuring systems to support disrupted, disconnected, intermittent and low-bandwidth (DDIL) environments will be required.  Familiarity with TAK/ATAK is a bonus.  Clearances are a bonus."},
  { position: "Emerging Ninja", skills: "Is your kung fu strong? Botts-Inc is always open to meeting smart people interested in our work.  Are you an autodidact?  Regardless of age or seniority, we are looking for technical team members who are self-starters, who take initiative, self-teach, and are excited to solve complicated mission challenges with our preferred stack of technologies.  Bonus points for being a tinkerer who likes working with equipment, and is interested in deploying and exercising new technologies in the field.  Must enjoy working with a talented team, and be committed to our customers’ operational excellence.  Clearances are a bonus."},

];


</script>

<template>
<div>
  <section class="text-center p-2">
    <h1>Opportunities</h1>
    <span>At Botts, we believe that...</span>
  </section>

  <div class="container-fluid py-2">
    <div class="row gap-3 justify-content-center">

      <div class="col-lg-6 p-4 rounded shadow-sm doc-card" v-for="(item, index) in positions" :key="index">

            <h5 class="doc-title">{{item.position}}</h5>
            <span class="text-muted">Technical Skills Required:</span>
            <p>
              {{item.skills}}
            </p>


          <b-button
              href="mailto:work@botts-inc.com"
              target="_blank"
              class="learn-button"
          >
            Apply Here
          </b-button>


      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

h1{
  color: #333;
  font-weight: bold;
}
.doc-card{
  background-color: #f6f6f6;
  border-color: #333;
  transition: transform 0.2s, box-shadown 0.2s;
}
.doc-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.doc-title{
  margin-bottom: 15px;
  font-weight: bold;
}
.learn-button{
  color: #d39f44;
  border-color: #d39f44;
  background-color: transparent;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}
.learn-button:hover {
  background-color: transparent;
  color: #b45341;
  border-color: #b45341;
}
</style>