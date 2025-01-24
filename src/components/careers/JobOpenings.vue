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
        <div class="card border-0 w-100 card-glow hvr-glow">
          <div class="card-body p-4">
            <span class="badge rounded-pill float-md-end mb-3 mb-sm-0" style="background-color: #fff; color: #d39f44">{{item.type}}</span>
            <h4>{{ item.position }}</h4>
            <div class="mt-3">
              <span> <i class="bi bi-geo-alt"></i> {{item.location}}</span>
<!--              <span class="text-white d-block"><i class="fa fa-map-marker" aria-hidden="true"></i>Remote</span>-->
            </div>
            <div class="mt-3">
              <a href="mailto:work@botts-inc.com" target="_blank" class="btn mt-auto align-self-start btn-glow">Apply Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-2">
      <div class="card card-glow hvr-glow">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-10">
              <p class="card-text justify-content-center align-items-center" style="font-size: 1.25rem">Not seeing the perfect fit? No worries! Send your resume to work@botts-inc.com and be considered for future opportunities.</p>
            </div>
            <div class="col-lg-2 justify-content-center align-content-center">
              <a href="mailto:work@botts-inc.com" class="btn btn-glow align-content-end">Send Resume</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.badge{
  padding: 5px 8px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  font-size: 12px;
}
.card-glow {
  //background-color:  #d39f44;
  background: linear-gradient(135deg, #d39f44, #f4e9d4);
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.card-glow:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-glow .btn-glow {
  background-color: #fff;
  color: #d39f44;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.card-glow .card-title {
  font-size: 1.5rem;
  font-weight: bold;
}
.card-glow .card-text {
  font-size: 1rem;
  line-height: 1.5;
}

.card-glow .btn-glow:hover {
  background-color: #d39f44;
  color: #fff;
}

.hvr-glow {
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow;
}

.hvr-glow:hover,
.hvr-glow:focus,
.hvr-glow:active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
</style>

<!--send resume-->
<!--    <div class="row gap-2 justify-content-center mt-3">-->
<!--      <div class="col-10 col-sm-12 col-md-8 col-lg-10 rounded shadow-sm doc-card" >-->
<!--        <div class="card-content justify-content-center">-->
<!--          <div class="row g-2">-->
<!--            <div class="col-12 col-lg-9 col-md-8">-->
<!--              <span style="color: white; font-size: 1.25rem;">Not seeing the perfect fit? No worries! Send your resume to work@botts-inc.com and be considered for future opportunities.</span>-->
<!--            </div>-->

<!--            <div class="col-12 col-md-4 col-lg-2 align-content-center">-->
<!--              <b-button-->
<!--                  href="/job"-->
<!--                  target="_blank"-->
<!--                  class="orange-button button"-->
<!--              >-->
<!--                Send Resume-->
<!--              </b-button>-->
<!--            </div>-->

<!--          </div>-->

<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

<!--<div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div class="card border-0 bg-light rounded shadow">
                <div class="card-body p-4">
                    <span class="badge rounded-pill bg-primary float-md-end mb-3 mb-sm-0">Full time</span>
                    <h5>Web Designer</h5>
                    <div class="mt-3">
                        <span class="text-muted d-block"><i class="fa fa-home" aria-hidden="true"></i> <a href="#" target="_blank" class="text-muted">Bootdey.com LLC.</a></span>
                        <span class="text-muted d-block"><i class="fa fa-map-marker" aria-hidden="true"></i> USA</span>
                    </div>

                    <div class="mt-3">
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>-->