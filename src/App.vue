<template>
  <div id="app">
    <DefaultLayout />
    <div class="light"></div>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  mounted() {
    window.addEventListener("mousemove", this.updateLightPosition);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updateLightPosition);
  },
  methods: {
    updateLightPosition(event) {
      const x = `${event.clientX}px`;
      const y = `${event.clientY}px`;

      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--y", y);

    },
  },
};
</script>

<style>
:root {
  --x: 100%;
  --y: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.light {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(450px at var(--x) var(--y), rgba(216, 221, 232, 0.1) 10%, transparent 80%);
  transition: background 0.05s ease-out;
}
</style>
