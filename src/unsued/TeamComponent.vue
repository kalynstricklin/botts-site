<script setup>

import mikeBotts from "@/assets/headshots/mikebotts-headshot.jpg"

const team = [
  { name: "Dr. Mike Botts", job: "President | CTO", photo: mikeBotts },
  { name: "Mary Lynn Botts", job: "Office Manager", photo: mikeBotts },
  { name: "Drew Botts", job: "Senior Developer", photo: mikeBotts },
  { name: "Lee Butler", job: "Junior Developer", photo: mikeBotts },
  { name: "Kathryn Cardy", job: "Junior Developer", photo: mikeBotts },
  { name: "Tony Cook", job: "Senior Developer", photo: mikeBotts },
  { name: "Michael Elmore", job: "Junior Developer", photo: mikeBotts },
  { name: "Nicholas Garay", job: "Senior Developer", photo: mikeBotts },
  { name: "Philip Khasiman", job: "Junior Developer", photo: mikeBotts },
  { name: "Julianne Knox", job: "Project Coordinator", photo: mikeBotts },
  { name: "Bob McCaskey", job: "Junior Developer", photo: mikeBotts },
  { name: "Ian Patterson", job: "Senior Developer", photo: mikeBotts },
  { name: "Ashley Poteau", job: "Junior Developer", photo: mikeBotts },
  { name: "Michael Stinson", job: "Junior Developer", photo: mikeBotts },
  { name: "Chris Tucker", job: "", photo: mikeBotts },
  { name: "Robin White", job: "Junior Developer", photo: mikeBotts },


  // { name: "Alex Almanza", job: "Software Developer Intern", photo: mikeBotts },
  // { name: "Salwa Jeries", job: "Software Developer Intern", photo: mikeBotts },
  // { name: "Esther Shore", job: "Software Developer Intern", photo: mikeBotts },
  // { name: "Kalyn Stricklin", job: "Software Developer Intern", photo: mikeBotts },
];

</script>

<template>

  <div class="container-fluid">


    <div class="card meet-card">
      <div class="row justify-content-center text-center mb-2 mb-lg-4">
        <div class="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
          <span class="text-muted">Our Team</span>
          <h2 class="display-5 fw-bold">Meet the Team</h2>
          <p class="lead">Botts Inc has a team of leading technologists to advance the vision for national security, public sector, private sector, and scientific communities.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-3" v-for="(member, index) in team" :key="index">
          <div class="card team-card text-center border-0 mb-3" >
<!--            <div class="card-body">-->
              <div class="mb-4">
                <img :src="member.photo" :alt="`${member.name}`" class="img-fluid headshot"/>
              </div>
              <h5 class="fw-bold">{{ member.name }}</h5>
              <div class="text-muted mb-3">{{ member.job }}</div>
<!--            </div>-->
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
  max-width: 300px;
  width: 100%;
}

/**
.team-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.team-list li {
  text-align: center;
  margin: 5px;
}

.team-photo {
  justify-content: center;
}
**/
</style>


<!--    <ul class="team-list justify-content-center">-->
<!--      <li v-for="(member, index) in team" :key="index">-->
<!--        <div class="mb-4 mx-xl-5">-->
<!--          <img :src="member.photo" :alt="`${member.name} photo`" class="img-fluid rounded-circle"/>-->
<!--        </div>-->
<!--        <h4 class="fw-bold">{{ member.name }}</h4>-->
<!--        <p class="text-muted mb-3">{{ member.job }}</p>-->
<!--      </li>-->
<!--    </ul>-->