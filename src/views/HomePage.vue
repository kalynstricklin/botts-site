<script setup>
import HomeImage from "@/components/homepage/HomeImage.vue";
import {onMounted} from "vue";
import TestimonialScroller from "@/components/homepage/TestimonialScroller.vue";
import CollapsableCards from "@/components/cards/CollapsableCards.vue";


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


const services = [
  {
    title: "R&D Services",
    description: "The Botts-Inc team has provided field defining R&D services to the national security community, government agencies, commercial customers, and scientific agencies for over two decades  Connected Systems specification..",
    moreDesc: "These R&D services have helped define the art of the possible with regard to heterogeneous sensor fusion, precision geopositioning across disparate sensor systems, advanced geoprocessing, resilient field sensing architectures, UxS integration strategies, heterogeneous space mission integration, 4D visualization frameworks, and much more.  The Botts-Inc team is always up for a new challenge, and manages an ongoing R&D roadmap for continuously advancing the frontiers of capability."
  },
  {
    title: "Architecture",
    description: "The Botts-Inc team has pioneered the Open Geospatial Consortium’s Sensor Model Language (SensorML), Sensor Web Enablement (SWE) architecture, and the emerging OGC API – Connected Systems specification.",
    moreDesc: "Customers have long relied on the Botts-Inc team to translate their mission and business requirements into interoperable architectures, and helping them navigate the standards process in an expedited manner.  Customers have also relied on the Botts-Inc team to put these interoperability standards into production implementation, which requires architecture leadership within their own organizations. "
  },
  {
    title: "Implementation",
    moreDesc: "The Botts-Inc team has also demonstrated the ability to commercialize their results as a massively scalable, commercially-supported SaaS version of OpenSensorHub (OSH), with the launch of GeoRobotix.",
    description: "The Botts-Inc team is not only a world class R&D services team, and leaders in developing OGC standards-based interoperability architectures, but a team that demands scalable and secure secure solutions to mission-critical problems."
  },
];

</script>

<template>
  <div>
    <section id="header-section" class="reveal">
      <HomeImage />
    </section>


    <section id="service-section" class="py-4 reveal">
      <div class="container-fluid">
        <div class="row">
          <div
              v-for="(item, index) in services"
              :key="index"
              class="col-lg-4 mb-3 d-flex align-items-stretch"
          >
            <CollapsableCards
              :title="item.title"
              :description="item.description"
              :more-desc="item.moreDesc"
              :index="index"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="test-scroller" class="py-3 scroll-appear reveal">
      <TestimonialScroller/>
    </section>
  </div>
</template>

<style scoped>
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


@media (max-width: 768px) {
  #header-section {
    margin-bottom: 1rem;
  }

  #service-section {
    margin-bottom: 1rem;
  }


  #header-section {
    order: 1;
  }

  #service-section {
    order: 2;
  }


}

</style>