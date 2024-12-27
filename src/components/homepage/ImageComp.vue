<script setup>
import headerImage from "@/assets/pond.jpg";
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="position-relative">
        <img
            :src="headerImage"
            alt="Header"
            class="img-fluid rounded shadow"
            style="max-height: 500px; width: 100%; object-fit: cover;"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

@media (max-width: 768px) {
  .text-overlay h2 {
    font-size: calc(1.2rem + 1vw);
  }
  .text-overlay p {
    font-size: calc(0.9rem + 0.5vw);
  }
}
</style>

