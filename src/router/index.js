import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/Search.vue'
import Login from '@/views/Login.vue'
import Search from '@/components/Search.vue'
import Explore from '@/components/Explore.vue'
import Explorevehicles from '@/components/Explorevehicles.vue'
import CardCarousel from '@/components/CardCarousel.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Search',
    name:'Search',
    component:Search
  },
  {
    path:'/CardCarousel',
    name:'CardCarousel',
    component:CardCarousel
  },
  {
    path: '/Explore',
    name: 'Explore',
    component:Explore
  },
  {
    path: '/Explorevehicles',
    name: 'Explorevehicles',
    component:Explorevehicles
  },
  {
    path:'/Signup',
    name:'Signup',
    component:Signup
  },
  {
   path:'/Login',
   name:'Login',
   component:Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  
  // If you want to protect certain routes later, you can add logic here
  // For example:
  // if (to.meta.requiresAuth && !isAuthenticated) {
  //   next('/login')
  // } else {
  //   next()
  // }
  
  next()
})

export default router
