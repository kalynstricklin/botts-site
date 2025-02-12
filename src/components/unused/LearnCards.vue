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
    {
      threshold: 0.2,
    }
  );

  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => observer.observe(card));
});


const scroll = () => {
  const element = document.getElementById("projects");
  element.scrollIntoView({behavior: 'smooth'});
}
</script>


<template>
  <div class="container-fluid">
    <div class="row g-3 justify-content-center align-items-center">
      <div class="col-12 col-lg-4 col-md-8 col-sm-12">
        <div class="card">

          <div class="card-body">
            <h2 class="card-title">Presentations</h2>
            <p class="card-text">
              Botts’ team presentations from conferences and other events. Dive into this material to learn more about OpenSensorHub.
            </p>

            <b-button href="/learn/documentation" class="btn-sm gen-orange-btn">Learn more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-8 col-sm-12">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Software</h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <b-button href="/learn/software" class="btn-sm gen-orange-btn">Learn more
              <i class="bi bi-arrow-down-right"></i>
            </b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 col-md-8 col-sm-12">
        <div class="card">

          <div class="card-body">
            <h2 class="card-title">Projects</h2>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>

            <b-button  @click="scroll" class="btn-sm gen-orange-btn">Learn more
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

