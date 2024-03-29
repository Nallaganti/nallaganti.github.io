import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import Projects from '../views/ProjectsView.vue'
import Hobbies from '../views/HobbiesView.vue'
import Contact from '../views/ContactView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ExperienceView',
    name: 'Experience',
    component: ExperienceView
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Hobbies',
    name: 'Hobbies',
    component: Hobbies
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
