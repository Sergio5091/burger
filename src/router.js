import { createRouter, createWebHistory } from 'vue-router'
import Home from './Layout/Home.vue'
import About from './Layout/About.vue'
import Menu from './Layout/Menu.vue'
import ConnexDec from './components/ConnexDec.vue'
import MyApp from './myApp.vue'
// import BurgerKingView from "./Layout/BurgerKingView.vue";
// import KfcView from "./Layout/KfcView.vue";
// import McdoView from "./Layout/McdoView.vue";
const routes = [
  {
    path: '/',
    name: 'ConnexDec',
    component: ConnexDec,
  },
  {
    path: '/myApp',
    name: 'myApp',
    component: MyApp,
    children: [
      {
        path: '/myApp/',
        name: 'home',
        component: Home,
        meta: { requireAth: true },
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: '/menu',
        name: 'menu',
        component: Menu,
      },
      {
        path: '/menu-kfc',
        name: 'kfc',
        component: () => import('@/Layout/KfcView.vue'),
      },
      {
        path: '/menu-burgerKing',
        name: 'mcdo',
        component: () => import('@/Layout/McdoView.vue'),
      },
      {
        path: '/burger',
        name: 'burger',
        component: () => import('@/Layout/BurgerKingView.vue'),
      },
      {
        path: '/menu/:id',
        name: 'menu-show',
        component: () => import('@/Layout/MenuView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'lien-actif',
})
router.beforeEach((to, from, next) => {
  const get = localStorage.getItem('login') === 'true'
  if (to.meta.requireAth && !get) {
    next('/ConnexDec')
  } else {
    next()
  }
})
export default router
