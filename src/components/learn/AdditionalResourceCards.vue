<script setup>


</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
          <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title section-title text-white text-center">OSH Showcase</h5>
            <hr>
            <p class="card-text mb-4">The showcase provides code examples designed to help developers build with the OSH.js toolkit, offering code snippets that you can easily integrate into your OSH projects.</p>
            <div class="text-center">
              <a href="https://opensensorhub.github.io/osh-js/dev/showcase/" class="btn mt-auto align-self-start white-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title section-title text-white text-center">APIs</h5>
            <hr>
            <p class="card-text mb-4"> Find documentation of OpenSensorHub's APIs and get ready to dive into a community that is building a platform to support web-enabled sensors!</p>

            <div class="text-center">
              <a href="https://opensensorhub.org/documentation/" class="btn mt-auto align-self-start white-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-3 d-flex align-items-stretch">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title section-title text-white text-center">OSH Community</h5>
            <hr>
            <p class="card-text mb-4">The showcase provides code examples designed to help developers build with the OSH.js toolkit, offering code snippets that you can easily integrate into your OSH projects.</p>
            <div class="text-center">
              <a href="#" class="btn mt-auto align-self-start white-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body .white-btn {
  background-color: transparent;
  border-color: #faf6ed;
  color: #faf6ed;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-family: var(--font-primary);
  display: inline-block;
  text-align: center;
}

.card-body .white-btn:hover {
  background-color: #d39f44;
  border-color: #d39f44;
  color: #faf6ed;
}

.card {
  background-color: transparent;
  border-color: #f4e9d4;
  border-radius: 20px;
  padding: 15px;
  align-items: center;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

@media only screen and (max-width: 481px) {
  .section-title{
    font-size: 1.75rem;
  }
}

</style>



<!--      <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--        <a href="https://opensensorhub.github.io/osh-js/dev/showcase/" class="text-decoration-none">-->
<!--          <div class="card">-->
<!--            <div class="card-body d-flex flex-column">-->
<!--              <h4 class="gen-white-title card-title">OSH Showcase-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </h4>-->
<!--              <hr>-->
<!--              <p class="card-text mb-4">-->
<!--                The showcase provides code examples designed to help developers build with the OSH.js toolkit, offering code snippets that you can easily integrate into your OSH projects.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--        <a href='https://opensensorhub.org/documentation/' class="text-decoration-none">-->
<!--          <div class="card">-->
<!--            <div class="card-body d-flex flex-column">-->
<!--              <h4 class="gen-white-title card-title">APIs-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </h4>-->
<!--              <hr>-->
<!--              <p class="card-text mb-4">-->
<!--                Find documentation of OpenSensorHub's APIs and get ready to dive into a community that is building a platform to support web-enabled sensors!-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="col-lg-4 mb-3 d-flex align-items-stretch">-->
<!--        <a href='#' class="text-decoration-none">-->
<!--          <div class="card">-->
<!--            <div class="card-body d-flex flex-column">-->
<!--              <h4 class="gen-white-title card-title">OSH Community-->
<!--                <i class="bi bi-arrow-up-right-circle-fill"></i>-->
<!--              </h4>-->
<!--              <hr>-->
<!--              <p class="card-text mb-4">-->
<!--                Get connected with the Bott's team by joining our discord server to get answers directly from our team and community of OSH users and contributers.-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
<!--      </div>-->