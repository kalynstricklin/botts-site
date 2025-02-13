<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="card p-4">
      <div class="row">
        <div class="col-12">

          <a href="https://opensensorhub.org/documentation/" class="text-decoration-none" target="_blank">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">
                  <div class="col-lg-10 col-12">
                    <div class="text-content">
                      <h3 class="title text-white">Documentation</h3>
                      <p>Access technical documentation, user guides, and best practices to maximize OSH’s capabilities.</p>
                    </div>
                  </div>

<!--                  <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">-->
<!--                    <a href="https://opensensorhub.org/documentation/" class="text-white" target="_blank">-->
<!--                      <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>-->
<!--                    </a>-->
<!--                  </div>-->
                  <hr/>
                </div>
              </div>
            </div>
          </a>

        </div>

        <div class="col-12">
          <a href="https://docs.opensensorhub.org/" class="text-decoration-none" target="_blank">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">

                  <div class="col-lg-9 col-12">
                    <div class="text-content">
                      <h3 class="title text-white">Developer Center</h3>
                      <p>Explore API references, SDKs, and development tools to build and integrate OSH solutions.</p>
                    </div>
                  </div>

    <!--              <div class="col-lg-3 col-12 text-lg-end text-start mt-2 mt-lg-0">-->
    <!--                <a href="https://docs.opensensorhub.org/" class="text-white" target="_blank">-->
    <!--                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>-->
    <!--                </a>-->
    <!--              </div>-->

                  <hr/>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-12">
          <a href="/learn/presentations" class="text-decoration-none" target="_blank">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">
                  <div class="col-lg-10 col-12">
                      <div class="text-content">
                        <h3 class="title text-white">Presentations</h3>
                        <p>View presentations from events, and technical discussions about the latest innovations from OSH.</p>
                      </div>
                  </div>

    <!--              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">-->
    <!--                <a href="/presentation" class="text-white" target="_blank">-->
    <!--                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>-->
    <!--                </a>-->
    <!--              </div>-->
                  <hr/>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-12">
          <a href="https://discord.gg/k4nYuyMF72" class="text-decoration-none" target="_blank">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">
                  <div class="col-lg-10 col-12">
                    <div class="text-content">
                      <h3 class="title text-white">Community Forum</h3>
                      <p>Join discussions, ask questions, and collaborate with other users, developers, and experts in the OSH community.</p>
                    </div>
                  </div>

<!--              <div class="col-lg-2 col-12 text-lg-end text-start mt-2 mt-lg-0">-->
<!--                <a href="#" class="text-white" target="_blank">-->
<!--                  <i class="bi bi-arrow-down-right" style="font-size: 2rem"></i>-->
<!--                </a>-->
<!--              </div>-->

                  <hr/>
                </div>
              </div>
            </div>
          </a>
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
.card-content{
  background-color: transparent;
  border-color: transparent;
}
.text-content:hover{
  transform: translateY(-5px);
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
 /** .title {
    font-size: 1.35rem;
  }**/
  p {
    font-size: 0.75rem;
  }
}
</style>
