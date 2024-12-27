<script setup>
import teamImg from "@/assets/arch.webp";
</script>



<template>
  <div class="card join-card">
    <div class="row g-0 align-items-center justify-content-center">
      <div class="col-lg-6">
        <div class="col-lg-8 mx-auto">
          <span class="text-muted">Let's Build Something Together!</span>
          <h2 class="display-5 fw-bold">Join Our Team</h2>
          <p>Botts is a team of</p>

          <b-button href="/careers" class="contact-button">See Openings</b-button>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="mt-5 mt-lg-0">
          <img alt="" class="img-fluid rounded"  :src="teamImg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.join-card{
  background-color: #b55442;
  border-color: #b55442;
  padding: 20px;
}

/* Contact Button */
.contact-button {
  background-color: transparent;
  border-color: #f3efdf;
  color: #f3efdf;
  transition: all 0.3s ease;
}
/**#f1d914**/
.contact-button:hover {
  background-color: transparent;
  border-color: #d39e43;
  color: #d39e43;

}


/* Responsive Design */
@media (max-width: 768px) {
  .join-container {
    flex-direction: column;
    text-align: center;
  }

  .text-column {
    text-align: center;
  }

  .join-team-img {
    max-width: 300px;
  }
}
</style>

<!--/* Card Styling */
.join-card {
  background-color: #e3e2e2;
  padding: 10px;
  width: 1200px;
}

/* Overall Container */
.jointeam-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Join Section Layout */
.join-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
}

/* Columns */
.join-column {
  flex: 1;
}

.text-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left; /* Align text to the left for better layout */
  padding: 20px;
}

.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Image Styling */
.join-team-img {
  width: 100%;
  max-width: 400px; /* Reduced max width for better balance */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Added shadow for visual depth */
}

/* Sub-Message Styling */
.sub-message {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
}-->