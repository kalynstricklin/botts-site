<script setup>
import sweIntro2010 from "@/assets/presentationImg/swe-intro2010.png";
import sweSemantics from "@/assets/presentationImg/sweSemantics.png";
import sensorMl2009 from "@/assets/presentationImg/sensorml2009.png";
// import introOSHConSys2023 from "@/assets/presentationImg/introOSHConSys2023.png";
// import processing2023 from "@/assets/presentationImg/processing2023.png";

const presentationsList = [
  // {
  //   link: "",
  //   image: processing2023,
  //   title: "SensorML and Processing (2024)",
  //   desc: "Updated presentation on SensorML presented at the University of Alabama in Huntsville (UAH) Hackathon.",
  // },
  // {
  //   link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
  //   image: introOSHConSys2023,
  //   title: "Intro to OSH and Connected Systems (2023)",
  //   desc: "Introduction to OpenSensorHub presented at 'Security, Sensors, & Simulations: Pushing the Limits of Cloud Computing' event at UAH Invention to Innovation Center.",
  // },
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: sweIntro2010,
    title: "Sensor Web Enablement Introduction and V2.0 Directions (2010)",
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


    <div class="row align-items-center justify-content-center align-content-end gap-2" v-for="(presentation, index) in presentationsList" :key="index">

      <div class="card orange-card p-4 mt-3">
        <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
<!--          <a :href="presentation.link" class="text-decoration-none" target="_blank">-->
            <div class="tab-content-wrapper">
              <img :src="presentation.image" :alt="presentation.title" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">
                <b-card-title>{{ presentation.title }}</b-card-title>
                <p>
                  {{presentation.desc}}
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a :href="presentation.link" class="btn white-button me-2" target="_blank">View Slides</a>
                  <a href="" class="btn-lg white-button text-decoration-none" target="_blank">View Video</a>
                </div>
              </div>
            </div>

<!--          </a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
}

.tab-image {
  max-width: 40%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  display: inline-block;
  border-radius: 20px;
}
/**
 .tab-image:hover {
  transform: scale(1.1);
}
**/
.text-content {
  text-align: left;
  width: 55%;
  color: #fff;
}


p{
  color: white;
}
.orange-card{
  background-color: rgba(112, 112, 112, 0.2);
  border-color: rgba(112, 112, 112, 0.2);
  opacity: 100%;
  transition: transform 0.3s ease-in-out;

}

.orange-card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
  transform: translateY(-5px);
}


@media (max-width: 768px) {
}

@media screen and (max-width: 480px) {

}
</style>