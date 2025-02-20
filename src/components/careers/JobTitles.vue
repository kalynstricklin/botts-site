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
    preferredQual: "Javascript, XML, JSON, Protobuf, Vue.js, 3JS, multi-window applications, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, OpenAPI/REST, MQTT.js, WebSockets, WebWorkers. Clearances are a bonus." },
  // {
  //   position: "Software Developer - Backend",
  //   type: "Full Time",
  //   description: "",
  //   required: "",
  //   preferredQual: ""
  // },
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
  // {
  //   position: "Software Engineer - General (early career)",
  //   type: "Full Time",
  //   require: "",
  //   preferredQual: "1+ year of professional software development experience (this does not have to be from a full-time role",
  //   description: "As a software Engineer at Bott's, you will be"
  // },
  {
    position: "Software Developer Intern" ,
    type: "Part Time",
    description: ""
  },
];
</script>

<!--    <p>
                    Team player who takes initiative. Interested in new challenges. Customer-focused. Committed to
                    operational excellence.
                  </p>
                  -->

<template>
  <div class="container-fluid">
    <div class="card p-4 card-content">
      <div class="row">
        <div v-for="(item, index) in positions" :key="index" class="col-12">
          <div class="text-class">

<!--            <router-link :to="{ name: 'JobApplication', params: { position: item.position } }" class="text-decoration-none">-->
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
                <p class="d-inline-flex gap-3">
                  <button
                      class="btn white-button"
                      type="button"
                      :data-bs-toggle="'collapse'"
                      :data-bs-target="'#collapseJobDesc' + index"
                      aria-expanded="false"
                      :aria-controls="'collapseJobDesc' + index"
                  >
                    <i class="bi bi-arrow-down" style="color: white; font-size: 1.5rem"></i>
                  </button>
                </p>
              </div>

              <div class="collapse" :id="'collapseJobDesc' + index">
                <div class="card card-body collapse-text">


                  <p class="caption text-white">
                    Preferred Skills:
                  </p>
                  <div class="caption">
                    {{ item.preferredQual }}
                  </div>



                </div>
              </div>

              <div class="button-apply text-start">
                <router-link :to="{ name: 'JobApplication', params: { position: item.position } }" class="btn text-decoration-none white-button">
                  Apply Here!
                </router-link>
              </div>


            </div>
<!--            </router-link>-->
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
