<script setup>

// defineProps({
//   title: String,
// })


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('multiStepForm');
  const steps = document.querySelectorAll('.form-step');
  const progressBar = document.querySelector('.progress-bar');
  const stepCircles = document.querySelectorAll('.step-circle');
  const stepLines = document.querySelectorAll('.step-line');
  const skillTags = document.querySelectorAll('.skill-tag');
  let currentStep = 1;

  // Initialize skill tags
  const selectedSkills = new Set();
  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('selected');
      const skill = tag.dataset.skill;
      if (selectedSkills.has(skill)) {
        selectedSkills.delete(skill);
      } else {
        selectedSkills.add(skill);
      }
    });
  });

  // Initialize file upload
  const fileUpload = document.getElementById('resumeUpload');
  const fileInput = document.getElementById('resume');

  fileUpload.addEventListener('click', () => fileInput.click());
  fileUpload.addEventListener('dragover', (e) => {
    e.preventDefault();
    fileUpload.classList.add('border-primary');
  });

  fileUpload.addEventListener('dragleave', () => {
    fileUpload.classList.remove('border-primary');
  });

  fileUpload.addEventListener('drop', (e) => {
    e.preventDefault();
    fileUpload.classList.remove('border-primary');
    fileInput.files = e.dataTransfer.files;
    updateFileUploadText(e.dataTransfer.files[0]);
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      updateFileUploadText(e.target.files[0]);
    }
  });

  function updateFileUploadText(file) {
    const uploadContent = fileUpload.querySelector('.upload-content');
    uploadContent.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-earmark-check mb-3" viewBox="0 0 16 16">
                <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
            </svg>
            <p class="mb-1">${file.name}</p>
            <p class="text-muted small">Click or drag to change file</p>
        `;
  }

  // Update progress bar and step indicators
  function updateProgress() {
    const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    stepCircles.forEach((circle, index) => {
      if (index + 1 < currentStep) {
        circle.classList.add('completed');
        circle.classList.remove('active');
      } else if (index + 1 === currentStep) {
        circle.classList.add('active');
        circle.classList.remove('completed');
      } else {
        circle.classList.remove('active', 'completed');
      }
    });

    stepLines.forEach((line, index) => {
      if (index + 1 < currentStep) {
        line.classList.add('completed');
      } else {
        line.classList.remove('completed');
      }
    });
  }

  // Validate current step
  function validateStep(step) {
    const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    // Special validation for step 2
    if (step === 2 && selectedSkills.size === 0) {
      isValid = false;
      alert('Please select at least one skill');
    }
    // step 3 education
    if (step === 3 && selectedSkills.size === 0) {
      isValid = false;
      alert('Please select at least one skill');
    }

    // Special validation for step 4
    if (step === 3 && fileInput.files.length === 0) {
      isValid = false;
      alert('Please upload your resume');
    }

    return isValid;
  }

  // Next step button handler
  document.querySelectorAll('.next-step').forEach(button => {
    button.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
        currentStep++;
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
        updateProgress();
      }
    });
  });

  // Previous step button handler
  document.querySelectorAll('.prev-step').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
      currentStep--;
      document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
      updateProgress();
    });
  });

  // Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Collect form data
      const formData = new FormData(form);
      formData.append('skills', Array.from(selectedSkills).join(','));


      // Here you would typically send the data to your server
      console.log('Form submitted with data:', Object.fromEntries(formData));

      // Show success message
      alert('Application submitted successfully!');

      // Optional: Reset form
      form.reset();
      currentStep = 1;
      selectedSkills.clear();
      skillTags.forEach(tag => tag.classList.remove('selected'));
      updateProgress();
      steps.forEach(step => step.classList.remove('active'));
      steps[0].classList.add('active');
    }
  });

  // Initialize progress
  updateProgress();
});
</script>

<template>
  <div class="container">
    <div class="form-container">
      <div class="form-header">
        <h2>Join Our Team</h2>
        <p class="text-muted">We're excited to learn more about you</p>
      </div>

      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 0%"></div>
      </div>

      <div class="step-indicator">
        <div class="step-line"></div>
        <div class="step-circle active">1</div>
        <div class="step-circle">2</div>
        <div class="step-circle">3</div>
        <div class="step-circle">4</div>
        <div class="step-circle">5</div>
      </div>

      <form id="multiStepForm">
        <!-- Step 1: Basic Information -->
        <div class="form-step active" data-step="1">
          <h3 class="mb-4">Basic Information</h3>
          <div class="row g-4">
            <div class="col-md-6">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" required>
            </div>
            <div class="col-md-6">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" required>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" class="form-control" id="email" required>
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" required>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-4">
            <button type="button" class="btn btn-primary btn-nav next-step">Continue</button>
          </div>
        </div>

        <!-- Step 2: Professional Experience -->
        <div class="form-step" data-step="2">
          <h3 class="mb-4">Professional Experience</h3>
          <div class="mb-4">
            <label for="currentRole" class="form-label">Current Role</label>
            <input type="text" class="form-control" id="currentRole" required>
          </div>
          <div class="mb-4">
            <label for="experience" class="form-label">Years of Experience</label>
            <select class="form-select" id="experience" required>
              <option value="">Select experience</option>
              <option value="0-2">0-2 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">10+ years</option>
            </select>
          </div>
          <div class="mb-4">
            <label class="form-label">Key Skills</label>
            <div class="skill-tags">
              <div class="skill-tag" data-skill="javascript">Java</div>
              <div class="skill-tag" data-skill="javascript">JavaScript</div>
              <div class="skill-tag" data-skill="python">Gradle</div>

            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-secondary btn-nav prev-step">Back</button>
            <button type="button" class="btn btn-primary btn-nav next-step">Continue</button>
          </div>
        </div>

        <div class="form-step" data-step="3">
          <h3 class="mb-4">Education</h3>
          <div class="mb-4">
            <label for="school" class="form-label">School</label>
            <input type="text" class="form-control" id="school" placeholder="university">
          </div>

          <div class="mb-4">
              <label for="degree" class="form-label">Degree</label>
              <select class="form-select" id="degree" required>
                <option value="">Select...</option>
                <option value="associates">Associate's Degree</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">Doctor of Philosophy (Ph.D.)</option>
                <option value="other">Other</option>
              </select>
          </div>


          <div class="mb-4">
            <label for="startDate" class="form-label">Start date year</label>
            <input type="text" class="form-control" id="startDate" placeholder="">
          </div>
          <div class="mb-4">
            <label for="month" class="form-label">End date month</label>
            <select class="form-select" id="degree" required>
              <option value="">Select...</option>
              <option value="january">Associate's Degree</option>
              <option value="february">Bachelor's Degree</option>
              <option value="march">Master's Degree</option>
              <option value="april">Doctor of Philosophy (Ph.D.)</option>
              <option value="may">Doctor of Philosophy (Ph.D.)</option>
              <option value="june">Doctor of Philosophy (Ph.D.)</option>
              <option value="july">Doctor of Philosophy (Ph.D.)</option>
              <option value="august">Doctor of Philosophy (Ph.D.)</option>
              <option value="september">Doctor of Philosophy (Ph.D.)</option>
              <option value="october">Doctor of Philosophy (Ph.D.)</option>
              <option value="november">Doctor of Philosophy (Ph.D.)</option>
              <option value="december">Doctor of Philosophy (Ph.D.)</option>

            </select>
          </div>

          <div class="mb-4">
            <label for="endDate" class="form-label">End Date year </label>
            <input type="text" class="form-control" id="endDate" placeholder="">
          </div>
          <div class="mb-4">
            <label for="school" class="form-label">School</label>
            <input type="text" class="form-control" id="school" placeholder="university">
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-secondary btn-nav prev-step">Back</button>
            <button type="button" class="btn btn-primary btn-nav next-step">Continue</button>
          </div>
        </div>

        <!-- Step 3: Portfolio & Resume -->
        <div class="form-step" data-step="4">
          <h3 class="mb-4">Portfolio & Resume</h3>
          <div class="mb-4">
            <label for="portfolio" class="form-label">Portfolio URL</label>
            <input type="url" class="form-control" id="portfolio" placeholder="https://your-portfolio.com">
          </div>
          <div class="mb-4">
            <label for="linkedin" class="form-label">LinkedIn Profile</label>
            <input type="url" class="form-control" id="linkedin" placeholder="https://linkedin.com/in/your-profile">
          </div>
          <div class="mb-4">
            <label class="form-label">Resume Upload</label>
            <div class="file-upload" id="resumeUpload">
              <input type="file" id="resume" class="d-none" accept=".pdf,.doc,.docx">
              <div class="upload-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cloud-upload mb-3" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                  <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
                <p class="mb-1">Drag and drop your resume here</p>
                <p class="text-muted small">or click to browse (PDF, DOC, DOCX)</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-secondary btn-nav prev-step">Back</button>
            <button type="button" class="btn btn-primary btn-nav next-step">Continue</button>
          </div>
        </div>

        <!-- Step 4: Additional Information -->
        <div class="form-step" data-step="5">
          <h3 class="mb-4">Additional Information</h3>
          <div class="mb-4">
            <label for="availability" class="form-label">When can you start?</label>
            <select class="form-select" id="availability" required>
              <option value="">Select availability</option>
              <option value="immediately">Immediately</option>
              <option value="2-weeks">2 weeks notice</option>
              <option value="1-month">1 month notice</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="salaryExpectation" class="form-label">Salary Expectation</label>
            <select class="form-select" id="salaryExpectation" required>
              <option value="">Select range</option>
              <option value="40-60k">$40,000 - $60,000</option>
              <option value="60-80k">$60,000 - $80,000</option>
              <option value="80-100k">$80,000 - $100,000</option>
              <option value="100k+">$100,000+</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="additionalInfo" class="form-label">Additional Information</label>
            <textarea class="form-control" id="additionalInfo" rows="4" placeholder="Tell us anything else you'd like us to know..."></textarea>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-secondary btn-nav prev-step">Back</button>
            <button type="submit" class="btn btn-success">Submit Application</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container{
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem;
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.form-header {
  margin-bottom: 2rem;
}

.form-step {
  display: none;
  animation: fadeIn 0.5s ease-in-out;
}

.form-step.active {
  display: block;
}

.progress {
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 100px;
  margin-bottom: 3rem;
  overflow: hidden;
}

.progress-bar {
  background-color: var(--primary-color);
  transition: width 0.4s ease-in-out;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.step-circle.active {
  background-color: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.step-circle.completed {
  background-color: var(--primary-color);
  color: white;
}

.step-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #e2e8f0;
  transform: translateY(-50%);
  z-index: 0;
}

.step-line.completed {
  background-color: var(--primary-color);
}

.form-label {
  font-weight: 500;
  color: #475569;
  margin-bottom: 0.5rem;
}

.form-control {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 4px rgb(37 99 235 / 0.1);
}

.form-control.is-invalid {
  border-color: #ef4444;
  box-shadow: none;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: var(--primary-color);
  border: none;
}

.btn-primary:hover {
  background-color: var(--secondary-color);
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: #e2e8f0;
  border: none;
  color: #475569;
}

.btn-secondary:hover {
  background-color: #cbd5e1;
  color: #1e293b;
}

.btn-success {
  background-color: var(--primary-color);
  border: none;
}

.btn-success:hover {
  background-color: #047857;
  transform: translateY(-1px);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.skill-tag {
  background-color: #e2e8f0;
  color: #475569;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.skill-tag.selected {
  background-color: var(--primary-color);
  color: white;
}

.file-upload {
  border: 2px dashed #e2e8f0;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.file-upload:hover {
  border-color: var(--primary-color);
  background-color: rgb(37 99 235 / 0.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>