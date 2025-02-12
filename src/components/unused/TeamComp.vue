<script setup>
import mikeBotts from "@/assets/headshots/MikeHS.jpg"


const coreTeam = [
  { name: "Dr. Mike Botts", job: "President", photo: mikeBotts },
  { name: "Nicholas Garay", job: "Project Coordinator", photo: mikeBotts },
  { name: "Julianne Knox", job: "Project Coordinator", photo: mikeBotts },
  { name: "Chris Tucker", job: "Consultant", photo: mikeBotts },
];

</script>

<template>
  <div class="container py-5">

    <div class="row mb-3">
      <div class="align-content-start justify-content-start text-white">
        <h2>Leadership</h2>
      </div>
    </div>
<!--    <div class="row mb-5 justify-content-center text-center">-->
<!--      <div class="col-lg-6">-->
<!--        <h2 class="section-title">Meet the Team</h2>-->
<!--        <p class="section-subtitle">Meet our team of innovative problem solvers</p>-->
<!--      </div>-->
<!--    </div>-->

    <div class="row g-4">
    <div v-for="(member, index) in coreTeam" :key="index" class="col-lg-3 col-md-6">
      <div class="team-card h-100">
        <img :src="member.photo" :alt="`${member.name} headshot`" class="headshot w-100" />

        <div class="p-4">
          <h5>{{ member.name }}</h5>
          <p class="text-muted mb-4">{{ member.job }}</p>
        </div>
      </div>
    </div>


    </div>
  </div>

</template>

<style scoped>
.text-white{
  text-align: left;
}

.headshot {
  height: 320px;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.5s ease;
}

.team-card {
  border: none;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.05);
}
.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 32px -1px rgba(0, 0, 0, 0.1);
}


</style>


<!--      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src="mikeBotts" alt="Mike Botts headshot" class="img headshot" />
          </div>
          <div class="card-body mb-0">
            <h5 class="gen-orange-title">Dr. Mike Botts</h5>
            <p class="text-white">President</p>
          </div>
        </div>
      </div>


      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src="mikeBotts" alt="Drew Botts headshot" class="img headshot" />
          </div>
          <div class="card-body">
            <h5 class="gen-orange-title mb-0">Drew Botts</h5>
            <p class="mb-0 text-white">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src=mikeBotts alt="Nicholas Garay headshot" class="img headshot" />
          </div>
          <div class="card-body">
            <h5 class="gen-orange-title mb-0">Nicholas Garay</h5>
            <p class="mb-0 text-white">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src=mikeBotts alt="Julianne Knox headshot" class="img headshot" />
          </div>

          <div class="card-body">
            <h5 class="gen-orange-title mb-0">Julianne Knox</h5>
            <p class="mb-0 text-white">Project Coordinator</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src=mikeBotts alt="Ian Patterson headshot" class="img headshot" />
          </div>
          <div class="card-body">
            <h5 class="gen-orange-title mb-0">Ian Patterson</h5>
            <p class="mb-0 text-white">Software Engineer</p>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <div class="card">
          <div class="card-img-top text-center">
            <img :src=mikeBotts alt="Chris Tucker headshot" class="img headshot" />
          </div>
          <div class="card-body">
            <h5 class="gen-orange-title mb-0">Chris Tucker</h5>
            <p class="mb-0 text-white">Consultant</p>
          </div>
        </div>
      </div>-->