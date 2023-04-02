// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"
import Intro from "@/views/Intro.vue"
import Teams from "@/views/Anggota.vue"
import Company from "@/views/Industri.vue"
import Project from "@/views/Project.vue"

const routes = [
  
  {
    path: "/",
    redirect: to => {
      return { path: '/internship' }
    }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/internship",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home,
  },
  {
    path: "/introduction",
    name: "intro",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Intro,
  },
  
  {
    path: "/teams",
    name: "teams",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Teams,
  },
  {
    path: "/company",
    name: "company",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Company,
  },
  {
    path: "/project",
    name: "project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
