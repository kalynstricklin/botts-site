<script setup>
import test1 from "@/assets/testimonials/test1.png"
import test2 from "@/assets/testimonials/test2.jpg"
import test3 from "@/assets/testimonials/test3.jpg"

const cards = [
  { image: test1, name: "Dr. Nadine Alameh", cred: 'CEO', company:'Open Geospatial Consortium', text: "Botts Innovative Research has been a pioneer in the creation of the OGC’s SensorWeb standards, and a global leader in their implementation across many mission critical domains." },
  { image: test2, name: "Mike Grochol", cred: 'CEO', company: 'IronEagleX', text: "The Botts Inc team offers world-class subject matter expertise on the development and deployment of interoperable SensorWebs. It is a pleasure to work with their team on cutting-edge capabilities that can transform situational awareness." },
  { image: test3, name: "Abe Usher", cred: 'Co-Founder', company: 'BlackCape', text: "The innovative spirit and technological leadership that the Botts-Inc team has brought to OpenSensorHub and the OGC standards at its core makes them a great partner in building mission-critical applications." },
];
</script>

<template>
  <div class="container-fluid">

    <div class="row g-3 justify-content-center">
      <div class="col-md-4" v-for="(item, index) in cards" :key="index">
        <div class="card rounded shadow-sm p-4 border-0 custom-card">

          <div class="card-body text-center">
            <p class="card-text">
              "{{ item.text }}"
            </p>
          </div>
          <!-- Testimonial Info -->
          <div class="d-flex align-items-center justify-content-center">
            <div class="avatar me-4 mb-2">
              <img :src="item.image" alt="avatar" class="img-fluid rounded-circle"/>
            </div>
            <div>
              <p class="card-title fw-bold mb-0">{{ item.name }}</p>
              <p class="card-cred text-muted mb-0">
                <span class="cred-text fst-italic">{{ item.cred }},</span>
                <span class="company-text">{{ item.company }}</span>
              </p>

<!--              <p class="card-company text-muted small">{{ item.company }}</p>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container-fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row.g-3 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.col-md-4 {
  display: flex;
}

.card {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  flex-grow: 1;
}

.avatar img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  margin: 0 auto;
}

/**#e3e2e2**/
/**#ffeebc**/
.custom-card {
  background-color: #b35240;
  border-color: #b35240;
}


/**#4a3c2e**/
/**#eee3cd**/
/**6c757d**/
.card-text {
  color: #eee3cd;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.5;
}


.card-title {
  color: #eee3cd;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0;
}

.cred-text{
  color: #eee3cd;
  font-style: italic;
}
.company-text{
  color: #eee3cd;
  font-style: normal;
  margin-left: 5px;
}

.card-cred {
  color: #eee3cd;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}


@media (max-width: 768px) {
  .col-md-4 {
    width: 100%;
  }

  .custom-card {
    max-width: 100%;
  }
}
</style>


