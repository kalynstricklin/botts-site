<script setup>
import mikeBotts from "@/assets/headshots/mikebotts-headshot.jpg"


const coreTeam = [
  { name: "Dr. Mike Botts", job: "President | CTO", photo: mikeBotts },
  { name: "Mary Lynn Botts", job: "Office Manager", photo: mikeBotts },
  { name: "Chris Tucker", job: "", photo: mikeBotts },
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
];
const developerTeam2 = [
  { name: "Ian Patterson", job: "Developer", photo: mikeBotts },
  { name: "Ashley Poteau", job: "Developer", photo: mikeBotts },
  { name: "Michael Stinson", job: "Developer", photo: mikeBotts },
  { name: "Robin White", job: "Developer", photo: mikeBotts },
];

const internTeam =[
  { name: "Alex Almanza", job: "Intern", photo: mikeBotts },
  { name: "Salwa Jeries", job: "Intern", photo: mikeBotts },
  { name: "Esther Shore", job: "Intern", photo: mikeBotts },
  { name: "Kalyn Stricklin", job: "Intern", photo: mikeBotts },
];

</script>

<template>
  <div class="container-fluid">

    <div class="row mb-3">
      <div class="text-center justify-content-center align-content-center">
        <span class="gen-sm-title ">Our Team</span>
        <h2>Meet our team of innovative problem solvers</h2>
      </div>
    </div>

    <div id="testScroller" class="carousel slide justify-content-center align-items-center" data-bs-ride="carousel" data-bs-interval="8000" data-bs-pause="hover">

      <div class="carousel-indicators mt-5">
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>


      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="container mb-5">
            <div class="row">
              <div  v-for="(member, index) in coreTeam" :key="index" class="col-md-2 col-12">
                <div class="card mb-6 justify-content-center align-items-center text-center">
                  <img :src="member.photo" :alt="`${member.name} headshot`" class="img-fluid headshot" />
                  <div class="card-body">
                    <h5 class="author-text mb-0">{{ member.name }}</h5>
                    <p class="mb-0 fs-6 text-muted">{{ member.job }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item ">
          <div class="container mb-5">
            <div class="row">
              <div  v-for="(member, index) in developerTeam" :key="index" class="col-md-2 col-12">
                <div class="card mb-6 justify-content-center align-items-center text-center">
                  <img :src="member.photo" :alt="`${member.name} headshot`" class="img-fluid headshot" />
                  <div class="card-body">
                    <h5 class="author-text mb-0">{{ member.name }}</h5>
                    <p class="mb-0 fs-6 text-muted">{{ member.job }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item ">
          <div class="container mb-5">
            <div class="row">
              <div  v-for="(member, index) in developerTeam2" :key="index" class="col-md-2 col-12">
                <div class="card mb-6 justify-content-center align-items-center text-center">
                  <img :src="member.photo" :alt="`${member.name} headshot`" class="img-fluid headshot" />
                  <div class="card-body">
                    <h5 class="author-text mb-0">{{ member.name }}</h5>
                    <p class="mb-0 fs-6 text-muted">{{ member.job }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item ">
          <div class="container mb-5">
            <div class="row">
              <div  v-for="(member, index) in internTeam" :key="index" class="col-md-2 col-12">
                <div class="card mb-6 justify-content-center align-items-center text-center">
                  <img :src="member.photo" :alt="`${member.name} headshot`" class="img-fluid headshot" />
                  <div class="card-body">
                    <h5 class="author-text mb-0">{{ member.name }}</h5>
                    <p class="mb-0 fs-6 text-muted">{{ member.job }}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev"  type="button" data-bs-target="#testScroller" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testScroller" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<style scoped>

.headshot{
  border-radius: 50%;
  height: auto;
  width: 150px;
}

.card{
  background-color: transparent;
  border-color: transparent;
  margin-bottom: 20px;
}


.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
}

.carousel-indicators button {
  background-color: #333;
}

.carousel-indicators .active {
  background-color: #d39f44;
}


@media (max-width: 768px) {

}
</style>




<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->

<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Mary Lynn Botts</h5>-->
<!--                        <p class="mb-0 fs-6">Office Manager</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Drew Botts</h5>-->
<!--                        <p class="mb-0 fs-6">Project Manager</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--              <div class="card mb-6 ">-->
<!--                <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                <div class="card-body">-->
<!--                  <div class="d-flex mt-2 align-items-center text-center">-->

<!--                    <div class="ms-2">-->
<!--                      <h5 class="author-text mb-0">Nicholas Garay</h5>-->
<!--                      <p class="mb-0 fs-6">Project Manager</p>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->

<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Julianne Knox</h5>-->
<!--                        <p class="mb-0 fs-6">Project Coordinator</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->




<!--        <div class="carousel-item">-->
<!--          <div class="container mb-5">-->
<!--            <div class="row justify-content-center">-->
<!--              <div class="col-md-2 col-12">-->
<!--                  <div class="card mb-6">-->
<!--                    <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                    <div class="card-body">-->

<!--                      <div class="d-flex mt-2 align-items-center text-center">-->
<!--                        <div class="ms-2">-->
<!--                          <h5 class="author-text mb-0">Lee Butler</h5>-->
<!--                          <p class="mb-0 fs-6">Developer</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                  <div class="card mb-6 ">-->
<!--                    <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                    <div class="card-body">-->
<!--                      <div class="d-flex mt-2 align-items-center text-center">-->
<!--                        <div class="ms-2">-->
<!--                          <h5 class="author-text mb-0">Kathryn Cardy</h5>-->
<!--                          <p class="mb-0 fs-6">Developer</p>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-4 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Tony Cook</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Michael Elmore</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Michael Elmore</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->


<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="carousel-item">-->
<!--          <div class="container mb-5">-->
<!--            <div class="row justify-content-center">-->
<!--              <div class="col-md-2 col-12">-->
<!--                  <div class="card mb-6">-->
<!--                    <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                    <div class="card-body">-->

<!--                      <div class="d-flex mt-2 align-items-center text-center">-->
<!--                        <div class="ms-2">-->
<!--                          <h5 class="author-text mb-0">Bob McCaskey</h5>-->
<!--                          <p class="mb-0 fs-6">Developer</p>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                  <div class="card mb-6 ">-->
<!--                    <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                    <div class="card-body">-->
<!--                      <div class="d-flex mt-2 align-items-center text-center">-->
<!--                        <div class="ms-2">-->
<!--                          <h5 class="author-text mb-0">Ashley Poteau</h5>-->
<!--                          <p class="mb-0 fs-6">Developer</p>-->
<!--                        </div>-->
<!--                      </div>-->

<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-2 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Michael Stinson</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-4 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Robin White</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

<!--              <div class="col-md-2 col-12">-->
<!--                <div class="card mb-6 ">-->
<!--                  <img :src="mikeBotts" alt="mike botts headshot" class="img-fluid headshot"/>-->
<!--                  <div class="card-body">-->
<!--                    <div class="d-flex mt-4 align-items-center text-center">-->
<!--                      <div class="ms-2">-->
<!--                        <h5 class="author-text mb-0">Robin White</h5>-->
<!--                        <p class="mb-0 fs-6">Developer</p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->


<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
