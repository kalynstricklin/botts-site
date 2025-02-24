<script setup>
import image from "@/assets/arch.webp"
</script>

<template>
  <div class="container-fluid">
      <div class="orange-card p-4">
        <div class="row">
          <div class="col-12 col-lg-6 col-md-12 col-sm-12">
            <img :src="image" class="img-fluid"/>
          </div>


          <div class="col-12 col-lg-6 col-md-12 col-sm-12">
            <div class="text-content justify-content-center align-items-center mt-5">
              <h2 class="card-title text-white">GeoRobotix</h2>

              <p>
                The Botts-Inc team team is not only a world class R&D services team, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.
              </p>
              <!--                <p>-->
              <!--                  Using an “open core” model akin to Cesium and Elastic, GeoRobotix offers a full slate of products, from the Cloud to the Edge, built upon the open source-, open standards-based, OSH.  Each product has OSH at its core, packaged with a commercially-supported suite of components that enable security, scalability, high availability, manageability, & extensibility into particular fast changing operational environments.-->
              <!--                </p>-->

              <div class="d-flex gap-2 mt-3">
                <a href="https://georobotix.com/" class="btn white-button me-2" target="_blank">Learn More</a>
              </div>

            </div>
          </div>
        </div>


        </div>


    </div>
</template>

<style scoped>

a{
  font-family: var(--font-primary);
  font-size: 1.25rem;
}
.text-content {
  text-align: left;
  width: 100%;
  color: #fff;
}

p {
  color: white;
  font-size: 1.25rem;
  text-align: left;
}

.orange-card {
  background-color: rgba(112, 112, 112, 0.2);
  border-color: rgba(112, 112, 112, 0.2);
  opacity: 100%;
}

.orange-card:hover {
  transform: translateY(-5px);
}


@media (max-width: 768px) {

}

@media screen and (max-width: 480px) {
  .text-content{
    justify-content: center;
    align-items: center;
  }
  .img-fluid{
    align-items: center;
    justify-content: center;
  }

}
</style>