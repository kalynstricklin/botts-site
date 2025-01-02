<script setup>
const positions = [
  { position: "Full Stack Developer" },
  { position: "Mobile Application Developer" },
  { position: "Javascript Frontend Developer - UI/UX Specialist" },
  { position: "Sensor Integration Engineer" },
  { position: "Metaverse Simulation Developer" },
  { position: "Cloud Native Engineer" },
  { position: "Field System Engineer" },
  { position: "Edge Deployment Engineer" },
  { position: "Emerging Technology Specialist" },
];
</script>

<template>
  <div>
    <div class="row mb-3">
      <div class="text-center justify-content-center align-content-center">
        <h2>Opportunities</h2>
        <p>
          fdjkgnkewgnkedvnasdlkfmwel;kfnasd sdafnlkasdnfklandflkansdlkcn
        </p>
      </div>
    </div>

    <div class="container-fluid py-2">
      <div class="row gap-3 justify-content-center">
        <div class="col-lg-3 rounded shadow-sm doc-card" v-for="(item, index) in positions" :key="index">
          <div class="card-content">
            <h3 class="doc-title">{{ item.position }}</h3>
            <b-button
                href="/job"
                target="_blank"
                class="gen-btn"
            >
              Apply Here
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #fff;
  font-weight: bold;
}
.doc-card {
  background-image: linear-gradient(to right, rgba(223, 193, 140, 0.73), #d39f44);
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.doc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.doc-title {
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
}
.card-content {

  justify-content: center;
  align-items: center;
}
</style>
