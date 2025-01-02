<script setup>
import ogcLogo from "@/assets/testimonialLogo/ogc.png"
import blackCapeLogo from "@/assets/testimonialLogo/blackCapeLogo.png"
import ironEagleLogo from "@/assets/testimonialLogo/IronEagleX_Color_2024-min.png"
</script>

<template>
  <div class="container-fluid test-scroller">

    <div id="testScroller" class="carousel slide justify-content-center align-content-center" data-bs-ride="carousel" data-bs-interval="8000" data-bs-pause="hover">

      <div class="carousel-indicators mt-5">
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#testScroller" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container mb-5">
              <div class="row">

                <div class="col-md-12 col-12">
                  <div class="card test-card">
                    <div class="card-body justify-content-center align-items-center">

                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#d39f44"  class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" /></svg>

                      <p class="fs-4 text-dark fw-semibold">
                        Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementation across many mission critical domains.
                      </p>

                      <div class="d-flex mt-4 align-items-center">
                        <img :src="ogcLogo" class="logo"/>
                        <div class="ms-2">
                          <h5 class="author-text mb-0">Dr. Nadine Alameh</h5>
                          <p class="mb-0 fs-6">CEO</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row">

                <div class="col-md-12 col-12">
                  <div class="card test-card ">
                    <div class="card-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#d39f44"  class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" /></svg>

                      <p class="fs-4 text-dark fw-semibold">
                        The Botts Inc team offers world-class subject matter expertise on the development and deployment of interoperable SensorWebs.  It is a pleasure to work with their team on cutting edge capabilities that can transform situational awareness.
                      </p>

                      <div class="d-flex mt-4 align-items-center">
                        <img :src="ironEagleLogo" class="logo"/>
                        <div class="ms-2">
                          <h5 class="author-text mb-0">Mike Grochol</h5>
                          <p class="mb-0 fs-6">CEO</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div class="carousel-item">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-12">
                  <div class="card test-card">
                    <div class="card-body">

                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#d39f44"  class="bi bi-quote" viewBox="0 0 16 16"><path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" /></svg>
                      <p class="fs-4 text-dark fw-semibold">
                        The innovative spirit and technological leadership that the Botts-Inc team has brought to OpenSensorHub and the OGC standards at its core makes them a great partner in building mission critical applications.
                      </p>
                      <div class="d-flex mt-4 align-items-center">
                        <img :src="blackCapeLogo" class="logo"/>
                        <div class="ms-2">
                          <h5 class="author-text mb-0">Abe Usher</h5>
                          <p class="mb-0 fs-6">Co-Founder</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


      </div>

      <button class="carousel-control-prev"  type="button" data-bs-target="#testScroller" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#testScroller" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

</template>

<style scoped>
.carousel{
  max-height: 500px;
}
.author-text{
  color: #d39f44;
}
.test-card{
  background-color: transparent;
  padding: 1rem;
  border: none;
  box-shadow: none;
}

.carousel-inner .carousel-item img.logo {
  width: 100%;
  max-width: 50px;
  height: auto;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
  width: 2rem;
  height: 2rem;
}

.carousel-indicators button {
  background-color: #333;
}

.carousel-indicators .active {
  background-color: #d39f44;
}

.logo {
  width: 50px;
  height: auto;
}

@media (max-width: 768px) {
  .carousel {
    max-height: 400px;
  }

  .test-card {
    padding: 0.5rem;
  }

  .test-card p {
    font-size: .8rem;
    line-height: 1.2;
  }

  .logo {
    max-width: 40px;
  }
}

</style>