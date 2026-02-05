<template>
  <div>
    <!-- Header full width -->
    <Header />

    <div class="detail-page">
        <div class="detail-wrapper">

            

            <!-- Nội dung -->
            <div class="detail-image">
            <div class="placeholder-img">Ảnh sản phẩm</div>
            </div>

            <div class="detail-info">
            <h1>{{ product.name }}</h1>
            <p class="price">{{ formatPrice(product.price) }}</p>
            <p class="desc">{{ product.description }}</p>
            <button class="btn-buy">Liên hệ người bán</button>
            </div>
            <!-- Quay lại -->
            <router-link to="/" class="back-home">
            ← Quay lại trang chủ
            </router-link>
  </div>
</div>


    <!-- Footer full width -->
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'

const route = useRoute()

const products = [
  {
    id: 1,
    name: 'Laptop Gaming ASUS TUF',
    price: 15000000,
    description: 'Laptop gaming cũ, hiệu năng mạnh, chơi game mượt.'
  },
  {
    id: 2,
    name: 'iPhone 12 64GB',
    price: 8500000,
    description: 'iPhone 12 chính hãng, pin tốt, ngoại hình đẹp.'
  },
  {
    id: 3,
    name: 'Bàn phím cơ Akko',
    price: 500000,
    description: 'Bàn phím cơ gõ êm, phù hợp học tập và chơi game.'
  }
]

const product = products.find(
  p => p.id === Number(route.params.id)
)

const formatPrice = price =>
  price.toLocaleString('vi-VN') + 'đ'
</script>

<style scoped>
/* === GIỐNG HOME === */
.detail-page {
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem 1rem;
}

.detail-wrapper {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* Ảnh */
.detail-image .placeholder-img {
  height: 320px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border-radius: 8px;
}

/* Thông tin */
.detail-info h1 {
  color: #007bff;
  margin-bottom: 10px;
}

.price {
  color: #d0021b;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.desc {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-buy {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
}

.btn-buy:hover {
  background: #0056b3;
}

/* Mobile */
@media (max-width: 768px) {
  .detail-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
