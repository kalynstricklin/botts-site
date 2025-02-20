<script setup>
</script>

<template>
  <header>
    <b-navbar toggleable="lg" type="dark" fixed="top" class="sticky-top">
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
          <b-button class="my-2 my-sm-0 white-button" href="mailto:info@botts-inc.com">Get in Touch</b-button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
.logo {
  max-height: 65px;
  height: auto;
  width: 100%;
}

#navigation .active {
  color: #d39f44 !important;
}

@media (max-width: 430px) {
  .logo {
    width: 75%;
  }

}
</style>
