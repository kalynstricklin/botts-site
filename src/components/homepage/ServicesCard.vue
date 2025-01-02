<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {

      //if element is visible
      if (entry.isIntersecting) {
        //add the animation class
        entry.target.classList.add('card-animation');
        return;

      }
    });
    },
    // {
    //   threshold: 0.2,
    // }
  );

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => observer.observe(card));
});
</script>


<template>
  <div class="container-fluid">

    <div class="row mb-3">
      <div class="col-12 col-lg-8 col-xxl-7">
        <span class="gen-sm-title">Discover our Services</span>
      </div>
    </div>

    <div class="row g-5 justify-content-center align-items-center">
      <div class="col-12 col-lg-4 col-lg-4 col-md-8 col-sm-12">
        <div class="card">

          <div class="card-body">
            <h2 class="card-title">R&D Services</h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <b-button href="#" class="btn-sm gen-btn">Discover more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-lg-4 col-md-8 col-sm-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Architecture</h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <b-button href="#" class="btn-sm gen-btn">Discover more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-lg-4 col-md-8 col-sm-12">
        <div class="card">

          <div class="card-body">
            <h2 class="card-title">Implementation</h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <b-button href="#" class="btn-sm gen-btn">Discover more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>

<!--          <img :src="implImage" class="card-img-bottom rounded" />-->
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes enter-animation {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .card-animation {
    animation: enter-animation 0.8s ease-out forwards;
  }
}

.card-title{
  font-weight: bold;
  color: #fff;
}

.card-text{
  color: #fff;
}

.card{
  background-image: linear-gradient(to right, rgba(223, 193, 140, 0.73), #d39f44);
  border-color: #f4e9d4;
  border-radius: 20px;
  /**height: 350px;**/
  padding: 15px;
}


</style>

