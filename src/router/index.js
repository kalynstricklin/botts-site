import Vue from "vue";
import Router from "vue-router";


import HomePage from "@/views/HomePage.vue";
import CompanyPage from "@/views/CompanyPage.vue";
import CareersPage from "@/views/CareersPage.vue";
// import DocumentationPage from "@/views/DocumentationPage.vue";
import PresentationPage from "@/views/PresentationPage.vue";
// import SoftwarePage from "@/views/SoftwarePage.vue";
import TeamPage from "@/views/TeamPage.vue";
import LearnPage from "@/views/LearnPage.vue";
// import ServicesPage from "@/views/ServicesPage.vue";
// import ProjectPage from "@/unsued/projects/ProjectPage.vue";



Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: HomePage },
        { path: "/company", name: "Company", component: CompanyPage },
        { path: "/team", name: "Team", component: TeamPage },
        { path: "/careers/", name: "Careers", component: CareersPage },
        // { path: "/learn/documentation", name: "Documentation", component: DocumentationPage },
        { path: "/learn/presentations", name: "Presentations", component: PresentationPage },
        // { path: "/learn/software", name: "Software", component: SoftwarePage },
        { path: "/learn/", name: "Learn", component: LearnPage },
        // { path: "/services", name: "Services", component: ServicesPage },
        // { path: "/projects", name: "Services", component: ProjectPage },

    ],
});
