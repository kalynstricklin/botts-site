<script setup>
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <router-link to="/">
            <img class="logo" alt="Botts Logo" src="../assets/logos/Botts-logo-orange.svg" />
          </router-link>
        </div>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navigation">
            <li class="nav-item">
              <router-link class="nav-link" to="/company" :class="{ active: $route.path === '/company' }">Company</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/careers" :class="{ active: $route.path === '/careers' }">Careers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/learn" :class="{ active: $route.path === '/learn' }">Learn</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://OpenSensorHub.org/">OpenSensorHub</a>
            </li>
          </ul>
          <div class="d-flex">
            <a class="btn btn-outline-light" href="mailto:info@botts-inc.com" role="button">Get in Touch</a>
          </div>
        </div>
      </div>
    </nav>

  </header>
</template>

<style scoped>
nav{
  background-color: #131824;
}
.logo {
  max-height: 65px;
  height: auto;
  width: 100%;
}

/* Mobile styling */
@media (max-width: 768px) {
  .logo {
    max-height: 45px;
  }
}

@media (max-width: 430px) {
  .logo {
    max-height: 40px;
  }

}
ul#navigation .active{
  color: #d39f44;
}
</style>
