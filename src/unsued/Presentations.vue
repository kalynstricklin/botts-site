<script setup>
import sweIntro2010 from "@/assets/presentationImg/swe-intro2010.png";
import sweSemantics from "@/assets/presentationImg/sweSemantics.png";
import sensorMl2009 from "@/assets/presentationImg/sensorml2009.png";
import introOSHConSys2023 from "@/assets/presentationImg/introOSHConSys2023.png";
import processing2023 from "@/assets/presentationImg/processing2023.png"
// import PresentationGallery from "@/components/learn/PresentationGallery.vue";

const presentationsList = [
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: processing2023,
    title: "SensorML and Processing (2024)",
    desc: "Updated presentation on SensorML.",
  },
  {
    link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
    image: introOSHConSys2023,
    title: "Intro to OSH and Connected Systems (2023)",
    desc: "Introduction to OSH.",
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
  <!--  <div>-->
  <!--    <section class="py-4">-->
  <!--      <PresentationGallery/>-->
  <!--    </section>-->
  <!--  </div>-->
  <div class="py-2">
    <section>
      <h1>Presentations</h1>
      <p class="text-center">
        Slides, videos, and demos are available for you to download and use.
        Please reference appropriately.
      </p>
    </section>

    <div class="container-fluid py-2">
      <div class="row gap-3 justify-content-center">
        <div
            class="col-lg-8 bg-light p-4 rounded shadow-sm presentation-card"
            v-for="(item, index) in presentationsList"
            :key="index"
        >
          <div class="row align-items-center">
            <div class="col-md-3">
              <img
                  :src="item.image"
                  class="card-img-left rounded"
                  :alt="`${item.title} photo`"
              />
            </div>

            <div class="col-md-9">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
              <b-button
                  class="presentation-btn mt-2"
                  :href="item.link"
                  target="_blank"
              >
                <b-icon icon="laptop" class="me-2"></b-icon>
                Slides
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5rem;
  color: #25262a;
  text-align: center;
}

p {
  color: #6c757d;
  font-size: 1rem;
  line-height: 1.5;
}

.presentation-btn {
  color: #fff;
  background-color: #d7c72d;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.presentation-btn:hover {
  background-color: #f1d914;
}

.presentation-card {
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.presentation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.row {
  margin: 0;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  img {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
