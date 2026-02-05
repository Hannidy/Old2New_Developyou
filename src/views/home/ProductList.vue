<template>
  <div>
    <!-- Header full width -->
    <Header />

    <!-- Chỉ phần nội dung mới bị bó -->
    <div class="products-page">
      <h1>Tất cả sản phẩm</h1>

      <div class="product-grid">
        <div
          class="product-card"
          v-for="product in products"
          :key="product.id"
        >
          <div class="placeholder-img">Ảnh</div>
          <h3>{{ product.name }}</h3>
          <p class="price">{{ formatPrice(product.price) }}</p>

          <router-link
            :to="`/products/${product.id}`"
            class="btn-detail"
          >
            Xem chi tiết
          </router-link>
        </div>
      </div>
    </div>

    <!-- Footer full width -->
    <Footer />
  </div>
</template>


<script setup>
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'

const products = [
  { id: 1, name: 'Laptop Gaming ASUS TUF', price: 15000000 },
  { id: 2, name: 'iPhone 12 64GB', price: 8500000 },
  { id: 3, name: 'Bàn phím cơ Akko', price: 500000 }
]

const formatPrice = (price) =>
  price.toLocaleString('vi-VN') + 'đ'
</script>
<style>
.products-page {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.products-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #007bff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.placeholder-img {
  height: 160px;
  background: #eee;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  color: #d0021b;
  font-weight: bold;
  font-size: 1.1rem;
}

.btn-detail {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 16px;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 4px;
  text-decoration: none;
}

.btn-detail:hover {
  background: #007bff;
  color: white;
}
</style>
