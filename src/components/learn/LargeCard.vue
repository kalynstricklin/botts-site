<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="card p-4">
      <div class="row">
        <div class="col-12">
          <div class="text-class">
            <div class="row px-lg-5 px-3 py-4">
              <div class="col-lg-10 col-12">
                <div class="text-content">
                  <b-card-title class="title text-white">Documentation</b-card-title>
                  <p>Access in-depth technical documentation, user guides, and best practices to maximize the platform’s capabilities.</p>
                </div>
              </div>

              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">
                <a href="https://opensensorhub.org/documentation/" class="text-white">
                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>
                </a>
              </div>
              <hr/>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="text-class">
            <div class="row px-lg-5 px-3 py-4">

              <div class="col-lg-10 col-12">
                <div class="text-content">
                  <b-card-title class="title text-white">Developer Center</b-card-title>
                  <p>Explore API references, SDKs, and development tools to build and integrate custom solutions efficiently.</p>
                </div>
              </div>

              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">
                <a href="https://docs.opensensorhub.org/" class="text-white">
                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>
                </a>
              </div>

              <hr/>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="text-class">
            <div class="row px-lg-5 px-3 py-4">
              <div class="col-lg-10 col-12">
                  <div class="text-content">
                    <b-card-title class="title text-white">Presentations</b-card-title>
                    <p>View insightful presentations from conferences, industry events, and technical discussions about the latest innovations.</p>
                  </div>
              </div>

              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">
                <a href="/presentation" class="text-white">
                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>
                </a>
              </div>
              <hr/>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="text-class">
            <div class="row px-lg-5 px-3 py-4">
              <div class="col-lg-10 col-12">
                <div class="text-content">
                  <b-card-title class="title text-white">Community Forum</b-card-title>
                  <p>Join discussions, ask questions, and collaborate with other users, developers, and experts in the community.</p>
                </div>
              </div>

              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">
                <a href="#" class="text-white">
                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>
                </a>
              </div>

              <hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: rgba(112, 112, 112, 0.2);
  border-color: rgba(112, 112, 112, 0.2);
  opacity: 100%;
}

.text-content {
  text-align: left;
  color: #fff;
}

p {
  color: #fff;
  font-family: var(--font-secondary);
  text-align: left;
}

hr {
  color: #fff;
}

@media only screen and (max-width: 480px) {
  .title {
    font-size: 1.35rem;
  }
  p {
    font-size: 0.75rem;
  }
}
</style>
