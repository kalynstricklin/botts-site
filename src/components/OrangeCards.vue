<script setup>
import { onMounted } from 'vue';
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {

      //if element is visible
      if (entry.isIntersecting) {

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
</script>


<template>
  <div>
    <div class="row g-5 justify-content-center align-items-center">
      <div class="col-12 col-lg-4 col-lg-4 col-md-8 col-sm-12"  v-for="(item, index) in items" :key="index">
        <div class="card">

          <div class="card-body">
            <h2 class="card-title">{{ item.title }}</h2>
            <p class="card-text">
              {{ item.text }}
            </p>

            <b-button :href="item.link" class="btn-sm gen-btn">
              {{ item.button }}
            </b-button>
          </div>
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
  padding: 15px;
  flex-grow: 1;
}


</style>

