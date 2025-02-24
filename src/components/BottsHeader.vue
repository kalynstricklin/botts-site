<script setup>
</script>

<template>
  <header>
    <b-navbar toggleable="lg" type="dark" fixed="top" class="sticky-header shadow">
    <b-navbar-brand href="/">
        <img class="logo" alt="Botts Logo" src="../assets/logos/Botts-logo-orange.svg" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navigation">
          <b-nav-item href="/company" :class="{ 'active': $route.path === '/company' }">Company</b-nav-item>
          <b-nav-item href="/jobs" :class="{ 'active': $route.path === '/jobs' }">Careers</b-nav-item>
          <b-nav-item href="/learn" :class="{ 'active': $route.path === '/learn' }">Learn</b-nav-item>


          <!--          <b-nav-item href="/company" :class="{active: $route.path === '/company'}">Company</b-nav-item>-->
<!--          <b-nav-item href="/jobs" :class="{active: $route.path === '/jobs'}">Careers</b-nav-item>-->
<!--          <b-nav-item href="/learn" :class="{active: $route.path === '/learn'}">Learn</b-nav-item>-->
          <b-nav-item href="http://OpenSensorHub.org/">OpenSensorHub</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button class="my-2 my-sm-0 white-button" href="mailto:info@botts-inc.com">Contact Us</b-button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
.sticky-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1050;
  background-color: #0D121C;
  /**background-color: var(--background-color);**/
  padding: 5px 15px;
  min-height: 60px;
  transition: background-color 0.3s ease-in-out;
}

.logo {
  max-height: 75px;
  height: auto;
  width: 200px;
  max-width: 200px; 
}

#navigation .nav-link {
  color: white !important;
  font-family: var(--font-primary);
}

#navigation .nav-link:hover {
  color: #d39f44 !important;
}

#navigation .nav-link.active {
  color: #d39f44 !important;
}

@media (max-width: 430px) {
  .logo {
    max-width: 150px; 
  }
}
</style>
