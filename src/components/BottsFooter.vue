<script>

</script>

<template>
  <div class="footer">

      <div class="card rounded footer-card">
        <div class="container-fluid">
        <div class="row p-2">

          <!--logo -->
          <div class="col-12 col-lg-4 col-md-12 text-center text-lg-start">
            <div class="p-4">
              <img class="footer-logo" alt="Botts Logo" src="../assets/logos/Botts-logo.svg" />
            </div>
          </div>

          <!--footer-->
          <div class="col-12 col-lg-8 col-md-12 mt-4">
            <div class="row justify-content-lg-end align-content-lg-end text-md-start">


              <!--Inside Botts-->
              <div class="col-12 col-md-6 col-lg-3">
                <h6 class="text-uppercase">Inside Botts</h6>

                <p>
                  <a href="/company" class="" target="_self">
                    About Us
                  </a>
                </p>

                <p>
                  <a href="/team" class="" target="_self">
                    Our Team
                  </a>
                </p>

                <p>
                  <a href="mailto:work@botts-inc.com" class="" target="_self">
                    Careers
                  </a>
                </p>

                <p>
                  <a href="https://www.youtube.com/@OpenSensorHubOrg2015" class="" target="_self">
                    Contact Us
                  </a>
                </p>

              </div>

              <!--connect with us-->
              <div class="col-12 col-md-12 col-lg-3">
                <h6 class="text-uppercase">Connect with Us</h6>

                <p>
                  <a href="https://github.com/Botts-Innovative-Research" class="me-4 text-reset" target="_blank">
                    <b-icon icon="github"></b-icon> Github
                  </a>
                </p>

                <p>
                  <a href="https://www.linkedin.com/company/botts-innovative-research-inc" class="me-4 text-reset" target="_blank">
                    <b-icon icon="linkedin"></b-icon> LinkedIn
                  </a>
                </p>

                <p>
                  <a href="https://www.youtube.com/@OpenSensorHubOrg2015" class="me-4 text-reset" target="_blank">
                    <b-icon icon="youtube"></b-icon> YouTube
                  </a>
                </p>

                <p>
                  <a href="mailto:work@botts-inc.com" class="me-4 text-reset" target="_blank">
                    <b-icon icon="envelope-fill"></b-icon> Email
                  </a>
                </p>

              </div>


              <!--featured blog posts-->
              <div class="col-12 col-md-12 col-lg-6">
                <h6 class="text-uppercase">Featured blog posts</h6>

                <p>
                  <a href="https://opensensorhub.org/category/osh-capabilities-and-advancements/" class="" target="_blank">
                    OSH Capabilities and Advancements
                  </a>
                </p>

                <p>
                  <a href="https://opensensorhub.org/category/thoughts-and-discussions/" class="" target="_blank">
                    Thoughts and Discussions
                  </a>
                </p>

                <p>
                  <a href="https://opensensorhub.org/category/new-releases/" class="" target="_blank">
                    New Releases
                  </a>
                </p>

                <p>
                  <a href="https://opensensorhub.org/blog/" class="" target="_blank">
                    Visit the OSH Blog
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <hr/>
        <div class="justify-content-start align-items-center p-3">
          <span>Botts Innovative Research © All Rights Reserved</span>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
hr{
  color: #000;
}
.footer {
  height: auto;
  width: 100%;
  padding: 10px;
  background-color: #131720;
}
.footer-logo{
  height: auto;
  width: 100%;
  max-width: 275px;
}

.footer-card{
  background-color: #faf6ed;
  border-color: #faf6ed;
}

.footer h6 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #171b24;
  text-align: left;
}

.footer a {
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s;
  text-align: left;
  color: #000;
  justify-content: left;
  text-align: left;
}

p{
  text-align: left;
}
.footer a:hover {
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-thickness: 1.5px;
}


@media only screen and (max-width: 480px) {

}
</style>



