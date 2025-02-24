<script setup>
const props = defineProps(["title", "description", "moreDesc", "index"]);
const title = props.title;
const description = props.description;
const moreDesc = props.moreDesc;
const index = props.index;
</script>

<template>
  <div class="card">
    <div class="card-body d-flex flex-column">
      <div class="row">
        <h2 class="card-title text-center">{{ title }}</h2>
      </div>
      <hr />
      <div class="card-content">
        <p class="card-text mb-4">
          {{ description }}
        </p>
      </div>

      <div class="collapse" :id="'collapseJobDesc' + index">
        <div class="more-card collapse-text justify-content-center">
          <p class="card-text">
            {{ moreDesc }}
          </p>
        </div>
      </div>

      <div class="text-start mt-4">
        <p class="justify-content-center align-items-center">
          <a
              class="card-text text-decoration-none text-toggle"
              type="button"
              :data-bs-toggle="'collapse'"
              :data-bs-target="'#collapseJobDesc' + index"
              aria-expanded="false"
              :aria-controls="'collapseJobDesc' + index"
          >
            <b-icon icon="arrow-down-circle" font-scale="2" class="text-collapsed"/>
            <b-icon icon="arrow-up-circle" font-scale="2"  class="text-expanded"/>
            <span class=" p-2">Learn More</span>

          </a>
        </p>
      </div>


    </div>
  </div>

</template>

<style scoped>
.text-toggle[aria-expanded=false] .text-expanded {
  display: none;
}
.text-toggle[aria-expanded=true] .text-collapsed {
  display: none;
}

.white-button{
  font-size: 1.25rem;
}
.more-card{
  background-color: transparent;
}
.collapse-text{
  font-family: var(--font-primary);
  font-size: 1.15rem;
  color: #fff;
  text-align: left;
}

.card {
  background-color: transparent;
  border-color: var(--secondary-color);
  border-radius: 20px;
  padding: 15px;
  /**display: flex;**/
  /**flex-direction: column;**/
  /* align-items: center; */
  /* height: 100%; */
  width: 100%;
  height: fit-content;
  transition: 0.5s ease-in-out;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.card-title {
  margin: 0;
  text-align: left;
  font-size: 2.15rem;
  color: #fff;
  justify-content: center;
  align-items: center;
}
.card-content {
  flex-grow: 1;
}
hr {
  width: 100%;
  border: 0;
  border-top: 1px solid #fff;
  margin: 0.5rem 0;
}

.card-text {
  color: #fff;
  font-size: 1.2rem;
  text-align: start;
  margin: 0;
}

.card:hover {
  background-image: linear-gradient(to bottom, var(--primary-color), var(--background-color));
  border-color: var(--secondary-color);
  transform: translateY(-10px);
}

.down-btn{
  color: white;
  font-size: 1.25rem;
}


@media only screen and (device-width: 768px) {
  .card-title{
    font-size: 1.7rem;
  }
  .down-btn{
    font-size: 1rem;
  }
  .card-text{
    font-size: 1rem;
  }
  .white-button{
    font-size: 1rem;
  }
}

@media only screen and (max-device-width: 480px) {
  .card-title{
    font-size: 1.35rem;
    text-align: start;
    align-content: center;
  }
  .down-btn{
    font-size: 1rem;
  }
  .white-button{
    font-size: 1rem;
  }
  .card-text{
    font-size: 1rem;
  }
}
</style>