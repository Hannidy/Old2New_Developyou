<template>
  <div>
    <Header />

    <div class="about-page">
      <h1>Giới thiệu OLD2NEW</h1>

      <section>
        <h2>Chúng tôi là ai?</h2>
        <p>
          OLD2NEW là sàn thương mại điện tử C2C chuyên mua bán các sản phẩm
          đã qua sử dụng như điện thoại, laptop, đồ gia dụng, phụ kiện công nghệ…
          với tiêu chí minh bạch – tiết kiệm – bền vững.
        </p>
      </section>

      <section>
        <h2>Cơ sở thành lập</h2>
        <p>
          OLD2NEW được thành lập với mong muốn giúp mọi người
          tái sử dụng các món đồ còn tốt, giảm lãng phí
          và tạo ra một môi trường mua bán đồ cũ an toàn, dễ sử dụng.
        </p>
      </section>

      <section>
        <h2>Ưu điểm & thế mạnh</h2>
        <ul>
          <li>✔️ Giao diện đơn giản, dễ sử dụng</li>
          <li>✔️ Người dùng có thể tự đăng bán sản phẩm</li>
          <li>✔️ Giá cả hợp lý, tiết kiệm chi phí</li>
          <li>✔️ Kết nối trực tiếp người mua và người bán</li>
        </ul>
      </section>

      <section>
        <h2>Bạn có thể bán gì trên OLD2NEW?</h2>
        <p>
          Bạn có thể đăng bán các món đồ đã qua sử dụng nhưng vẫn còn tốt như:
          điện thoại cũ, laptop cũ, bàn phím, chuột, tai nghe,
          đồ gia dụng nhỏ… những món đồ bạn không còn nhu cầu sử dụng nữa.
        </p>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: auto;
  padding: 2rem 1rem;
}

.about-page h1 {
  color: #007bff;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 2rem;
}

section h2 {
  color: #007bff;
  margin-bottom: 0.5rem;
}

section p,
section li {
  color: #555;
  line-height: 1.6;
}

ul {
  padding-left: 20px;
}
</style>
