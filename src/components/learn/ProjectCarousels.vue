<script setup>
import headInClouds from "@/assets/headintheclouds.jpg";
import pexels from "@/assets/pexels-photo.jpg";
</script>

<template>
  <div class="container">

    <div id="testScroller" class="carousel slide justify-content-center align-content-center" data-bs-ride="carousel" data-bs-interval="8000" data-bs-pause="hover">

      <div class="carousel-indicators mt-5">
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div class="carousel-inner mb-5">
        <div class="carousel-item active justify-content-center align-content-center">
          <div class="row g-3 justify-content-center">
            <div class="col-12 col-lg-6 position-relative">

                <img :src="headInClouds" class="img rounded img-overlay"/>
                <div class="text-overlay">
                  <h4 class="">Fusion and visualization of disparate sensor data</h4>
                  <p>
                    We engage in visualization and analysis of disparate sensor data within decision support tools. It provides users with interactive graphical representation of data, as well as on-demand data processing and client-server interaction.
                  </p>
                  <b-button class="btn btn-outline-light learn-more-btn">Contact Us</b-button>
                </div>

            </div>

            <div class="col-12 col-lg-6 position-relative">
              <img :src="pexels" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Geolocation of data from a wide variety of remote sensors</h4>
                <p>
                  Beginning first with satellite-borne sensors and then moving to airborne and ground-based sensors, the team has 15+ years of experience in the precision geolocation of remotely sensed data.
                </p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>

            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row g-3 justify-content-center">
            <div class="col-12 col-lg-6 position-relative">
              <img :src="headInClouds" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Application of SensorWebs to “detect and react”</h4>
                <p>The importance of sensors is that they can provide actionable information. Additionally, information derived one one set of sensors calls for the tasking of other sensors to verify or gain additional actionable information.</p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>
            </div>

            <div class="col-12 col-lg-6 position-relative">
              <img :src="pexels" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Processing and fusion of video from multiple sources</h4>
                <p>While promoting and demonstrating the need to provide adequate sensor description and adequate ancillary data to support processing and fusion of these video observations with data from other sources.</p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row g-3 justify-content-center">
            <div class="col-12 col-lg-6 position-relative">

              <img :src="headInClouds" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Enabling airborne resources in a SensorWeb environment</h4>
                <p>From airborne scanners, imagers, and video cameras, the team has been involved in R&D surrounding airborne assets, and exploring concepts for on-board web services and processing using SWE standards.</p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>

            </div>

            <div class="col-12 col-lg-6 position-relative">
              <img :src="pexels" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Integration of UxS and robotics within SensorWeb environment</h4>
                <p>Thinking beyond sensors, we have demonstrated how to integrate robotic platforms managing not only there heterogeneous observation streams, but also the ability task their control streams with all manner of commands.</p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>

            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row g-3 justify-content-center">
            <div class="col-12 col-lg-6 position-relative">
              <img :src="headInClouds" class="img rounded img-overlay"/>
              <div class="text-overlay">
                <h4 class="">Participation in military intelligence testbeds</h4>
                <p>Over many years, the Botts-Inc team has participated in many national security related Interoperability testbeds which provide a testing ground for new sensors and sensor-oriented information technology.</p>
                <b-button class="btn learn-more-btn">Contact Us</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#testScroller" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testScroller" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
  width: 2rem;
  height: 2rem;
}

.carousel-indicators button {
  background-color: #424242;
}

.carousel-indicators .active {
  background-color: #d39f44;
}


@media (max-width: 768px) {
  .carousel {
    max-height: 1200px;
    margin: 0 auto;
  }
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
  padding: 10px;
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

.text-overlay h4 {
  font-size: 2rem;
}

.text-overlay p {
  font-size: 1rem;
}

@media (max-width: 575px) {
  .text-overlay h4{
    font-size: 1.75rem;
  }

  .text-overlay p {
    font-size: 0.75rem;
  }


  .learn-more-btn {
    padding: 3px 8px;
    font-size: 1rem;
    background-color: transparent;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .text-overlay h4{
    font-size: 1.25rem;
  }

  .text-overlay p {
    font-size: 0.75rem;
  }


  .learn-more-btn {
    padding: 3px 8px;
    font-size: 1rem;
    background-color: transparent;
  }
}

/**
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


**/
</style>