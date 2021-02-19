import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CPU from '../views/CPU.vue';
import GPU from '../views/GPU.vue';
import RAM from '../views/RAM.vue';
import PSU from '../views/PSU.vue';
import FAN from '../views/FAN.vue';
import MOBO from '../views/MOBO.vue';
import CASE from '../views/CASE.vue';
import SSD from '../views/SSD.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cpu',
    name: 'CPU',
    component: CPU
  },
  {
    path: '/gpu',
    name: 'GPU',
    component: GPU
  },
  {
    path: '/ram',
    name: 'RAM',
    component: RAM
  },
  {
    path: '/psu',
    name: 'PSU',
    component: PSU
  },
  {
    path: '/mobo',
    name: 'MOBO',
    component: MOBO
  },
  {
    path: '/case',
    name: 'CASE',
    component: CASE
  },
  {
    path: '/fan',
    name: 'FAN',
    component: FAN
  },
  {
    path: '/ssd',
    name: 'SSD',
    component: SSD
  },
]

const router = new VueRouter({
  routes
})

export default router
