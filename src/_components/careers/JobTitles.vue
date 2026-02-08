<script setup>
const positions = [
  {
    position: "Software Engineer - Full Stack",
    type: "Full Time",
    required: "DevSecOps and CI/CD",
    preferredQual: "Kubernetes, Docker, Linux, Java, Javascript, XML, JSON, Protobuf, Vue.js, 3JS, MQTT/MQTT.js, WebSockets, OpenAPI/REST, OSGI, JavaScript mapping viewers (e.g, CesiumJS, OpenLayers, Leaflet, ESRI, Mapbox, DeckGL, etc.), glTF, WebGL shaders, Android, ATAK/TAK, OGC API, OGC SWE, OGC API-Connected System, TCP/IP, UDP, ZeroConf, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.)."
  },
  {
    position: "Software Engineer - Frontend",
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
    position: "Sensor Integration Engineer",
    type: "Full Time",
    require: "",
    preferredQual: "Java, Python, OpenAPI/REST, TCP/IP, UDP, ZeroConf, MQTT, WebSockets, communication interfaces (e.g,  serial, Ethernet, USB, Bluetooth/BLE, RTP, RTSP, Zigbee, Z-Wave, mesh networks, LoRa, WiFi, LTE, etc.), Python.  Working knowledge of existing domain specific sensor feeds and APIs is a bonus.  Working knowledge of OGC API, OGC SWE or OGC API – Connected Systems is a bonus."
  },
  {
    position: "Software Developer Intern",
    type: "Part Time",
    preferredQual: "Is your kung fu strong? Botts-Inc is always open to meeting smart people interested in our work.  Are you an autodidact?  Regardless of age or seniority, we are looking for technical team members who are self-starters, who take initiative, self-teach, and are excited to solve complicated mission challenges with our preferred stack of technologies.  Bonus points for being a tinkerer who likes working with equipment, and is interested in deploying and exercising new technologies in the field.  Must enjoy working with a talented team, and be committed to our customers' operational excellence.  Clearances are a bonus."
  },
];
</script>

<template>
    <div class="container-fluid">
      <div class="positions-container">
        <div v-for="(item, index) in positions" :key="index" class="position-item">
          <hr class="position-divider" />

          <div class="position-header">
            <div class="position-info">
              <router-link
                :to="{ name: 'JobApplication', params: { position: item.position } }"
                class="text-decoration-none"
              >
                <h2 class="position-title">{{ item.position }}</h2>
              </router-link>
              <p class="position-location">Madison, AL, United States</p>
            </div>

            <b-button
              class="toggle-button"
              v-b-toggle="'collapseJobDesc' + index"
              variant="outline-light"
            >
              <i class="bi bi-chevron-down"></i>
            </b-button>
          </div>

          <div class="apply-button-wrapper">
            <a href="mailto:work@georobotix.us" class="btn white-button">
              Apply Here!
            </a>
          </div>

          <b-collapse :id="'collapseJobDesc' + index" class="mt-4">
            <div class="job-description">
              <p class="description-label">Preferred Skills:</p>
              <p class="description-text">{{ item.preferredQual }}</p>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
</template>

<style scoped>
.positions-container {
  max-width: 1200px;
  margin: 0 auto;
}

.position-item {
  margin-bottom: 20px;
}

.position-divider {
  border-color: rgba(255, 255, 255, 0.15);
  margin: 0 0 30px 0;
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.position-info {
  flex: 1;
}

.position-title {
  font-size: 1.75rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.position-title:hover {
  color: var(--primary-color);
}

.position-location {
  font-size: 1rem;
  color: #888;
  margin: 0;
  font-family: var(--font-primary);
}

.toggle-button {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.toggle-button:hover {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.05);
}

.toggle-button i {
  font-size: 1.5rem;
  color: #fff;
}

.apply-button-wrapper {
  margin-bottom: 30px;
}

.apply-button-wrapper .white-button {
  font-family: var(--font-primary);
  font-size: 1rem;
  padding: 10px 30px;
}

.job-description {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
}

.description-label {
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  margin-bottom: 15px;
  font-family: var(--font-primary);
}

.description-text {
  font-size: 1rem;
  color: #c5c5c5;
  line-height: 1.8;
  margin: 0;
  font-family: var(--font-primary);
}

@media (max-width: 768px) {
  .position-header {
    align-items: flex-start;
  }

  .position-title {
    font-size: 1.5rem;
  }

  .position-location {
    font-size: 0.9rem;
  }

  .job-description {
    padding: 20px;
  }

  .description-text {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .position-title {
    font-size: 1.25rem;
  }
}
</style>