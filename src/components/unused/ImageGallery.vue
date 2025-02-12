<script setup>
import team1 from "@/assets/team1.jpg"
</script>

<template>
  <div class="container test-scroller">

    <div id="testScroller" class="carousel slide justify-content-center align-content-center" data-bs-ride="carousel" data-bs-interval="8000" data-bs-pause="hover">

      <div class="carousel-indicators mt-5">
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner mb-5">
        <div class="carousel-item active justify-content-center align-content-center">
          <img :src="team1" class="d-block"/>
        </div>

        <div class="carousel-item">
          <img :src="team1" class="d-block"/>
        </div>

        <div class="carousel-item">
          <img :src="team1" class="d-block"/>
        </div>

      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#testScroller" data-bs-slide="prev">
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
.carousel{
  max-height: 600px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
}

.carousel-inner .carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
  width: 2rem;
  height: 2rem;
}

.carousel-indicators button {
  background-color: #424242;
}

.carousel-indicators .active {
  background-color: #d39f44;
}


@media (max-width: 768px) {
  .carousel {
    max-height: 1200px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
  .carousel {
    max-height: 1200px;
    margin: 0 auto;
  }
}
</style>