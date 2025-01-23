<script setup>

</script>

<template>
  <div class="container-fluid justify-content-center align-content-center align-items-center">
    <div class="card card-glow hvr-glow">
      <div class="card-body text-center">
        <h2 class="section-title text-white">Join Our Team</h2>
        <p class="section-text">Interested in working in software development? If you like to be challenged, are a tinkerer, a maker, or a drone or robotics enthusiast, and you have good programming skills and the desire to always be learning new things, come and join the fun! </p>
        <a href="/careers" class="btn btn-glow">View Opportunities</a>
      </div>
    </div>
  </div>

</template>

<style scoped>

.card-glow {
  background: linear-gradient(135deg, #d39f44, #f4e9d4);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-glow:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-glow .card-body {
  padding: 2rem;
}

.card-glow .btn-glow {
  background-color: #fff;
  color: #d39f44;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

.card-glow .btn-glow:hover {
  background-color: #d39f44;
  color: #fff;
}

.hvr-glow {
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  transition-property: box-shadow;
}

.hvr-glow:hover,
.hvr-glow:focus,
.hvr-glow:active {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}
</style>