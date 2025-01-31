<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
import {onMounted} from "vue";
import TestimonialScroller from "@/components/homepage/TestimonialScroller.vue";
import ServicesCards from "@/components/homepage/ServicesCards.vue";


// import teamImg from "@/assets/team.webp"

onMounted(() => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal, {passive: true});

// To check the scroll position on page load
  reveal();

  // const observer = new IntersectionObserver((entries) => {
  //       //loop over the entries
  //       entries.forEach((entry, index) => {
  //
  //         //if element is visible
  //         if (entry.isIntersecting) {
  //
  //           //add delay between cards
  //           entry.target.style.animationDelay = `${index * 0.15}s`;
  //           //add the animation class
  //           entry.target.classList.add('card-animation');
  //           return;
  //
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.25,
  //     }
  // );
  //
  // const sections = document.querySelectorAll('.scroll-appear');
  // sections.forEach((section) => observer.observe(section));
});

// onMounted(() => {
//   const observer = new IntersectionObserver((entries) => {
//         //loop over the entries
//         entries.forEach((entry, index) => {
//
//           //if element is visible
//           if (entry.isIntersecting) {
//
//             //add delay between cards
//             entry.target.style.animationDelay = `${index * 0.3}s`;
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
//   const sections = document.querySelectorAll('.homeSection');
//   sections.forEach((section) => observer.observe(section));
// });


</script>

<template>
  <div>
    <section id="header-section" class="mt-5 py-5 scroll-appear reveal">
      <HomeImage />
    </section>


    <section id="service-section" class="py-2 scroll-appear reveal">
      <ServicesCards/>
    </section>

    <section id="test-scroller" class="py-3 scroll-appear reveal">
      <TestimonialScroller/>
    </section>




  </div>
</template>

<style scoped>
.btn{
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  border-radius: 50px;
}
.black-card{
  background-color: #131822;
}
.card{
  background-image: linear-gradient(to bottom, var(--primary-color), #000);
  border-color: var(--secondary-color);
}

/**
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
**/

.reveal{
  position: relative;
  transform: translateY(10px);
  opacity: 0;
  transition: 2s all ease;
}

.reveal.active{
  transform: translateY(0);
  opacity: 1;
}


#header-section {
  margin-bottom: 2rem;
}

#service-section {
  margin-bottom: 2rem;
}

#contact-section {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  #header-section {
    margin-bottom: 1rem;
  }

  #service-section {
    margin-bottom: 1rem;
  }

  #contact-section {
    margin-bottom: 1rem;
  }

  #header-section {
    order: 1;
  }

  #service-section {
    order: 2;
  }

  #contact-section {
    order: 3;
  }
}

</style>