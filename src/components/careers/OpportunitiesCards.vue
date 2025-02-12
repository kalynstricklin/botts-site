<script setup>
const positions = [
  { position: "Full Stack Developer", type: "Full Time", location: "Remote" },
  { position: "Mobile Application Developer", type: "Full Time", location: "Remote" },
  { position: "Frontend Developer - UI/UX Specialist", type: "Full Time", location: "Remote" },
  { position: "Sensor Integration Engineer" , type: "Full Time", location: "Remote" },
  // { position: "Metaverse Simulation Developer" },
  // { position: "Cloud Native Engineer" },
  // { position: "Field System Engineer" },
  // { position: "Edge Deployment Engineer" },
  { position: "Emerging Technology Specialist" , type: "Full Time", location: "Remote" },
  { position: "Software Developer Intern" , type: "Part Time", location: "Remote" },

];
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(item, index) in positions" :key="index" class="col-lg-6 mb-3 d-flex align-items-stretch">
        <div class="card  w-100">
          <div class="card-body p-4">
              <span class="badge rounded-pill float-md-end mb-3 mb-sm-0" style="background-color: #d39f44; color: #fff; padding: 10px 15px">{{item.type}}</span>
              <span> <i class="bi bi-geo-alt"></i> {{item.location}}</span>
            <h2>{{ item.position }}</h2>

            <div class="mt-3">
              <a href="mailto:work@botts-inc.com" target="_blank" class="btn mt-auto align-self-end white-button">Apply Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--non job specific-->
    <div class="row g-2">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-9">
              <p class="card-text justify-content-center align-items-center" style="font-size: 1.25rem">Not seeing the perfect fit? No worries! Send your resume to work@botts-inc.com and be considered for future opportunities.</p>
            </div>
            <div class="col-lg-2 justify-content-center align-content-center">
              <a href="mailto:work@botts-inc.com" class="btn white-button align-content-end">Send Resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.card-body{
  text-align: start;
}

.badge{
  padding: 5px 8px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  font-size: 12px;
  margin-bottom: 5px;
}
.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
  color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}


.card:hover {
  background-image: linear-gradient(to bottom, #d39f44, #000);
  border-color: #f4e9d4;
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}


.card .card-text {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 15px;
}



@media only screen and (max-width: 481px) {
 .badge{
   margin-bottom: 5px;
   align-items: end;
   justify-content: flex-end;
   align-content: end;
 }

}


</style>