
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'bienvenida',
    component: () => import(/* webpackChunkName:"Bienvenida" */ '../components/Bienvenida.vue')
  },
  {
    path: '/starShips',
    name: 'starShips',
    component: () => import(/* webpackChunkName: "StarShips" */ '../views/StarShips.vue')
  },
  {
    path: '/cabecera',
    name: 'cabecera',
    component: () => import(/* webpackChunkName: "Cabecera" */ '../components/Cabecera.vue')
  },
  {
    path: '/menuLogin',
    name: 'menuLogin',
    component: () => import(/* webpackChunkName: "MenuLogin" */ '../components/MenuLogin.vue')
  },
  {
    path: '/menuPrincipal',
    name: 'menuPrincipal',
    component: () => import(/* webpackChunkName: "MenuPrincipal" */ '../components/MenuPrincipal.vue')
  },
  {
  path: '/cardDetail/:id',
  name: 'cardDetail',
  component: () => import(/* webpackChunkName:"CardDetail" */ '../views/CardDetail.vue')
  },
  {
    path: '/cardPilots',
    name: 'cardPilots',
    component: () => import(/* webpackChunkName:"CardDetail" */ '../views/CardPilots.vue')
    },
  {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName:"login" */ '../components/Login.vue')
  },
  {
  path: '/register',
  name: 'register',
  component: () => import(/* webpackChunkName:"Register" */ '../components/Register.vue'),
 
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName:"ForgotPassword" */ '../components/ForgotPassword.vue')
    },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
