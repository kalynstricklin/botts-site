<script setup>
import headerImage from "@/assets/generic-cover-12-web.jpg";
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="position-relative">
        <img
            :src="headerImage"
            alt="Header"
            class="img rounded header-img"
            style="max-height: 550px; width: 100%; object-fit: cover;"
        />
        <div class="text-overlay">
          <h2>Designing and Deploying Open Standards for Sensor Systems</h2>
          <p>Across national security, public sector, private sector, and scientific communities</p>

          <div class="mt-5">

            <b-button href="/company" target="_self" class="gen-btn">
              About Us
            </b-button>


          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped>
.header-img{
  opacity: 60%;
}


.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

}

.text-overlay h2,
.text-overlay p {

  font-size:  calc(1.5rem + 1vw);
  margin: 0;
}

.text-overlay p {
  font-size: calc(1rem + 0.5vw);
  margin-top: 10px;
}


@media (max-width: 768px) {
  .text-overlay h2 {
    font-size: calc(1.2rem + 1vw);
  }
  .text-overlay p {
    font-size: calc(0.9rem + 0.5vw);
  }
}
</style>