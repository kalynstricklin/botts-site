<script setup>


const message = "Our mission is to create";

</script>

<template>
  <div class="container-fluid">
    <div class="card rounded shadow-sm mission-card position-relative">
      <div class="text-overlay">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>


<style>
/**#d7c72d**/
.mission-card {
  border-color: #d39d42;
  background: #d39d42;
  padding: 60px;
  height: auto;
  width: 100%;
  overflow: hidden;
}

/**rgb(239, 239, 239)**/
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.text-overlay h2,
.text-overlay p {
  font-size: calc(1.5rem + 1vw);
  margin: 0;
}

.text-overlay p {
  font-size: calc(1rem + 0.5vw);
  margin-top: 10px;
}

@media (max-width: 768px) {
  .text-overlay h2 {
    font-size:  calc(1.2rem + 1vw);
  }
  .text-overlay p {
    font-size: calc(0.9rem + 0.5vw);
  }
}
</style>
