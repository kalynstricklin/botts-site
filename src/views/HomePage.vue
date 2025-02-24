<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
import {onMounted} from "vue";
import ServicesCards from "@/components/homepage/ServicesCards.vue";
import TestimonialScroller from "@/components/homepage/TestimonialScroller.vue";


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

  reveal();
});

</script>

<template>
  <div>
    <section id="header-section" class="reveal">
      <HomeImage />
    </section>


    <section id="service-section" class="py-4 reveal">
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