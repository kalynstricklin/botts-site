<script setup>
</script>

<template>
  <div class="container-fluid">


      <div class="card orange-card p-4 mt-3">
        <div class="row mt-5">
          <div class="text-start">
            <h2 class="text-white">GeoRobotix</h2>
          </div>
        </div>
        <div class="tab-pane" id="tab1" aria-labelledby="tab1-tab">
            <div class="tab-content-wrapper">
              <div class="text-content">

                <p>
                  The Botts-Inc team team is not only a world class R&D services team, but has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub, with the launch of GeoRobotix.  GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.
                </p>
                <p>
                  Using an “open core” model akin to Cesium and Elastic, GeoRobotix offers a full slate of products, from the Cloud to the Edge, built upon the open source-, open standards-based, OSH.  Each product has OSH at its core, packaged with a commercially-supported suite of components that enable security, scalability, high availability, manageability, & extensibility into particular fast changing operational environments.
                </p>

                <div class="d-flex gap-2 mt-5">
                  <a href="https://georobotix.com/" class="btn white-button me-2" target="_blank">Learn More</a>
                </div>

              </div>
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

}
</style>