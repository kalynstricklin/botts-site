<script setup>


import mike from "@/assets/headshots/mike.png";
</script>

<template>
  <section class="bsb-timeline-1">
    <div class="background-wrapper">
      <div class="container-fluid">
        <div class="test-content-wrapper">
          <img :src="mike" alt="Mike image" class="img-fluid headshot" loading="lazy">
          <div class="text-content">
            <p>
<!--              "The Botts-Inc team has........"-->
              Dr. Botts is the creator and chief architect of Sensor Model Language (SensorML), an Open Geospatial Consortium (OGC) technical standard for describing the measurement and processing of observations from any sensor system. He is the chair of the OGC Connected Systems Specification Working Group and has been instrumental in the development and implementation of the OGC SWE architecture.
            </p>
            <span>Dr. Mike Botts, Founder & CEO</span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

.headshot {
  height: 320px;
  max-width: 80%;
  filter: grayscale(50%);
  transition: all 0.5s ease;
}

.background-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 4rem 0;
  z-index: 1;
  height: auto;
}

.background-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/grid-lines.png');
  background-size: contain;
  background-repeat: repeat-x;
  background-position: center;
  opacity: 0.65;
  z-index: -1;
}

.test-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
}


.text-content {
  text-align: left;
  width: 55%;
  color: #fff;
}

p {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

</style>