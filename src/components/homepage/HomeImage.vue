<script setup>
import headerImage from "@/assets/generic-cover-12-web.jpg";
</script>

<template>
  <div>
    <div class="container-fluid image-container">
      <div class="position-relative">
        <img
            :src="headerImage"
            alt="Header"
            class="img rounded header-img"
        />
        <div class="text-overlay">

          <h2 class="font-heading mb-2">
            <span>Designing and Deploying Open Standards</span>
            <span class="text-uppercase" style="display: inline-block">for Sensor Systems</span>

          </h2>

          <p>Across national security, public sector, private sector, and scientific communities</p>

          <div class="mt-3">
            <div class="row d-flex justify-content-start align-items-center">
              <div class="col-auto">
                <b-button class="white-btn">
                  Contact Us
                </b-button>
              </div>
              <div class="col-auto ms-3">
                <router-link class="text-decoration-underline white-txt" to="/projects">
                  Explore Projects
                </router-link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.white-txt{
  color: #faf6ed;
  line-height: 1.2vh;
  font-size: 1.6vh;
}

.header-img {
  opacity: 50%;
  max-height: 550px;
  width: 100%;
  object-fit: cover;
}

.image-container {
  position: relative;
  display: inline-block
}

.white-btn {
  background-color: transparent;
  border-color: #faf6ed;
  color: #faf6ed;
  padding: 10px 25px;
}

.white-btn:hover {
  background-color: #faf6ed;
  border-color: #faf6ed;
  color: #000;
  padding: 10px 25px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: #fff;
  width: 80%;
  padding: 5px;
}

.text-overlay span {
  margin: 0 auto;
  font-size: 4.5rem;
  text-align: left;
  text-transform: uppercase;
}

.text-overlay p {
  font-size: 1.4rem;
  margin-top: 10px;
  text-align: left;
}

@media (min-width: 768px) and (max-width: 991px) {
  .text-overlay span {
    margin: 0;
    font-size: 2.5rem;
  }

  .text-overlay p {
    font-size: 1rem;
    margin-top: 10px;
  }
  .white-btn{
    padding: 8px 12px;
  }
}

@media (min-width: 576px) and (max-width: 767px){
  .text-overlay span {
    margin: 0;
    font-size: 1.75rem;
  }

  .text-overlay p {
    font-size: 1rem;
    margin-top: 10px;
  }
  .white-btn {
    padding: 6px 10px;
  }

}

@media (max-width: 575px) {
  .text-overlay span {
    margin: 0px;
    font-size: 1.25rem;
  }

  .text-overlay p {
    font-size: 10pt;
    margin-top: 10px;
  }
  .white-btn {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
}
</style>


<!--          style="display: inline;"-->
<!--          <h2 class="gen-sm-title text-uppercase" style="color: #d39f44; display: inline;">Open Standards</h2>-->