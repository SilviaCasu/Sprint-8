
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
    path: '/menuCabecera',
    name: 'menuCabecera',
    component: () => import(/* webpackChunkName: "MenuCabecera" */ '../components/MenuCabecera.vue')
  },
  {
    path: '/cardView',
    name: 'cardView',
    children: [
      {
        path: 'cardDetail/:id',
        name: 'cardDetail',
        
        component: () => import(/* webpackChunkName:"CardDetail" */ '../views/CardDetail.vue')
      },
    ],
    component: () => import(/* webpackChunkName: "CardView" */ '../views/CardView.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
