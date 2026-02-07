<script setup>
import headerImage from "@/assets/home2.jpg";
// import {onMounted} from "vue";


// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//         //loop over the entries
//         entries.forEach((entry, index) => {
//
//           //if element is visible
//           if (entry.isIntersecting) {
//
//             //add delay between cards
//             entry.target.style.animationDelay = `${index * 0.15}s`;
//             //add the animation class
//             entry.target.classList.add('card-animation');
//             return;
//
//           }
//         });
//       },
//       {
//         threshold: 0.25,
//       }
//   );
//
//   const sections = document.querySelectorAll('.scroll-appear');
//   sections.forEach((section) => observer.observe(section));
// });

</script>

<template>
  <div class="container-fluid">
<!--  <div class="container-fluid scroll-appear">-->
    <div style="position: relative;">
      <img :src="headerImage" alt="header Image" class="overlay-img">
      <div class="overlay-txt">
        <h1 class="overlay-title">Designing and Deploying Open Standards for Sensor Systems</h1>
        <p class="overlay-description">Across national security, public sector, private sector, and scientific communities</p>

        <div class="overlay-btn-container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-auto">
              <b-button class="white-button">
                Contact Us
              </b-button>
            </div>
            <div class="col-auto ms-3">
              <router-link class="overlay-btn-txt" to="/learn/">
                Explore Projects
              </router-link>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<style scoped>
.container-fluid{
  width: 100%;
}
.overlay-img{
  opacity: 50%;
  max-height: 425px;
  width: 100%;
}

.overlay-txt{
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.overlay-title{
  color: #fff;
  font-size: 3.75rem;
  text-transform: uppercase;
}
.overlay-description{
  color: #fff;
  font-size: 1.25rem;
}
.overlay-btn-container{
  margin-top: 25px;
}
.white-button{
  font-size: 1.25rem;
}

.overlay-btn-txt{
  color: #faf6ed;
  line-height: 1.2;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: var(--font-primary);
}
.overlay-btn-txt:hover {
  text-decoration: underline;
}

/**card animation appear on scroll**/

@keyframes enter-animation {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.card-animation {
  animation: enter-animation 0.6s ease-out forwards;
}

@media only screen and (max-width: 767px) {
  .overlay-txt{
    width: 100%;
    top: 55%;
  }
  .overlay-title{
    font-size: 1.5rem;
  }
  .overlay-description{
    font-size: 0.95rem;
  }
  .white-button{
    font-size: 0.95rem;
  }

  .overlay-btn-txt{
    font-size: 0.95rem;
  }
}
</style>
