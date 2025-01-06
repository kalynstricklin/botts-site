<script setup>
import headerImage from "@/assets/Hexagon-Pattern-PNG-Pic.png";
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="position-relative">
        <img
            :src="headerImage"
            alt="Header"
            class="img rounded header-img"
        />
        <div class="text-overlay">
          <div class="row">
            <div class="col-12 col-lg-6">
              <h1 class="text-start display-5 fadeIn">LET'S GET IN TOUCH</h1>
            </div>
            <div class="col-lg-6">
              <form class="mt-4 fadeIn">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        class="form-control forms"
                        placeholder="Name"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        class="form-control forms"
                        placeholder="Email"
                    />
                  </div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Your Message</label>
                  <textarea
                      id="message"
                      class="form-control forms"
                      placeholder="Enter your message"
                      rows="4"
                  ></textarea>
                </div>
                <button type="submit" class="btn send-btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>




.header-img {
  opacity: 0.9;
  max-height: 550px;
  width: 100%;
  object-fit: cover;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}

.text-overlay h1 {
  font-size: calc(2rem + 1vw);
  margin-bottom: 20px;
}

.send-btn {
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #fff;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.send-btn:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.forms {
  background-color: #00000099;
  color: #fff;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: border-color 0.3s ease;
}

.forms:focus {
  border-color: #d39f44;
  outline: none;
}

@media (max-width: 768px) {
  .text-overlay {
    flex-direction: column;
    padding: 0 10px;
  }

  .text-overlay h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  form {
    margin-top: 1.5rem;
  }

  .forms {
    font-size: 14px;
  }
}


</style>
