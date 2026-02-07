<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="card p-4">
      <div class="row">
        <div class="col-12">
          <a href="https://docs.opensensorhub.org/" class="text-decoration-none" target="_blank">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">
                  <div class="col-lg-9 col-12">
                    <div class="text-content">
                      <h2 class="title text-white">Developer Center</h2>
                      <p>Explore API references, SDKs, and development tools to build and integrate OSH solutions.</p>
                    </div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="col-12">
          <a href="/learn/presentations" class="text-decoration-none" target="_self">
            <div class="card card-content">
              <div class="text-class">
                <div class="row px-lg-5 px-3 py-4">
                  <div class="col-lg-10 col-12">
                      <div class="text-content">
                        <h2 class="title text-white">Presentations</h2>
                        <p>View presentations from events, and technical discussions about the latest innovations from OSH.</p>
                      </div>
                  </div>
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
                      <h2 class="title text-white">Community Forum</h2>
                      <p>Join discussions, ask questions, and collaborate with other users, developers, and experts in the OSH community.</p>
                    </div>
                  </div>
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
  background-color: rgba(169, 9, 9, 0.16);
  border-color:  rgba(169, 9, 9, 0.16);
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
  font-size: 1.25rem;
}

hr {
  color: #fff;
}

@media only screen and (max-width: 480px) {
  p {
    font-size: 0.75rem;
  }
}
</style>
