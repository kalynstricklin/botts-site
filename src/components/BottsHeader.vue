<script>

</script>

<template>
  <b-navbar toggleable="lg" type="light" class="header">
    <b-navbar-brand href="#">
      <router-link to="/">
        <img class="logo" alt="Botts Logo" src="../assets/logos/Botts-logo.svg" />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown text="Company" right>

          <b-dropdown-item :to="{path: '/company', hash: '#history'}">Our History</b-dropdown-item>
          <b-dropdown-item :to="{path: '/team'}">Team</b-dropdown-item>
<!--          <b-dropdown-item :to="{path: '/company', hash: '#contact'}">Contact Us</b-dropdown-item>-->
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Careers" right>
          <b-dropdown-item :to="{path: '/careers', hash: '#whybotts'}">Why Choose Bott's</b-dropdown-item>
          <b-dropdown-item :to="{path: '/careers', hash: '#jobs'}">Job Openings</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Learn" right>
          <b-dropdown-item :to="{path: '/documentation'}">Documentation</b-dropdown-item>
          <b-dropdown-item :to="{path: '/presentation'}">Presentations</b-dropdown-item>
          <b-dropdown-item :to="{path: '/software'}">Software</b-dropdown-item>

        </b-nav-item-dropdown>

        <b-nav-item href="https://opensensorhub.org/">OpenSensorHub</b-nav-item>
<!--        <b-nav-item href="#https://opensensorhub.org/blog/">Blog</b-nav-item>-->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<style scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  background-color: #f3efdf;
}

.logo{
  height: 70px;
  width: auto;
}

</style>