<script setup>

</script>
<template>
  <header>
    <b-navbar toggleable="lg" type="dark" fixed="top" class="sticky-top">
      <b-navbar-brand href="/">
        <img class="logo" alt="Botts Logo" src="../assets/logos/geologo.png" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="navigation">
          <b-nav-item href="/company" :class="{ 'active': $route.path === '/company' }">Company</b-nav-item>
          <b-nav-item href="/jobs" :class="{ 'active': $route.path === '/jobs' }">Careers</b-nav-item>
          <b-nav-item href="/learn" :class="{ 'active': $route.path === '/learn' }">Learn</b-nav-item>
          <b-nav-item href="http://OpenSensorHub.org/" target="_blank">OpenSensorHub</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-button class="my-2 my-sm-0 white-button" href="mailto:info@georobotix.us">Get in Touch</b-button>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<style scoped>
.logo {
  height: 50px;
  width: auto;
}

#navigation .active {
  color: var(--primary-color) !important;
}
</style>

<style>
header .navbar {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  width: 100%;
  padding: 0.5rem 1rem;
}

header .navbar-brand {
  flex: 0 1 auto;
  padding: 0;
  margin-right: 1rem;
}

header .navbar-brand .logo {
  height: 50px;
  width: auto;
}

header .navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

header .nav-item {
  padding: 0 0.5rem;
}

header .nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.5rem;
}

header .nav-link:hover {
  color: #fff;
}

header .ml-auto {
  margin-left: auto;
}

@media (max-width: 991px) {
  header .navbar-brand .logo {
    height: 40px;
  }

  header .navbar-toggler {
    flex: 0 0 auto;
    padding: 0.25rem 0.5rem;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  header .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  header .navbar-collapse {
    width: 100%;
  }

  header .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0;
  }

  header .ml-auto {
    margin-left: 0;
    margin-top: 1rem;
  }
}

@media (max-width: 430px) {
  header .navbar-brand .logo {
    height: 35px;
  }
}
</style>
