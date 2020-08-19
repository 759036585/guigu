import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    name: '',
    path: '/msite',
    component: () => import('@/pages/msite'),
    meta: {
      footerShow: true
    }
  },
  {
    name: '',
    path: '/order',
    component: () => import('@/pages/order'),
    meta: {
      footerShow: true
    }
  },
  {
    name: '',
    path: '/profile',
    component: () => import('@/pages/profile'),
    meta: {
      footerShow: true
    }
  },
  {
    name: '',
    path: '/search',
    component: () => import('@/pages/search'),
    meta: {
      footerShow: true
    }
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/login')
  }
]

const router = new VueRouter({
  routes
})

export default router
