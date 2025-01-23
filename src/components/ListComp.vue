<script setup>
import { defineProps } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <div class="row align-items-center" v-for="(item, index) in items" :key="index">
      <div class="col-md-12">
        <div class="py-4 px-5">
          <h2 class="gen-orange-title">{{ item.header }}</h2>
          <p class="about-text flex-wrap flex-grow-1">
            {{ item.text }}
          </p>

          <b-button
              v-if="item.link"
              :href="item.link"
              class="btn-sm gen-orange-btn"
              target="_blank"
          >
            {{ item.button }}
          </b-button>
          <p v-else class="text-muted">No link available</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.about-text {
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-size: 1.25em;
}

</style>
