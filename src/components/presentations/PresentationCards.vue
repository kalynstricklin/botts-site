<script setup>
import sweIntro2010 from "@/assets/presentationImg/swe-intro2010.png";
import sweSemantics from "@/assets/presentationImg/sweSemantics.png";
import sensorMl2009 from "@/assets/presentationImg/sensorml2009.png";
import introOSHConSys2023 from "@/assets/presentationImg/introOSHConSys2023.png";
import processing2023 from "@/assets/presentationImg/processing2023.png";

const presentationsList = [
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: processing2023,
    title: "SensorML and Processing (2024)",
    desc: "Updated presentation on SensorML. Updated presentation on SensorML. Updated presentation on SensorML.",
  },
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: introOSHConSys2023,
    title: "Intro to OSH and Connected Systems (2023)",
    desc: "Introduction to OSH. Updated presentation on SensorML. Updated presentation on SensorML. Updated presentation on SensorML.",
  },
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: sweIntro2010,
    title: "Sensor Web Enablement Introduction (2010)",
    desc: "Provides an introduction to the purpose, design goals, and application of the OGC SWE open standards.",
  },
  {
    link: "https://docs.google.com/presentation/d/1EwYn0vbcI0AQUJcZu70ZIBvvsRpNT1Idpe_xwMr07HU/edit#slide=id.p1",
    image: sensorMl2009,
    title: "SensorML and On-Demand Processing (2009)",
    desc: "Discussion on the application of SensorML for supporting on-demand processing in clients, web services, on sensor systems, or at compute centers.",
  },
  {
    link: "https://docs.google.com/presentation/d/1RuA4vjobMP2L5qkWu3OgZPpLdcvNJTYjYeKMdxf5lQQ/edit#slide=id.p1",
    image: sweSemantics,
    title: "SWE and Semantics (2008)",
    desc: "Provides an overview of the importance of semantics and ontologies to the SWE standards and their application.",
  },
];
</script>

<template>
  <div class="container-fluid py-4">

    <div class="row mb-4 text-center">
      <h2>Presentations</h2>
       <span class="text-center">All Presentations and Documents are available to use. Please reference appropriately.</span>

    </div>

    <div class="row p-2" v-for="(presentation, index) in presentationsList" :key="index">
      <div class="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
        <img
            :src="presentation.image"
            class="img-fluid rounded about-img"
            :alt="presentation.title"
        />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
        <h2 class="gen-sm-title">{{ presentation.title }}</h2>
        <p class="about-text">{{ presentation.desc }}</p>

        <div>
          <b-button :href="presentation.link" class="gen-btn" target="_blank">
            View Slides
          </b-button>
        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>
.about-text {
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-size: 1.1em;
}

.about-img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 8px;
  margin: auto;
}

.gen-sm-title {
  font-size: 1.5em;
  margin-bottom: 1rem;
}



@media (max-width: 768px) {
  .about-text {
    font-size: 1em;
  }

  .gen-sm-title {
    font-size: 1.25em;
  }

  .about-img {
    max-width: 300px;
  }
}
</style>
