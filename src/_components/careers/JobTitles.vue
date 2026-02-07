<script setup>
const positions = [
  {
    position: "Software Engineer - Full Stack",
    type: "Full Time",
    required: "DevSecOps and CI/CD",
    preferredQual: "Kubernetes, Docker, Linux, Java, Javascript, XML, JSON, Protobuf, Vue.js, 3JS, MQTT/MQTT.js, WebSockets, OpenAPI/REST, OSGI, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, Android, ATAK/TAK, OGC API, OGC SWE, OGC API-Connected System, TCP/IP, UDP, ZeroConf, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.)."
  },
  { position: "Software Engineer - Frontend",
    type: "Full Time",
    preferredQual: "Javascript, XML, JSON, Protobuf, Vue.js, 3JS, multi-window applications, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, OpenAPI/REST, MQTT.js, WebSockets, WebWorkers. Clearances are a bonus."
  },
  {
    position: "Mobile Application Developer",
    type: "Full Time",
    preferredQual: "We already have OSH integration with all sensors on the Android platform, or those accessible through Bluetooth, LTE, USB. IPC, etc.  Similar skills on iPhone platform, including iPhone LiDAR are of interest.  Deploying OSH on Android and iPhone with CesiumNative, CesiumJS WebKit, or other approaches will be of interest.",
    required: "Working knowledge of Cordova, ReactNative, Flutter, NativeScript, etc. are essential.",
    description: ""
  },
  {
    position: "Sensor Integration Engineer" ,
    type: "Full Time",
    require: "",
    preferredQual: "Java, Python, OpenAPI/REST, TCP/IP, UDP, ZeroConf, MQTT, WebSockets, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.), Python.  Working knowledge of existing domain specific sensor feeds and APIs is a bonus.  Working knowledge of OGC API, OGC SWE or OGC API – Connected Systems is a bonus."
  },
  {
    position: "Software Developer Intern" ,
    type: "Part Time",
    preferredQual: "Is your kung fu strong? Botts-Inc is always open to meeting smart people interested in our work.  Are you an autodidact?  Regardless of age or seniority, we are looking for technical team members who are self-starters, who take initiative, self-teach, and are excited to solve complicated mission challenges with our preferred stack of technologies.  Bonus points for being a tinkerer who likes working with equipment, and is interested in deploying and exercising new technologies in the field.  Must enjoy working with a talented team, and be committed to our customers’ operational excellence.  Clearances are a bonus."
  },
];
</script>

<template>
  <div class="container-fluid">
    <div class="card p-4 card-content">
      <div class="row">
        <div v-for="(item, index) in positions" :key="index" class="col-12">
          <div class="text-class">

            <div class="row px-lg-5 px-3 py-2 justify-content-center align-items-center">

              <hr/>

              <div class="col-md-8 col-lg-10 col-12 p-4">
                <router-link :to="{ name: 'JobApplication', params: { position: item.position } }" class="text-decoration-none">
                  <div class="text-content">
                    <h2 class="title text-white">{{ item.position }}</h2>
                    <div class="caption">Madison, AL, United States</div>
                  </div>
                </router-link>
              </div>


              <div class="col-md-4 col-lg-2 col-12 p-4">
                <p class="d-inline-block gap-3">
                  <b-button
                      class="white-button"
                      v-b-toggle="'collapseJobDesc' + index"
                  >
                    <i class="bi bi-arrow-down" style="color: white; font-size: 1.5rem"></i>
                  </b-button>
                </p>
              </div>

              <b-collapse :id="'collapseJobDesc' + index">
                <div class="card card-body collapse-text">


                  <p class="caption text-white">
                    Preferred Skills:
                  </p>
                  <div class="caption">
                    {{ item.preferredQual }}
                  </div>



                </div>
              </b-collapse>

              <div class="button-apply text-start">
                <a href="mailto:work@georobotix.us" class="btn white-button">
                  Apply Here!
                </a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-apply{
  padding-left: 25px;

}
.collapse-text{
  font-family: var(--font-primary);
  font-size: 1.15rem;
  color: #fff;
  text-align: left;
}
.card {
  background-color: transparent;

}
.caption{
  font-family: var(--font-primary);
  color: darkgray;
  font-size: 1.25rem;
}

.card-content{
  background-color: transparent;
  border-color: transparent;
  padding: 20px;
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


</style>
