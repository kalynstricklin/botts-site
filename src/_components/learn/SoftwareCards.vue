<script setup>
import image3 from "@/assets/arch.webp"

const software = [
  {
    title: 'OSH Connect',
    heading: 'OpenSensorHub Toolkit',
    description: 'A pure JavaScript toolkit for visualizing OSH data and building custom sensor monitoring applications. Integrates with Leaflet, OpenLayers, Cesium, Chart.js, and more.',
    links: [
      { text: 'View Docs', url: 'https://opensensorhub.github.io/osh-js/latest/site/guide/' }
    ]
  },
  {
    title: 'OSH Android',
    heading: 'OSH Android',
    description: 'Deploy a complete OSH node on your Android device with native sensor integration. Exposes all device sensors via OGC services, whether built-in or tethered.',
    links: [
      { text: 'View Docs', url: 'https://docs.opensensorhub.org/docs/category/android-unfinished' },
      // { text: 'View on GitHub', url: 'https://github.com/opensensorhub/osh-android' }
    ]
  },
  {
    title: 'SensorML Process Engine',
    heading: 'SensorML Process Execution Engine',
    description: 'Execute SensorML process chains on-demand, integrating AI/ML/CV and geoprocessing as orchestratable workflows. Runs locally or distributed across Edge, Fog, and Cloud nodes.',
    links: [
      { text: 'View Docs', url: 'https://docs.opensensorhub.org/dev/core-apis/sensorml-api/' }
    ]
  }
]
</script>

<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-12 text-center">
        <span class="text-white">Our Software</span>
        <h2 class="text-white">Let's Build Something Together!</h2>
      </div>
    </div>

    <div class="card main-card p-4 mt-4">
      <b-tabs content-class="mt-3" nav-class="tab-nav" justified>
        <b-tab
          v-for="(item, index) in software"
          :key="item.title"
          :title="item.title"
          :active="index === 0"
        >
          <div class="tab-content-wrapper">
            <img :src="image3" :alt="item.heading" class="img-fluid tab-image" loading="lazy">
            <div class="text-content">
              <h2>{{ item.heading }}</h2>
              <p>{{ item.description }}</p>
              <div class="d-flex gap-2 mt-5">
                <a
                  v-for="link in item.links"
                  :key="link.url"
                  :href="link.url"
                  class="btn white-button me-2"
                  target="_blank"
                >
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style scoped>
.main-card {
  background-color: rgba(169, 9, 9, 0.16);
  border-color: rgba(169, 9, 9, 0.16);
}

.main-card:hover {
  transform: translateY(-5px);
}

.tab-content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tab-image {
  max-width: 40%;
  height: auto;
}

.text-content {
  text-align: left;
  width: 55%;
  color: #fff;
}

p {
  text-align: left;
  font-size: 1.25rem;
}

a {
  font-family: var(--font-primary);
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .tab-content-wrapper {
    flex-direction: column;
    text-align: center;
  }

  .tab-image {
    max-width: 100%;
    margin-bottom: 15px;
  }

  .text-content {
    width: 100%;
  }

  p {
    font-size: 1rem;
  }
}
</style>

<style>
.main-card .nav-tabs {
  border-bottom: none;
  justify-content: space-evenly;
}

.main-card .nav-tabs .nav-link {
  color: #c5c5c5;
  border: none;
  background: transparent;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-primary);
}

.main-card .nav-tabs .nav-link:hover {
  color: #fff;
}

.main-card .nav-tabs .nav-link.active {
  color: var(--primary-color);
  background: transparent;
  border: none;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.5px;
}

.main-card .tab-content {
  padding: 1rem 0;
}
</style>
