<script setup>

</script>
<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row p-4">

        <div class="col-12 col-lg-4 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
          <img class="footer-logo" alt="GeoRobotix Logo" src="../assets/logos/geologo.png" />
        </div>

        <div class="col-12 col-lg-8 col-md-12">
          <div class="row justify-content-lg-end text-center text-md-start">

            <div class="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
              <h6 class="text-uppercase footer-heading">Inside GeoRobotix</h6>
              <p><a href="/company">Company</a></p>
              <p><a href="/jobs">Careers</a></p>
              <p><a href="/learn">Learn</a></p>
            </div>


            <div class="col-12 col-md-4 col-lg-3 mb-4 mb-md-0">
              <h6 class="text-uppercase footer-heading">Connect with Us</h6>
              <p>
                <a href="https://github.com/Botts-Innovative-Research" target="_blank">
                  <b-icon icon="github"></b-icon> Github
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/georobotix" target="_blank">
                  <b-icon icon="linkedin"></b-icon> LinkedIn
                </a>
              </p>
              <p>
                <a href="https://www.youtube.com/@OpenSensorHubOrg2015" target="_blank">
                  <b-icon icon="youtube"></b-icon> YouTube
                </a>
              </p>
              <p>
                <a href="mailto:info@georobotix.us">
                  <b-icon icon="envelope-fill"></b-icon> Email
                </a>
              </p>
            </div>

            <div class="col-12 col-md-4 col-lg-6">
              <h6 class="text-uppercase footer-heading">Featured Blog Posts</h6>
              <p>
                <a href="https://opensensorhub.org/category/osh-capabilities-and-advancements/" target="_blank">
                  OSH Capabilities and Advancements
                </a>
              </p>
              <p>
                <a href="https://opensensorhub.org/category/thoughts-and-discussions/" target="_blank">
                  Thoughts and Discussions
                </a>
              </p>
              <p>
                <a href="https://opensensorhub.org/category/new-releases/" target="_blank">
                  New Releases
                </a>
              </p>
              <p>
                <a href="https://opensensorhub.org/blog/" target="_blank">
                  Visit the OSH Blog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 text-center text-md-start py-3">
              <span>GeoRobotix Innovative Research © All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #0a0a0a;
  width: 100%;
  padding: 40px 0 0 0;
  color: #fff;
}

.footer-logo {
  height: auto;
  width: 100%;
  max-width: 275px;
}

.footer-heading {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--primary-color);
  letter-spacing: 0.5px;
}

.footer a {
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  color: #c5c5c5;
  display: inline-block;
}

.footer p {
  margin-bottom: 12px;
  line-height: 1.6;
}

.footer a:hover {
  color: var(--primary-color);
  transform: translateX(3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  background-color: rgba(0, 0, 0, 0.3);
}

.footer-bottom span {
  font-size: 14px;
  color: #888;
}

/* Icons styling */
.footer b-icon,
.footer .b-icon {
  margin-right: 8px;
  color: var(--primary-color);
}

@media only screen and (max-width: 991px) {
  .footer {
    padding: 30px 0 0 0;
  }

  .footer .row.p-4 {
    padding: 20px !important;
  }

  .footer-heading {
    margin-top: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .footer {
    padding: 20px 0 0 0;
  }

  .footer .row.p-4 {
    padding: 15px !important;
  }

  .footer-logo {
    max-width: 200px;
    margin-bottom: 20px;
  }

  .footer-heading {
    font-size: 1rem;
    margin-bottom: 15px;
    margin-top: 25px;
  }

  .footer a {
    font-size: 14px;
  }

  .footer p {
    margin-bottom: 10px;
  }

  .footer-bottom span {
    font-size: 13px;
  }
}

@media only screen and (max-width: 480px) {
  .footer-logo {
    max-width: 160px;
  }

  .footer-heading {
    font-size: 0.95rem;
  }

  .footer a {
    font-size: 13px;
  }
}
</style>