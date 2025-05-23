import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/Search.vue'
import Listing from '@/views/Listing.vue'
import Login from '@/views/Login.vue'
import Search from '@/components/Search.vue'
import Explore from '@/components/Explore.vue'
import Explorevehicles from '@/components/Explorevehicles.vue'
import CardCarousel from '@/components/CardCarousel.vue'
import whychoose from '@/components/whychoose.vue'
import MultipleCounters from '@/components/MultipleCounters.vue'
import footervue from '@/components/footer.vue'
import socials from '@/components/socials.vue'
import Popularmakes from '@/components/Popularmakes.vue'
import Mostsearched from '@/components/Mostsearched.vue'
import searchingfor from '@/components/searchingfor.vue'
import InfiniteCarousel from '@/components/InfiniteCarousel.vue'
import Reviews from '@/components/Reviews.vue'
import TestimonialCarousel from '@/components/TestimonialCarousel.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Reviews',
    name: 'Reviews',
    component:Reviews
  },
  {
    path: '/TestimonialCarousel',
    name: 'TestimonialCarousel',
    component:TestimonialCarousel
  },
  {
    path:'/searchingfor',
    name:'searchingfor',
    component:searchingfor
  },
  {
    path: '/Listing',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/Popularmakes',
    name: 'Popularmakes',
    component:Popularmakes
  },
  {
    path: '/InfiniteCarousel',
    name: 'InfiniteCarousel',
    component:InfiniteCarousel
  },
  {
    path:'/socials',
    name:'socials',                   
    component:socials
  },
  {
    path: '/MultipleCounters',
    name: 'MultipleCounters',
    component: MultipleCounters 
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
    path:'/whychoose',
    name:'whychoose',
    component:whychoose
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
    path: '/Mostsearched',
    name: 'Mostsearched',
    component:Mostsearched
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
   path:'/footervue',
   name:'footervue',
   component:footervue
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
