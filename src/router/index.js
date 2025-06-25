import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
//import Servicios from '../views/Servicios.vue'
//import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Home },
  //{ path: '/servicios', name: 'Servicios', component: Servicios },
  //{ path: '/contacto', name: 'Contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
