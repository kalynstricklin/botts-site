<script setup>

// import oshlogo from "@/assets/OSH-Logo-NoText.png";

const documentation = [
  {title: 'OGC API - Connected Systems', link: 'https://github.com/opengeospatial/ogcapi-connected-systems'},
  {title: 'Sensor Web Enablement', link: 'https://github.com/opengeospatial/ogcapi-connected-systems'},

];

</script>

<template>
<div>
  <section class="text-center p-2">
    <h1>Documentation</h1>
  </section>

  <div class="container-fluid py-2">
    <div class="row gap-3 justify-content-center">

      <div class="col-lg-3 p-4 rounded shadow-sm doc-card" v-for="(item, index) in documentation" :key="index">

            <h5 class="doc-title">{{item.title}}</h5>
<!--            <p>-->
<!--              The OGC API - Connected Systems API enables seamless integration and interaction between various geospatial systems and datasets by providing standardized, interoperable access to connected data services and resources.-->
<!--            </p>-->

<!--            <div class="col-md-8">-->
<!--              <img-->
<!--                  :src="oshlogo"-->
<!--                  class="img-fluid rounded"-->
<!--                  alt=""-->
<!--              />-->
<!--            </div>-->
            <b-button
                :href= "item.link"
                target="_blank"
                class="learn-button"
            >
              Learn More
            </b-button>

      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

h1{
  color: #333;
  font-weight: bold;
}
.doc-card{
  background-color: #f8f9fa;
  border-color: #333;
  transition: transform 0.2s, box-shadown 0.2s;
}
.doc-card:hover{
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.doc-title{
  margin-bottom: 15px;
  font-weight: bold;
}
.learn-button{
  color: #fff;
  background-color: #d7c72d;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}
.learn-button:hover {
  background-color: #f1d914;
}
</style>