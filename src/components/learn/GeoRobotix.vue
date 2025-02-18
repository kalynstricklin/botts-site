<script setup>
import georobotixImg from "@/assets/logos/img.png"
</script>

<template>
  <div class="container-fluid">


    <div class="row align-items-center justify-content-center align-content-end gap-2">

      <div class="card orange-card p-4 mt-3">
        <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
          <a href="https://georobotix.com/" class="text-decoration-none" target="_blank">
            <div class="tab-content-wrapper">
              <img :src="georobotixImg" alt="GeoRobotix Logo" class="img-fluid tab-image" loading="lazy">
              <div class="text-content">
                <p>
                  The Botts-Inc team team is not only a world class R&D services team, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.
                </p>
                <p>
                  Using an “open core” model akin to Cesium and Elastic, GeoRobotix offers a full slate of products, from the Cloud to the Edge, built upon the open source-, open standards-based, OSH.  Each product has OSH at its core, packaged with a commercially-supported suite of components that enable security, scalability, high availability, manageability, & extensibility into particular fast changing operational environments.
                </p>
              </div>
            </div>

          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.tab-image {
  max-width: 40%;
  height: auto;
}

.text-content {
  text-align: left;
  width: 55%;
  color: #fff;
}


p {
  color: white;
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

}
</style>