<script setup>
import processing2023 from "@/assets/presentationImg/processing2023.png";
import introOSHConSys2023 from "@/assets/presentationImg/introOSHConSys2023.png";
import sweIntro2010 from "@/assets/presentationImg/swe-intro2010.png";
import sensorMl2009 from "@/assets/presentationImg/sensorml2009.png";
import sweSemantics from "@/assets/presentationImg/sweSemantics.png";



// const presentationsList = [
//   {
//     link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
//     image: processing2023,
//     title: "SensorML and Processing (2024)",
//     author: 'Mike Botts',
//     desc: "Updated presentation on SensorML.",
//   },
//   {
//     link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
//     image: introOSHConSys2023,
//     title: "Intro to OSH and Connected Systems (2023)",
//     author: 'Mike Botts',
//     desc: "Introduction to OSH.",
//   },
//   {
//     link: "https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1",
//     image: sweIntro2010,
//     title: "Sensor Web Enablement Introduction (2010)",
//     author: 'Mike Botts',
//     desc: "Provides an introduction to the purpose, design goals, and application of the OGC SWE open standards.",
//   },
//   {
//     link: "https://docs.google.com/presentation/d/1EwYn0vbcI0AQUJcZu70ZIBvvsRpNT1Idpe_xwMr07HU/edit#slide=id.p1",
//     image: sensorMl2009,
//     title: "SensorML and On-Demand Processing (2009)",
//     author: 'Mike Botts',
//     desc: "Discussion on the application of SensorML for supporting on-demand processing in clients, web services, on sensor systems, or at compute centers.",
//   },
//   {
//     link: "https://docs.google.com/presentation/d/1RuA4vjobMP2L5qkWu3OgZPpLdcvNJTYjYeKMdxf5lQQ/edit#slide=id.p1",
//     image: sweSemantics,
//     title: "SWE and Semantics (2008)",
//     author: 'Mike Botts',
//     desc: "Provides an overview of the importance of semantics and ontologies to the SWE standards and their application.",
//   }
// ];
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-9 col-center">
        <span class="text-muted">Showcase</span>
        <h2 class="display-5 fw-bold mb-3">Our Presentations</h2>
        <p>Slides, videos, and demos are available for you to download and use. Please reference appropriately.</p>

        <div id="presentationCarousel" class="carousel slide">

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#presentationCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-lavel="slide 1"></button>
          </div>

          <div class="carousel-inner">

            <div class="carousel-item active">
              <a href="https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1" target="_blank">
                <img :src="processing2023" class="d-block w-100" alt="SensorML and Processing (2024)"/>
              </a>
            </div>

            <div class="carousel-item">
              <a href="https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1" target="_blank">
                <img :src="introOSHConSys2023" class="d-block w-100" alt="Intro to OSH and Connected Systems (2023)"/>
              </a>
            </div>

            <div class="carousel-item">
              <a href="https://docs.google.com/presentation/d/1La3bzu2t4zcVzyXDdafja8KiDsG-zgWnw6rDs-DcYwk/edit#slide=id.p1" target="_blank">
                <img :src="sweIntro2010" class="d-block w-100" alt="Sensor Web Enablement Introduction (2010)"/>
              </a>
            </div>

            <div class="carousel-item">
              <a href="https://docs.google.com/presentation/d/1EwYn0vbcI0AQUJcZu70ZIBvvsRpNT1Idpe_xwMr07HU/edit#slide=id.p1" target="_blank">
                <img :src="sensorMl2009" class="d-block w-100" alt="SensorML and On-Demand Processing (2009)"/>
              </a>
            </div>

            <div class="carousel-item">
              <a href="https://docs.google.com/presentation/d/1RuA4vjobMP2L5qkWu3OgZPpLdcvNJTYjYeKMdxf5lQQ/edit#slide=id.p1" target="_blank">
                <img :src="sweSemantics" class="d-block w-100" alt="SWE and Semantics (2008)"/>
              </a>
            </div>

          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#presentationCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#presentationCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-center {
  margin: 0 auto;
  float: none !important;
}
.carousel {
  margin: 30px auto 50px;
  padding: 0 68px;
}
.carousel .carousel-item {
  text-align: center;
  width: 100%;
}

.carousel .carousel-item {
  background: #d39f44;
  padding: 7px;
  box-shadow: 0 6px 20px -6px rgba(0,0,0,0.4);
}
.carousel .carousel-item {
  margin: 0 auto;
}
.carousel .carousel-control {
  width: 68px;
  background: none;
}
.carousel .carousel-control i {
  font-size: 28px;
  position: absolute;
  top: 50%;
  display: inline-block;
  margin-top: -15px;
  z-index: 5;
  left: 0;
  right: 0;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
</style>

