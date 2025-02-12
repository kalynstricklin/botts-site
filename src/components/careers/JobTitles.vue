<script setup>
const positions = [
  { position: "Software Developer - Full Stack", type: "Full Time", description: "Kubernetes, Docker, Linux, Java, Javascript, XML, JSON, Protobuf, Vue.js, 3JS, MQTT/MQTT.js, WebSockets, OpenAPI/REST, OSGI, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, Android, ATAK/TAK, OGC API, OGC SWE, OGC API-Connected System, TCP/IP, UDP, ZeroConf, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.). DevSecOps and CI/CD experience required.  If you are not proficient in all, you are not disqualified.  Years of experience are less important than technical proficiency. " },
  { position: "Software Developer - Frontend", type: "Full Time", description: "Javascript, XML, JSON, Protobuf, Vue.js, 3JS, multi-window applications, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, OpenAPI/REST, MQTT.js, WebSockets, WebWorkers.  If you are not proficient in all, you are not disqualified.  Clearances are a bonus.  Years of experience are less important than technical proficiency." },
  { position: "Software Developer - Backend", type: "Full Time", description: "" },
  { position: "Mobile Application Developer", type: "Full Time", description: "We already have OSH integration with all sensors on the Android platform, or those accessible through Bluetooth, LTE, USB. IPC, etc.  Similar skills on iPhone platform, including iPhone LiDAR are of interest.  Deploying OSH on Android and iPhone with CesiumNative, CesiumJS WebKit, or other approaches will be of interest.  Working knowledge of Cordova, ReactNative, Flutter, NativeScript, etc. are essential." },
  { position: "Sensor Integration Engineer" , type: "Full Time", description: "Java, Python, OpenAPI/REST, TCP/IP, UDP, ZeroConf, MQTT, WebSockets, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.), Python.  Working knowledge of existing domain specific sensor feeds and APIs is a bonus.  Working knowledge of OGC API, OGC SWE or OGC API – Connected Systems is a bonus.  If you are not proficient in all, you are not disqualified.  Clearances are a bonus.  Years of experience are less important than technical proficiency." },
  { position: "Emerging Technology Specialist" , type: "Full Time", description: "It's your kung fu strong? Botts-Inc is always open to meeting smart people interested in our work.  Are you an autodidact?  Regardless of age or seniority, we are looking for technical team members who are self-starters, who take initiative, self-teach, and are excited to solve complicated mission challenges with our preferred stack of technologies.  Bonus points for being a tinkerer who likes working with equipment, and is interested in deploying and exercising new technologies in the field.  Must enjoy working with a talented team, and be committed to our customers’ operational excellence.  Clearances are a bonus." },
  { position: "Software Developer Intern" , type: "Part Time", description: "" },
];
</script>

<template>
  <div class="container-fluid">
    <div class="card p-4 card-content">
      <div class="row">
        <div v-for="(item, index) in positions" :key="index"  class="col-12">
          <div class="text-class">
            <div class="row px-lg-5 px-3 py-4">
              <hr/>

              <div class="col-lg-10 col-12 p-4">
                <a href="mailto:work@botts-inc.com" class="text-decoration-none" target="_blank">
                <div class="text-content">
                  <h2 class="title text-white">{{item.position}}</h2>
                  <div>
                    <div class="caption">Madison, AL, United States</div>
                  </div>
                </div>
                </a>
              </div>
              <div class="col-lg-2 col-12 p-4">
                <p class="d-inline-flex gap1">
                  <button class="btn white-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJobDesc" aria-expanded="false" aria-controls="collapseJobDesc">
                    <i class="bi bi-arrow-down-right" style="color: white; font-size: 1.5rem"></i>
                  </button>
                </p>
              </div>
              <hr/>
              <div class="collapse" id="collapseJobDesc">
                <div class="card card-body collapse-text">
                  Team player who takes initiative.  Interested in new challenges.  Customer focused.  Committed to operational excellence.  Technical skills required for success include:
                  {{item.description}}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.collapse-text{
  font-family: var(--font-primary);
  font-size: 1.15rem;
  color: #fff;
}
.card {
  background-color: transparent;

}
.caption{
  font-family: var(--font-primary);
  color: darkgray;
  font-size: 1.35rem;
}

.card-content{
  background-color: transparent;
  border-color: transparent;
  padding: 20px;
}
.text-content:hover{
  transform: translateY(-5px);
}

.text-content {
  text-align: left;
  color: #fff;
}

p {
  color: #fff;
  font-family: var(--font-secondary);
  text-align: left;
}

hr {
  color: #fff;
}

@media only screen and (max-width: 480px) {
 /** .title {
    font-size: 1.35rem;
  }**/
  p {
    font-size: 0.75rem;
  }
}
</style>
