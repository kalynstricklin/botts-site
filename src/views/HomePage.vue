<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
import ServicesCard from "@/components/homepage/ServicesCard.vue";
</script>

<template>
  <div>
    <section id="image" class="py-2">
      <HomeImage/>
    </section>

    <div class="card home-card">
      <section id="service-cards" class="py-2">
        <ServicesCard/>
      </section>

<!--      <section id="solutions" class="py-5">-->
<!--        <OurSolutions/>-->
<!--      </section>-->


    </div>
  </div>
</template>

<style scoped>
.home-card{
  border-color: #faf6ed;
  background-color: #faf6ed;
  padding: 15px;
}



</style>
<!--.container-fluid.custom-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
}

.card-wrapper {
  position: relative;
  width: 400px;
  height: 350px;
}

.card {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: transparent;
}

.card-img-top {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.overlay-card {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -25%);
  width: 85%;
  background: white;
  /**box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);**/
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}

.overlay-text h4 {
  margin: 0;
  font-size: 1.2em;
}

.overlay-text p {
  margin: 5px 0 0;
  font-size: 1em;
  color: gray;
}-->

<!--    <section class="py-2">-->
<!--      <ImageComp/>-->
<!--    </section>-->


<!--<div class="container-fluid custom-container">-->
<!--&lt;!&ndash;      <div class="card">&ndash;&gt;-->
<!--<div class="card-wrapper">-->
<!--  <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>-->
<!--  <div class="overlay-card">-->
<!--    <div class="overlay-text">-->
<!--      <h4>Heading</h4>-->
<!--      <p>Mike Botts</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->

<!--&lt;!&ndash;      <div class="card">&ndash;&gt;-->
<!--<div class="card-wrapper">-->
<!--  <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>-->
<!--  <div class="overlay-card">-->
<!--    <div class="overlay-text">-->
<!--      <h4>Heading</h4>-->
<!--      <p>Mike Botts</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->

<!--&lt;!&ndash;      <div class="card">&ndash;&gt;-->
<!--<div class="card-wrapper">-->
<!--  <img :src="diagramImage" alt="Architecture Diagram" class="card-img-top"/>-->
<!--  <div class="overlay-card">-->
<!--    <div class="overlay-text">-->
<!--      <h4>Heading</h4>-->
<!--      <p>Mike Botts</p>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--</div>-->



<!--    <div>-->
<!--      <section class="py-3">-->
<!--        <div class="container">-->
<!--          <div class="row justify-content-center">-->

<!--            <div class="col-lg-12 p-3 doc-card">-->

<!--              <h5 class="doc-title text-center">-->
<!--                Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementa"Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementation across many mission critical domains."tion across many mission critical domains."-->
<!--                Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementa"Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementation across many mission critical domains."tion across many mission critical domains."-->
<!--              </h5>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
<!--    </div>-->




<!--      <section class="py-2">-->
<!--        <div class="">-->
<!--          <TestimonialComponents/>-->
<!--        </div>-->
<!--      </section>-->


<!--        <div class="card image-card">-->
<!--          <div class="row">-->
<!--            <div class="col-sm-5">-->
<!--              <img class="card-img-top" :src="image">-->
<!--            </div>-->
<!--            <div class="col-sm-7">-->
<!--              <div class="card-body">-->
<!--                <h4>Visit our blog to know more about OpenSensorHub and stay connected to the latest enhancements</h4>-->
<!--                <p>heyhfudnfdsk</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--    </div>-->

<!--    <section>-->
<!--      <div class="container-fluid image-container">-->
<!--        <div class="card image-card">-->
<!--          <div class="row">-->
<!--            <div class="col-sm-5">-->
<!--              <img class="card-img-top" :src="image">-->
<!--            </div>-->
<!--            <div class="col-sm-7">-->
<!--              <div class="card-body">-->
<!--                <p>heyhfudnfdsk</p>-->
<!--                <p>heyhfudnfdsk</p>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="py-2">-->
<!--      <div class="">-->
<!--        <TestimonialComponents/>-->
<!--      </div>-->
<!--    </section>-->

<!--    <section class="py-2">-->
<!--      <div class="container-fluid">-->
<!--        <div class="card img-footer-card">-->

<!--        </div>-->
<!--      </div>-->
<!--    </section>-->