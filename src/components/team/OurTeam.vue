<script setup>

import mikeBotts from "@/assets/headshots/mikebotts-headshot.jpg"

const coreTeam = [
  { name: "Dr. Mike Botts", job: "President | CTO", photo: mikeBotts },
  { name: "Mary Lynn Botts", job: "Office Manager", photo: mikeBotts },
  { name: "Chris Tucker", job: "Consultant", photo: mikeBotts },
  { name: "Drew Botts", job: "Project Coordinator", photo: mikeBotts },
  { name: "Nicholas Garay", job: "Project Coordinator", photo: mikeBotts },
  { name: "Julianne Knox", job: "Project Coordinator", photo: mikeBotts },

];
const developerTeam = [
  { name: "Lee Butler", job: "Developer", photo: mikeBotts },
  { name: "Kathryn Cardy", job: "Developer", photo: mikeBotts },
  { name: "Tony Cook", job: "Developer", photo: mikeBotts },
  { name: "Michael Elmore", job: "Developer", photo: mikeBotts },
  { name: "Philip Khasiman", job: "Developer", photo: mikeBotts },
  { name: "Bob McCaskey", job: "Developer", photo: mikeBotts },
  { name: "Ian Patterson", job: "Developer", photo: mikeBotts },
  { name: "Ashley Poteau", job: "Developer", photo: mikeBotts },
  { name: "Michael Stinson", job: "Developer", photo: mikeBotts },
  { name: "Robin White", job: "Developer", photo: mikeBotts },
];



</script>

<template>

  <div class="container-fluid">


    <div class="card meet-card">
      <div class="row mb-3">
        <div class="text-center justify-content-center align-content-center">
          <span class="gen-orange-title ">Our Team</span>
          <h2>Meet our team of innovative problem solvers</h2>
        </div>
      </div>

<!--      <span class="gen-orange-title ">Leadership</span>-->
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-2 col-sm-3" v-for="(member, index) in coreTeam" :key="index">
          <div class="card team-card text-center border-0 mb-3" >
            <div class="card-body">
              <div class="mb-4">
                <img :src="member.photo" :alt="`${member.name}`" class="img-fluid headshot"/>
              </div>
              <h5 class="fw-bold">{{ member.name }}</h5>
              <div class="text-muted mb-3">{{ member.job }}</div>
            </div>
          </div>
        </div>
      </div>


<!--      <span class="gen-orange-title ">Developers</span>-->
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-2" v-for="(member, index) in developerTeam" :key="index">
          <div class="card team-card text-center border-0 mb-3" >
            <div class="card-body">
              <div class="mb-4">
                <img :src="member.photo" :alt="`${member.name}`" class="img-fluid headshot"/>
              </div>
              <h5 class="fw-bold">{{ member.name }}</h5>
              <div class="text-muted mb-3">{{ member.job }}</div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>




</template>

<style scoped>

.meet-card{
  background-color: #faf6ed;
  border-color: #faf6ed;
  padding: 10px;
}
.team-card{
  background-color: transparent;
}


.headshot{
  height: auto;
  max-width: 180px;
  border-radius: 10px;
}

</style>
