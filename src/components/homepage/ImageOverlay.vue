<script setup>
import headInClouds from "@/assets/headintheclouds.jpg"
import pexels from "@/assets/pexels-photo.jpg"
</script>

<template>
  <div class="container-fluid">

    <div class="row g-3 justify-content-center">
      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="headInClouds" class="img rounded img-overlay"/>
          <div class="text-overlay">
            <span class="text-uppercase mb-2">small text</span>
            <h1 class="">Fusion and visualization of disparate sensor data</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn btn-outline-light learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="pexels" class="img rounded img-overlay"/>

          <div class="text-overlay">
            <span class="text-uppercase">for companies</span>

            <h1 class="">Geolocation of data from a wide variety of remote sensors</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>
    </div>


    <div class="row g-3 justify-content-center">
      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="headInClouds" class="img rounded img-overlay"/>
          <div class="text-overlay">
            <span class="text-uppercase mb-2">small text</span>
            <h1 class="">Application of SensorWebs to “detect and react”</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn btn-outline-light learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="pexels" class="img rounded img-overlay"/>

          <div class="text-overlay">
            <span class="text-uppercase">for companies</span>

            <h1 class="">Processing and fusion of video from multiple sources</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>
    </div>


    <div class="row g-3 justify-content-center">
      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="headInClouds" class="img rounded img-overlay"/>
          <div class="text-overlay">
            <span class="text-uppercase mb-2">small text</span>
            <h1 class="">Enabling airborne resources in a SensorWeb environment</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn btn-outline-light learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="pexels" class="img rounded img-overlay"/>

          <div class="text-overlay">
            <span class="text-uppercase">for companies</span>

            <h1 class="">Integration of UxS and robotics platforms within a SensorWeb environment</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-3 justify-content-center">
      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="headInClouds" class="img rounded img-overlay"/>
          <div class="text-overlay">
            <span class="text-uppercase mb-2">small text</span>
            <h1 class="">Participation in military/intelligence testbeds</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn btn-outline-light learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-5 position-relative">
        <div class="card black-card">
          <img :src="pexels" class="img rounded img-overlay"/>

          <div class="text-overlay">
            <span class="text-uppercase">for companies</span>

            <h1 class="">Integration of UxS and robotics platforms within a SensorWeb environment</h1>
            <p>Across national security, public sector, private sector, and scientific communities</p>
            <b-button class="btn learn-more-btn">Learn More</b-button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.black-card {
  background-color: black;
  max-height: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.black-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.img-overlay {
  opacity: 45%;
  width: 100%;
  object-fit: cover;
  max-height: 500px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #faf6ed;
  width: 80%;
  padding: 5px;
}

.learn-more-btn {
  background-color: transparent;
  border-color: #faf6ed;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #faf6ed;
  color: #000;
}

.text-overlay h1 {
  margin: 0;
  font-size: 3.5rem;
}

.text-overlay span {
  font-size: 1.2rem;
  margin-bottom: 20vh;
}

.text-overlay p {
  font-size: 1.2rem;
  margin-top: 10px;
}

@media (min-width: 768px) and (max-width: 991px) {
  .text-overlay h1 {
    margin: 0;
    font-size: 2rem;
  }

  .text-overlay span {
    margin-bottom: 20px;
    font-size: 0.8rem;
  }

  .text-overlay p {
    font-size: 1rem;
    margin-top: 10px;
  }

  .learn-more-btn {
    padding: 8px 16px;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .text-overlay h1 {
    margin: 0;
    font-size: 1.75rem;
  }

  .text-overlay p {
    font-size: 0.8rem;
    margin-top: 10px;
  }
  .text-overlay span {
    font-size: 0.8rem;

  }

  .learn-more-btn {
    padding: 5px 10px;
  }
}

@media (max-width: 575px) {
  .text-overlay h1 {
    margin: 0px;
    font-size: 1.75rem;
  }

  .text-overlay p {
    font-size: 0.8rem;
    margin-top: 10px;
  }

  .text-overlay span {
    font-size: 0.8rem;
  }

  .learn-more-btn {
    padding: 3px 9px;
    background-color: transparent;
  }
}
</style>
