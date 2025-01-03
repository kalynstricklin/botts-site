<script setup>
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/company">Company</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/careers">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/learn">Learn</a>
            </li>
          </ul>
          <div class="d-flex">
            <button class="btn btn-outline-warning" href="mailto:info@botts-inc.com" type="button">Get in Touch</button>
          </div>
        </div>
      </div>
    </nav>

<!--    <b-navbar toggleable="lg" type="dark" class="header" id="bottsHeader">-->
<!--      &lt;!&ndash; Left section with logo and toggle button &ndash;&gt;-->
<!--      <div class="d-flex align-items-center">-->
<!--        <b-navbar-brand>-->
<!--          <router-link to="/">-->
<!--            <img class="logo" alt="Botts Logo" src="../assets/logos/Botts-logo-orange.svg" />-->
<!--          </router-link>-->
<!--        </b-navbar-brand>-->

<!--        &lt;!&ndash; Navbar toggle button  &ndash;&gt;-->
<!--        <b-navbar-toggle target="nav-collapse" class="ml-auto d-lg-none"></b-navbar-toggle>-->
<!--      </div>-->

<!--      &lt;!&ndash; Navigation items &ndash;&gt;-->
<!--      <b-collapse id="nav-collapse" is-nav>-->
<!--        <b-navbar-nav class="">-->
<!--          <b-nav-item-dropdown text="Company">-->
<!--            <b-dropdown-item>-->
<!--              <router-link :to="{ path: '/company', hash: '#history' }" class="text-reset text-decoration-none">Our History</router-link>-->
<!--            </b-dropdown-item>-->
<!--            <b-dropdown-item>-->
<!--              <router-link :to="{ path: '/team' }" class="text-reset text-decoration-none">Team</router-link>-->
<!--            </b-dropdown-item>-->
<!--          </b-nav-item-dropdown>-->

<!--          <b-nav-item>-->
<!--            <router-link :to="{ path: '/careers' }" class="text-reset text-decoration-none">Careers</router-link>-->
<!--          </b-nav-item>-->

<!--          <b-nav-item>-->
<!--            <router-link :to="{ path: '/learn' }" class="text-reset text-decoration-none">Learn</router-link>-->
<!--          </b-nav-item>-->

<!--          <b-nav-item href="https://opensensorhub.org/" target="_blank" rel="noopener noreferrer">-->
<!--            OpenSensorHub-->
<!--          </b-nav-item>-->

<!--          <div>-->
<!--            <b-button href="mailto:info@botts-inc.com" class="gen-btn">Get in Touch</b-button>-->
<!--          </div>-->
<!--        </b-navbar-nav>-->
<!--      </b-collapse>-->
<!--    </b-navbar>-->

  </header>
</template>

<style scoped>
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
</style>
