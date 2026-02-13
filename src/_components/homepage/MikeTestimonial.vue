<script setup>
import mike from "@/assets/headshots/img.png";
</script>

<template>

    <div class="background-wrapper">
      <div class="container-fluid">
        <div class="test-content-wrapper">
          <img :src="mike" alt="Mike" class="img-fluid headshot" loading="lazy">
          <div class="text-content">
            <p class="mb-4 main-text">
              Dr. Botts is the creator and chief architect of Sensor Model Language (SensorML), an Open Geospatial Consortium (OGC) technical standard for describing the measurement and processing of observations from any sensor system. He is the chair of the OGC Connected Systems Specification Working Group and has been instrumental in the development and implementation of the OGC SWE architecture.
            </p>
            <span>Dr. Mike Botts, Founder & CEO</span>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped>
.headshot {
  height: 400px;
  max-width: 100%;
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
  gap: 2rem;
}

.text-content {
  text-align: left;
  width: 60%;
  color: #fff;
}

p {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-family: var(--font-primary);
}
@media (max-width: 1076px) {
  p {
    font-size: 14.5pt;
  }
}
@media (max-width: 768px) {
  .test-content-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .text-content {
    width: 90%;
    font-size: 1rem;
  }
  .headshot {
    height: auto;
    width: 80%;
  }
  p {
    font-size: 14pt;
  }
}

@media (max-width: 430px) {
  .text-content {
    width: 100%;
  }
  .headshot {
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
}
</style>
