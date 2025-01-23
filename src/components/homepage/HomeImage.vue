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

          <h2 class="mb-2">
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
.image-container {
  position: relative;
  display: inline-block
}
.header-img {
  opacity: 50%;
  max-height: 550px;
  width: 100%;
  object-fit: cover;
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
.white-btn {
  font-size: 1rem;
}
.white-txt{
  color: #faf6ed;
  line-height: 1.2;
  font-size: 1.3rem;
  text-decoration: none;
}
.white-txt:hover {
  text-decoration: underline;
}


@media only screen and (min-width: 1200px) {
  .text-overlay span {
    font-size: 4.5rem;
  }

  .text-overlay p {
    font-size: 1.4rem;
  }

  .white-txt {
    font-size: 1.4rem;
  }

  .white-btn {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .text-overlay span {
    font-size: 2.75rem;
  }

  .text-overlay p {
    font-size: 1.3rem;
  }

  .white-txt {
    font-size: 1.25rem;
  }

  .white-btn {
    font-size: 1.1rem;
  }
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  .text-overlay span {
    font-size: 2.2rem;
  }

  .text-overlay p {
    font-size: 1.1rem;
  }

  .white-txt {
    font-size: 1.2rem;
  }

  .white-btn {
    font-size: 1rem;
  }
}

@media only screen and (max-width: 480px) {

  .text-overlay span {
    margin: 0 auto;
    font-size: 1.25rem;
  }

  .text-overlay p {
    font-size: 0.9rem;
  }

  .white-txt {
    font-size: 1rem;
  }

  .white-btn {
    font-size: 0.85rem;
    padding: 8px 12px;
  }
}




</style>

<!--/* Mobile First / Smaller to Larger */-->

<!--/* X-Small devices (portrait phones, less than 576px) */-->

<!--/* Small devices (landscape phones, 576px and up) */-->
<!--@media (min-width: 576px) {-->

<!--}-->

<!--/* Medium devices (tablets, 768px and up) */-->
<!--@media (min-width: 768px) {-->

<!--}-->

<!--/* Large devices (desktops, 992px and up) */-->
<!--@media (min-width: 992px) {-->

<!--}-->

<!--/* X-Large devices (large desktops, 1200px and up) */-->
<!--@media (min-width: 1200px) {-->

<!--}-->

<!--/* XX-Large devices (larger desktops, 1400px and up) */-->
<!--@media (min-width: 1400px) {-->

<!--}-->


<!--/* Desktop First / Larger to Smaller */-->

<!--/* X-Small devices (portrait phones, less than 576px) */-->
<!--@media (max-width: 575.98px) {-->

<!--}-->

<!--/* Small devices (landscape phones, less than 768px) */-->
<!--@media (max-width: 767.98px) {-->

<!--}-->

<!--/* Medium devices (tablets, less than 992px) */-->
<!--@media (max-width: 991.98px) {-->

<!--}-->

<!--/* Large devices (desktops, less than 1200px) */-->
<!--@media (max-width: 1199.98px) {-->

<!--}-->

<!--/* X-Large devices (large desktops, less than 1400px) */-->
<!--@media (max-width: 1399.98px) {-->

<!--}-->