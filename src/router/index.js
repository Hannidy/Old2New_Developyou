import { createRouter, createWebHistory } from 'vue-router'

// Auth
import Login from '../views/auth/Login.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'

// Home
import HomeView from '../views/home/HomeView.vue'

// Products
import ProductList from '../views/home/ProductList.vue'
import ProductDetail from '../views/home/ProductDetail.vue'

// About
import AboutView from '../views/home/AboutView.vue'

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
    },

    // Trang xem tất cả sản phẩm
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },

    // Trang chi tiết sản phẩm
    {
      path: '/products/:id',
      name: 'product-detail',
      component: ProductDetail
    },

    // 🔽 Trang giới thiệu
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
