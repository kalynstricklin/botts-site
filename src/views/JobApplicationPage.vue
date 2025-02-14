<script setup>
import { ref } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();
// const jobPosition = ref(router.currentRoute.value.params.position || "Apply for a Position");

const experienceOptions = [
  { text: "Select One", value: "" },
  { text: "0-2 Years", value: "0-2" },
  { text: "3-5 Years", value: "3-5" },
  { text: "5-10 Years", value: "5-10" },
  { text: "10+ Years", value: "10+" }
];

const formDetails = ref({
  legalName: "",
  preferredName: "",
  phoneNumber: "",
  email: "",
  role: "",
  yrsExperience: "",
  portfolioUrl: "",
  linkedInProfile: "",
  skills: [],
  resume: null
});

const selectedSkills = ref([]);

const toggleSkill = (skill) => {
  if (selectedSkills.value.includes(skill)) {
    selectedSkills.value = selectedSkills.value.filter((s) => s !== skill);
  } else {
    selectedSkills.value.push(skill);
  }
};

const triggerFileUpload = () => {
  document.getElementById("resume").click();
};
const uploadFile = (event) => {
  formDetails.value.resume = event.target.files[0];
};

const dragFile = (event) => {
  event.preventDefault();
  formDetails.value.resume = event.dataTransfer.files[0];
};


const sendMail = async () => {
  const formData = new FormData();
  formData.append("legalName", formDetails.value.legalName);
  formData.append("preferredName", formDetails.value.preferredName);
  formData.append("email", formDetails.value.email);
  formData.append("phoneNumber", formDetails.value.phoneNumber);
  formData.append("role", formDetails.value.role);
  formData.append("yrsExperience", formDetails.value.yrsExperience);
  formData.append("portfolioUrl", formDetails.value.portfolioUrl);
  formData.append("linkedInProfile", formDetails.value.linkedInProfile);
  formData.append("skills", selectedSkills.value.join(","));
  if (formDetails.value.resume) {
    formData.append("resume", formDetails.value.resume);
  }

  const url = 'https://us-central1-your-project-id.cloudfunctions.net/sendEmail';

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      alert("Application submitted successfully!");
      resetForm();
    } else {
      alert("Failed to submit the application.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again.");
  }
};

const resetForm = () => {
  formDetails.value = {
    legalName: "",
    preferredName: "",
    phoneNumber: "",
    email: "",
    role: "",
    yrsExperience: "",
    portfolioUrl: "",
    linkedInProfile: "",
    skills: [],
    resume: null
  };
  selectedSkills.value = [];
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <div class="desc">

        <p class="about-title">About Botts</p>
        <p>Botts mission statement here...</p>
      </div>

      <form id="appForm" @submit.prevent="sendMail">
        <div class="row g-4">
          <div class="col-md-12">
            <div class="form-group">
              <label for="legalName" class="form-label">Legal Name (First Name, Last Name)</label>
              <input v-model="formDetails.legalName" type="text" class="form-control" id="legalName" required placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="preferredName" class="form-label">Preferred Name</label>
              <input v-model="formDetails.preferredName" type="text" class="form-control" id="preferredName" required placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="email" class="form-label">Email*</label>
              <input v-model="formDetails.email" type="email" class="form-control" id="email" required placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="phoneNumber" class="form-label">Phone Number*</label>
              <input v-model="formDetails.phoneNumber" type="tel" class="form-control" id="phoneNumber" required placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="role" class="form-label">Current Role</label>
              <input v-model="formDetails.role" type="text" class="form-control" id="role" required placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="yrsExperience" class="form-label">Years of Experience</label>
              <select v-model="formDetails.yrsExperience" class="form-select" id="yrsExperience" required>
                <option v-for="option in experienceOptions" :key="option.value" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">Key Skills</label>
              <div class="skill-tags">
                <div v-for="skill in ['Java', 'JavaScript', 'Gradle', 'Vue']" :key="skill" class="skill-tag" :class="{ selected: selectedSkills.includes(skill) }" @click="toggleSkill(skill)">
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <label class="form-label">Resume Upload</label>
            <div class="file-upload" id="resumeUpload" @click="triggerFileUpload" @drop="dragFile" @dragover.prevent>
              <input type="file" id="resume" class="d-none" accept=".pdf,.doc,.docx" @change="uploadFile">
              <div class="upload-content">
                <p class="mb-1">Drag and drop your resume here</p>
                <p class="text-muted small">or click to browse (PDF, DOC, DOCX)</p>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="portfolioUrl" class="form-label">Portfolio URL</label>
              <input v-model="formDetails.portfolioUrl" type="url" class="form-control" id="portfolioUrl" placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="form-group">
              <label for="linkedInProfile" class="form-label">LinkedIn Profile</label>
              <input v-model="formDetails.linkedInProfile" type="url" class="form-control" id="linkedInProfile" placeholder="Type here..." />
            </div>
          </div>

          <div class="col-md-12">
            <div class="row">
              <div class="form-group">
                <button class="btn submit-btn" type="submit">Submit Application</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.form-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.about-title{
  font-weight: 600;
  font-size: 1.05rem;
  color: #475569;
  margin-bottom: 0.5rem;
  font-family: var(--font-secondary);
}

.form-container{
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  text-align: left;
}

.submit-btn{
  color: #fff;
  background-color: #171b24;
  border-radius: 25px;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  letter-spacing: var(--letterSpacingWide);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.submit-btn:hover{
  background-color: var(--primary-color);
  transition-duration: .25s;
  transition-timing-function: ease-in-out;

}
.form-container{
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  text-align: left;
}


.form-label {
  font-weight: 600;
  font-size: 1.05rem;
  color: #2b2b2c;
  margin-bottom: 0.5rem;
  font-family: var(--font-secondary);
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
