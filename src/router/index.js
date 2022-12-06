import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/'
    , name: 'inicio'
    , component: () => import('../views/InicioView.vue')
  }
  , {
    path: '/sued'
    , name: 'sued'
    , component: HomeView
  }
  , {
    path: '/resposta',
    name: 'resposta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RespostaView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
