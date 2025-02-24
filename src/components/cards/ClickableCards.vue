<script setup>
const props = defineProps(["title", "description", "links"]);
const title = props.title;
const description = props.description;
const links = props.links;


</script>

<template>

  <a :href="links" class="text-decoration-none">
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

      </div>
    </div>
  </a>


</template>
<style scoped>

.card {
  background-color: transparent;
  border-color: var(--secondary-color);
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  transition: 0.5s ease-in-out;
}
.card-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.card-title {
  margin: 0;
  text-align: center;
  font-size: 1.75rem;
  color: #fff;
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

.card a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  margin-top: auto;
  text-align: end;
}

.card a:hover {
  color: var(--secondary-color);
}
@media only screen and (max-width: 481px) {
  .section-title{
    font-size: 1.75rem;
  }
}
</style>