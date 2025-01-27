<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
import {onMounted} from "vue";
import TestimonialScroller from "@/components/homepage/TestimonialScroller.vue";
import ServicesCards from "@/components/homepage/ServicesCards.vue";


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
        //loop over the entries
        entries.forEach((entry, index) => {

          //if element is visible
          if (entry.isIntersecting) {

            //add delay between cards
            entry.target.style.animationDelay = `${index * 0.3}s`;
            //add the animation class
            entry.target.classList.add('card-animation');
            return;

          }
        });
      },
      {
        threshold: 0.25,
      }
  );

  const sections = document.querySelectorAll('.homeSection');
  sections.forEach((section) => observer.observe(section));
});


</script>

<template>
  <div>
    <section id="header-section" class="mt-5 py-5">
      <HomeImage />
    </section>

    <section id="service-section" class="py-2">
      <ServicesCards/>
    </section>

    <section id="test-scroller" class="py-3">
      <TestimonialScroller/>
    </section>


  </div>
</template>

<style scoped>

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