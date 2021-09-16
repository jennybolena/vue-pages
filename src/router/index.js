import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Education from "../views/Education"
import Projects from "../views/Projects"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode : 'history',
  routes
})

export default router
