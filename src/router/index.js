import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Main from '../views/Main.vue'
import Dashboard from '../home/Dashboard.vue'
import CryptoMarketcap from '../views/CryptoMarketcap.vue'

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)

Vue.component('apexchart', VueApexCharts)
Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: Main,
    redirect: { name: 'Home'},
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/crypto-marketcap',
        name: 'CryptoMarketcap',
        component: CryptoMarketcap,
      }
    ]
  },
  {
    path: '/crypto',
    name: 'Crypto',
    component: Main,
    redirect: { name: 'Home'},
    children: [
      {
        path: '/crypto-marketcap',
        name: 'CryptoMarketcap',
        component: CryptoMarketcap,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
