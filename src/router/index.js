import Vue from "vue";
import Router from "vue-router";

import HomePage from "@/views/HomePage.vue";
import CompanyPage from "@/views/CompanyPage.vue";
import CareersPage from "@/views/CareersPage.vue";
import PresentationPage from "@/views/PresentationPage.vue";
import LearnPage from "@/views/LearnPage.vue";
import JobApplicationPage from "@/views/JobApplicationPage.vue";

Vue.use(Router);


export default new Router({
    mode: "history",
    routes: [
        { path: "/", name: "Home", component: HomePage },
        { path: "/company", name: "Company", component: CompanyPage },
        { path: "/jobs/apply/", component: JobApplicationPage, props: true },
        { path: "/jobs/", name: "Careers", component: CareersPage },
        { path: "/learn/presentations", name: "Presentations", component: PresentationPage },
        { path: "/learn/", name: "Learn", component: LearnPage },

    ],
});

