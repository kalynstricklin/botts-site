<script setup>
// import image from "@/assets/feature-detect.jpg";
</script>

<template>
  <div class="container-fluid">
    <div class="card card-glow hvr-glow">
      <div class="card-body">
<!--        <div class="row align-items-center">-->
<!--          <div class="col-lg-6 col-md-8">-->
            <div class="py-4 px-5">
              <p class="section-subtitle">OpenSensorHub Blog</p>
              <h2 class="section-title">Follow Our Blog</h2>
              <p class="section-text flex-wrap flex-grow-1">
                Keep up to date with the latest enhancements and posts from OpenSensorHub and the Botts' team by checking out our blog.
              </p>

              <a href="https://opensensorhub.org/blog/" class="btn btn-glow">All Blog Posts</a>

<!--            </div>-->
<!--          </div>-->
<!--          <div class="col-lg-6 col-md-4 text-center mb-4">-->
<!--            <div class="card-img">-->
<!--              <img :src="image" class="img-fluid rounded about-img" alt="Mike Botts'"/>-->
<!--            </div>-->
<!--          </div>-->

        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.about-img {
  max-width: 80%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
}


.card-glow {
  background: linear-gradient(135deg, #d39f44, #f4e9d4);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-glow:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-glow .card-body {
  padding: 2rem;
}

.card-glow .btn-glow {
  background-color: #fff;
  color: #d39f44;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
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
@media only screen and (max-width: 481px) {
}
</style>
