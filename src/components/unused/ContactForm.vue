<script setup>

</script>

<template>
  <div class="container">
    <h2 class="section-title text-center">Get in Touch</h2>
    <p class="section-subtitle text-center">Please feel free to get in touch using the form below. We would love to hear from you!</p>

    <div class="row">
      <div class="col-lg-12 mx-auto">
        <div class="card mt-2 mx-auto p-4">

          <div class="card-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="card info-card card-glow">
                    <div class="card-body">
                      <h5>Contact Information</h5>
                      <div class="card-text">
                        <p>
                          <i class="bi bi-telephone"></i> 256-xxx-xxxx
                        </p>
                        <p>
                          <i class="bi bi-envelope"></i> info@botts-inc.com
                        </p>
                        <p>
                          <i class="bi bi-geo-alt"></i> Madison, AL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <form id="contact-form" role="form">
                    <div class="controls">
                      <div class="row g-3 mt-2">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Enter your name *" required="required" data-error="Name is required.">
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Enter your email *" required="required" data-error="Email is required.">
                          </div>
                        </div>
                      </div>
                      <div class="row g-3 mt-2">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input id="form_subject" type="text" name="subject" class="form-control" placeholder="Subject">
                          </div>
                        </div>
                      </div>
                      <div class="row g-3 mt-2">
                        <div class="col-md-12">
                          <div class="form-group">
                            <!--                        <label for="form_message">Message *</label>-->
                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here..." rows="4" required="required" data-error="Please, leave us a message."></textarea>
                          </div>
                        </div>
                        <div class="col-md-12 justify-content-center align-items-center mt-3 text-center">
                          <input type="submit" class=" btn btn-send  pt-2 btn-block orange-button" value="Send Message" >
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p{
  font-size: 1rem;
}
.info-card{
  height: 325px;
}
.card-glow {
  //background-color:  #d39f44;
  background: linear-gradient(135deg, var(--primary-color), #f4e9d4);
  color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.btn-send {
  font-weight: 300;
  letter-spacing: 0.2em;
  width: 35%;
}
.card{
  margin-left: 10px;
  margin-right: 10px;
  background-color: #faf6ed;
}
input, textarea{
  background-color: var(--secondary-color);
  border-color: var(--primary-color);
}
</style>