<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
// import ServicesCard from "@/components/homepage/ServiceCards.vue";
// import GetInTouchForm from "@/components/homepage/GetInTouchForm.vue";
import {onMounted} from "vue";
import TestimonialScroller from "@/components/homepage/TestimonialScroller.vue";
import ServicesCards from "@/components/homepage/ServicesCards.vue";
// import ImageOverlay from "@/components/homepage/ImageOverlay.vue";


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
        //loop over the entries
        entries.forEach((entry, index) => {

          //if element is visible
          if (entry.isIntersecting) {

            //add delay between cards
            entry.target.style.animationDelay = `${index * 0.2}s`;
            //add the animation class
            entry.target.classList.add('card-animation');
            return;

          }
        });
      },
      {
        threshold: 0.5,
      }
  );

  const sections = document.querySelectorAll('.homeSection');
  sections.forEach((section) => observer.observe(section));
});


</script>

<template>
  <div>
    <section id="header-section" class="py-2 homeSection">
      <HomeImage />
    </section>

    <section id="service-section" class="py-2 homeSection">
<!--      <ServicesCard />-->
      <ServicesCards/>
    </section>

    <section id="test-scroller" class="py-3">
      <TestimonialScroller/>


    </section>


    <!--    <section id="contact-section" class="py-4 homeSection">-->
<!--      <GetInTouchForm />-->
<!--    </section>-->
  </div>
</template>

<style scoped>
.testimonial-container{
  max-height: 600px;
}

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