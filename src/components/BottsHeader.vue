<script>

</script>

<template>
  <b-navbar toggleable="lg" type="dark" class="header" id="bottsHeader">
    <b-navbar-brand href="#">
      <router-link to="/">
        <img class="logo" alt="Botts Logo" src="../assets/logos/Botts-logo-orange.svg" />
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="justify-content-end">
      <b-navbar-nav>
        <b-nav-item-dropdown text="Company" right>
          <b-dropdown-item :to="{path: '/company', hash: '#history'}">Our History</b-dropdown-item>
          <b-dropdown-item :to="{path: '/team'}">Team</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item :to="{path: '/careers'}">Careers</b-nav-item>

<!--        <b-nav-item-dropdown text="Careers" right>-->
<!--          <b-dropdown-item :to="{path: '/careers', hash: '#whybotts'}">Why Choose Bott's</b-dropdown-item>-->
<!--          <b-dropdown-item :to="{path: '/careers', hash: '#jobs'}">Job Openings</b-dropdown-item>-->
<!--        </b-nav-item-dropdown>-->

<!--        <b-nav-item-dropdown text="Learn" right>-->
<!--          <b-dropdown-item :to="{path: '/documentation'}">Documentation</b-dropdown-item>-->
<!--          <b-dropdown-item :to="{path: '/presentation'}">Presentations</b-dropdown-item>-->
<!--          <b-dropdown-item :to="{path: '/software'}">Software</b-dropdown-item>-->
<!--        </b-nav-item-dropdown>-->

        <b-nav-item :to="{path: '/learn'}">Learn</b-nav-item>

        <b-nav-item href="https://opensensorhub.org/">OpenSensorHub</b-nav-item>


        <!--        <b-nav-item href="#https://opensensorhub.org/blog/">Blog</b-nav-item>-->

        <b-button href="mailto:info@botts-inc.com" target="_blank" rel="noopener noreferrer" class="contact-btn">Get in Touch</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<style scoped>
.header{
/**  position: sticky;
  top: 0;**/
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 25px;
  background-color: #11151e;
}


.contact-btn{
  border-radius: 20px;
  background-color: #ce9c43;
  border-color: #ce9c43;
  margin-left: 20px;
}
.contact-btn:hover{
  border-radius: 20px;
  background-color: #c08013;
  border-color: #c08013;
  margin-left: 20px;
}


.logo{
  max-height: 65px;
  height: auto;
  width: 100%;
}
b-navbar-nav {
  gap: 20px;
  display: flex;
}
</style>
<!--efe9d3-->
<!--c34727-->