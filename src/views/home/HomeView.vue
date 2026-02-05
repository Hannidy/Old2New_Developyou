<template>
  <div class="home-container">
    <!-- dùng lại Header đã tạo -->
    <Header />

    <!-- Banner -->
    <section class="banner">
      <h1>Chào mừng đến với OLD2NEW</h1>
      <p>Sàn thương mại điện tử C2C - Mua cũ đổi mới, uy tín hàng đầu.</p>

      <router-link to="/products" class="btn-explore">
        Khám phá ngay
      </router-link>
    </section>

    <!-- Sản phẩm nổi bật -->
    <section class="products">
      <h2>Sản phẩm nổi bật</h2>

      <div class="product-grid">
        <div
          class="product-card"
          v-for="product in products"
          :key="product.id"
        >
          <div class="placeholder-img">Ảnh SP</div>
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

      <div class="view-all">
        <router-link to="/products">
          Xem tất cả sản phẩm →
        </router-link>
      </div>
    </section>
    <section class="about-preview">
  <h2>Về OLD2NEW</h2>
  <p>
    OLD2NEW là nền tảng mua bán đồ cũ C2C,
    giúp bạn bán lại những món đồ không còn sử dụng
    và tìm kiếm sản phẩm chất lượng với giá hợp lý.
  </p>

  <router-link to="/about" class="btn-detail">
    Xem thêm →
  </router-link>
</section>


    <!-- dùng lại Footer đã tạo -->
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
.home-container {
  /* font-family: 'Segoe UI', sans-serif; */
  color: #333;
}

/* Banner */
.banner {
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  text-align: center;
  padding: 4rem 1rem;
}

.banner h1 {
  font-size: 2.5rem;
}

.btn-explore {
  display: inline-block;
  margin-top: 1rem;
  background: white;
  color: #007bff;
  padding: 10px 25px;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
}

/* Products preview */
.products {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
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
  transition: all 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.placeholder-img {
  height: 150px;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.price {
  color: #d0021b;
  font-weight: bold;
}

.btn-detail {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 14px;
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