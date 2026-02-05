<template>
  <div>
    <Header />

    <div class="profile-page">
      <h1>Trang cá nhân</h1>

      <div class="profile-card">
        <div class="avatar">👤</div>

        <div class="info">
          <p><strong>Tên người dùng:</strong> Nguyễn Văn A</p>
          <p><strong>Email:</strong> nguyenvana@gmail.com</p>
          <p><strong>Số điện thoại:</strong> 0123 456 789</p>
        </div>

        <div class="actions">
          <button class="btn-primary">Chỉnh sửa thông tin</button>
          <button class="btn-outline">Đăng xuất</button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: auto;
  padding: 2rem 1rem;
}

.profile-page h1 {
  color: #007bff;
  margin-bottom: 1.5rem;
}

.profile-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.info p {
  margin: 8px 0;
  color: #555;
}

.actions {
  margin-top: 1.5rem;
}

.btn-primary {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.btn-outline {
  background: white;
  border: 1px solid #007bff;
  color: #007bff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
