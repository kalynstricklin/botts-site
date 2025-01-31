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
    desc: "Updated presentation on SensorML presented at the University of Alabama in Huntsville (UAH) Hackathon.",
  },
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: introOSHConSys2023,
    title: "Intro to OSH and Connected Systems (2023)",
    desc: "Introduction to OpenSensorHub presented at 'Security, Sensors, & Simulations: Pushing the Limits of Cloud Computing' event at UAH Invention to Innovation Center.",
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
  <div class="container-fluid">
    <div class="row mb-5 justify-content-center text-center py-5">
      <div class="col-lg-12">
        <h2 class="section-title">Presentations</h2>
        <p class="section-subtitle">All Presentations and Documents are available to use. Please reference appropriately.</p>
      </div>
    </div>

    <div class="row align-items-center justify-content-center align-content-end" v-for="(presentation, index) in presentationsList" :key="index">
      <div class="col-lg-4 col-md-6 text-center mb-4">
        <div class="card-img">
          <img
              :src="presentation.image"
              class="img-fluid rounded about-img"
              :alt="presentation.title"
          />
        </div>

      </div>
      <div class="col-lg-8 col-md-6 d-flex flex-column justify-content-center">
        <div class="py-4 px-5">
          <h3 class="section-title" style=" font-size: 2.1rem;">{{ presentation.title }}</h3>
          <p class="section-text">{{ presentation.desc }}</p>

          <div>
            <b-button :href="presentation.link" class="orange-button" target="_blank">
              View Slides
            </b-button>
          </div>
        </div>


      </div>

    </div>

  </div>
</template>

<style scoped>
p{
  color: white;
}

.about-img {
  width: 80%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
}


@media (max-width: 768px) {
  .about-img {
    max-width: 300px;
  }
}

@media screen and (max-width: 480px) {

}
</style>