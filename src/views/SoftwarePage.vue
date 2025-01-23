<script setup>
import SoftwareScroller from "@/components/software/SoftwareScroller.vue";
</script>



<template>
  <div class="container-fluid py-2 mb-2">
    <div class="row mb-3">
      <div class="text-center justify-content-center align-content-center text-white">
        <h2>Discover our Software</h2>
      </div>
    </div>
    <section id="software">
      <SoftwareScroller/>
    </section>

<!--      <div class="row py-3">-->
<!--        <h5 class="gen-orange-title">OpenSensorHub</h5>-->
<!--      </div>-->


<!--      <div id="testScroller" class="carousel slide justify-content-center align-content-center" data-bs-ride="carousel" data-bs-interval="8000" data-bs-pause="hover">-->
<!--        <div class="carousel-indicators mb-5">-->
<!--          <button type="button" data-bs-target="#testScroller" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>-->
<!--          <button type="button" data-bs-target="#testScroller" data-bs-slide-to="1" aria-label="Slide 2"></button>-->
<!--        </div>-->


<!--        <div class="carousel-inner mb-5">-->
<!--          <div class="carousel-item active justify-content-center align-content-center">-->
<!--            <div class="row">-->
<!--              <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--                <div class="card">-->

<!--                  <div class="card-body d-flex flex-column">-->

<!--                    <h4 class="card-title text-center">OSH Web Client Toolkit-->
<!--                      <a href="https://github.com/opensensorhub/osh-js" target="_blank"  class="justify-content-end align-items-end align-content-end text-end">-->
<!--                        <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--                      </a>-->
<!--                    </h4>-->
<!--                    <hr>-->
<!--                    <p class="card-text mb-4">-->
<!--                      An open-source, Java-based, interactive dynamic 4D environment for visualizing and analyzing data from a variety of disparate sources defined the era, demonstrating the Art of the Possible, using OGC sensor standards for the discovery, access, processing, visualization, and tasking of sensors of all kinds.-->
<!--                    </p>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--                <div class="card">-->

<!--                  <div class="card-body d-flex flex-column">-->

<!--                    <h4 class="gen-white-title text-center">OSH Android Application-->
<!--                      <a href="https://github.com/opensensorhub/osh-android" target="_blank" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                        <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--                      </a>-->
<!--                    </h4>-->
<!--                    <hr>-->

<!--                    <<p class="card-text mb-4">-->
<!--                      An application that deploys an entire OSH node on your Android device, with native integration that exposes all sensors within your Android device, or tethered to your device, via OGC sensor services. It is composed of a Service component that wraps the OSH engine and an demo application that can be configured to send data from one or more phone sensors to the SOS server of a remote OSH node.-->
<!--                    </p>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--                <div class="card">-->

<!--                  <div class="card-body d-flex flex-column">-->
<!--                    <h4 class="gen-white-title text-center">SensorML Process Engine-->
<!--                      <a href="#" target="_blank" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                        <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--                      </a>-->
<!--                    </h4>-->
<!--                    <hr>-->

<!--                    <p class="card-text mb-4">-->
<!--                      SensorML provides a means of describing processes and process chains that can be executed on-demand using one or more execution engines. This engine can be configured to operate within a given OSH node in the field, or to process across a distributed across a network of OSH nodes to ensure that computationally intensive processes are executed in mission critical applications.-->
<!--                    </p>-->
<!--                  </div>-->

<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="carousel-item justify-content-center align-content-center">-->
<!--            <div class="row">-->
<!--              <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--                <div class="card">-->

<!--                  <div class="card-body d-flex flex-column">-->

<!--                    <h4 class="gen-white-title text-center">SensorML Web Tools-->
<!--                      <a href="#" target="_blank" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                        <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--                      </a>-->
<!--                    </h4>-->
<!--                    <hr>-->

<!--                    <p class="card-text mb-4">-->
<!--                      The Botts-Inc team has developed and maintain a variety of open source web-based tools in support of SensorML. These include a SensorML document validator, schema browser, and SensorML Tableview (“PrettyView”) for human-readable presentation of a SensorML document, and a SensorML editor that removes the need to edit XML, providing a more human-friendly means of integrating your sensors.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--                <div class="card">-->

<!--                  <div class="card-body d-flex flex-column">-->

<!--                    <h4 class="gen-white-title text-center">GeoRobotix-->
<!--                      <a href="https://georobotix.com/" target="_blank" class="justify-content-end align-items-end align-content-end text-end">-->
<!--                        <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--                      </a>-->
<!--                    </h4>-->
<!--                    <hr>-->

<!--                    <p class="card-text mb-4">-->
<!--                      GeoRobotix, Inc is a commercial SaaS/On Prem company that provides subscriptions/licenses to the commercially-supported versions of the OSH open source API for high performance, high availability mission/business environments.  Both companies have been bootstrapped, are privately held, and no fundraising has been required.-->
<!--                    </p>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->




  </div>

</template>

<style scoped>

span{
  text-align: left;
  font-weight: bold;
  font-size: 2rem;
}
.carousel {
  max-height: 600px;
  width: auto;
}


.carousel-inner .carousel-item img {
  width: 100%;
  max-width: 50px;
  height: auto;
}

.carousel-indicators button {
  background-color: #424242;
  margin-top: 60px;
}

.carousel-indicators .active {
  background-color: #d39f44;
}


.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
}

hr{
  color: #fff;
}

.card-text {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
}

.card a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  margin-top: auto;
  text-align: end;
}

.card a:hover {
  color: #f4e9d4;
}

p{
  color: white;
}
@media only screen and (max-width: 481px) {
  h2{
    font-size: 1.5rem;
  }
  .card-text{
    font-size: 0.9rem;
  }
}

</style>
