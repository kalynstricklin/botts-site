<script setup>
const positions = [
  { position: "Full Stack Developer", link: "" },
  { position: "Mobile Application Developer" },
  { position: "Javascript Frontend Developer - UI/UX Specialist" },
  { position: "Sensor Integration Engineer" },
  { position: "Metaverse Simulation Developer" },
  { position: "Cloud Native Engineer" },
  { position: "Field System Engineer" },
  { position: "Edge Deployment Engineer" },
  { position: "Emerging Technology Specialist" },
  { position: "Software Developer Intern" },

];
</script>

<template>
  <div class="container-fluid py-2">
    <div class="row gap-3 justify-content-center">
      <div class="col-12 col-sm-12 col-md-8 col-lg-5 rounded shadow-sm doc-card" v-for="(item, index) in positions" :key="index">
        <div class="card-content">
          <div class="row g-2">

            <div class="col-12 col-md-8">
              <h5 class="doc-title">{{ item.position }}</h5>
              <span class="text-white">
                <i class="bi bi-geo-alt"></i> Remote
              </span>
<!--              <span class="text-white">-->
<!--                <i class="bi bi-suitcase-lg"></i> Full Time/ PartTime-->
<!--              </span>-->
            </div>

            <div class="col-12 col-md-4 col-lg-3 align-content-center">
              <b-button
                  href="/job"
                  target="_blank"
                  class="white-btn"
              >
                View & Apply
              </b-button>
            </div>

          </div>

        </div>
      </div>
    </div>



<!--send resume-->
    <div class="row gap-2 justify-content-center mt-3">

      <div class="col-12 col-sm-12 col-lg-10 rounded shadow-sm doc-card" >
        <div class="card-content justify-content-center">
          <div class="row g-2">
            <div class="col-12  col-lg-8 col-md-8">
              <span style="color: white; font-size: 1.25rem;">Not seeing the perfect fit? No worries! Send your resume to work@botts-inc.com and be considered for future opportunities.</span>
            </div>

            <div class="col-12 col-lg-2 col-md-4 align-content-center">
              <b-button
                  href="/job"
                  target="_blank"
                  class="white-btn"
              >
                Send Resume
              </b-button>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>

</template>

<style scoped>
.white-btn {
  background-color: transparent;
  border-color: #faf6ed;
  color: #faf6ed;
  padding: 10px 25px;
}

.white-btn:hover {
  background-color: #faf6ed;
  border-color: #faf6ed;
  color: #000;
  padding: 10px 25px;
}

h1 {
  color: #fff;
  font-weight: bold;
}
.doc-card {
  background-image: linear-gradient(to right, rgba(223, 193, 140, 0.73), #d39f44);
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
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
