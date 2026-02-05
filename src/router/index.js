import { createRouter, createWebHistory } from 'vue-router'

// Import các trang của bạn
import Login from '../views/auth/Login.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
// Import trang chủ (nếu bạn chưa có file này thì tạo tạm nhé)
import HomeView from '../views/home/HomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    }
  ]
})

export default router