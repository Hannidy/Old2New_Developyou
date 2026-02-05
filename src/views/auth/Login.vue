<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2 class="title">{{ isRegister ? 'Đăng Ký Tài Khoản' : 'Đăng Nhập' }}</h2>
        <p class="subtitle">Chào mừng bạn đến với O2N - Mua cũ đổi mới</p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Email hoặc Số điện thoại</label>
          <input 
            type="text" 
            v-model="formData.identifier" 
            placeholder="Nhập email hoặc số điện thoại" 
            required
          />
        </div>

        <div class="form-group">
          <label>Mật khẩu</label>
          <input 
            type="password" 
            v-model="formData.password" 
            placeholder="Nhập mật khẩu" 
            required
          />
        </div>

        <div class="form-group" v-if="isRegister">
          <label>Xác nhận mật khẩu</label>
          <input 
            type="password" 
            v-model="formData.confirmPassword" 
            placeholder="Nhập lại mật khẩu" 
            required
          />
        </div>

        <div class="forgot-pass" v-if="!isRegister">
          <router-link to="/forgot-password">Quên mật khẩu?</router-link>
        </div>

        <button type="submit" class="btn-primary">
          {{ isRegister ? 'Đăng Ký' : 'Đăng Nhập' }}
        </button>
      </form>

      <div class="divider">
        <span>Hoặc đăng nhập bằng</span>
      </div>

      <button type="button" class="btn-google">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
        Tiếp tục với Google
      </button>

      <div class="auth-footer">
        <p v-if="!isRegister">
          Bạn chưa có tài khoản? 
          <a href="#" @click.prevent="isRegister = true">Đăng ký ngay</a>
        </p>
        <p v-else>
          Bạn đã có tài khoản? 
          <a href="#" @click.prevent="isRegister = false">Đăng nhập</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Trạng thái chuyển đổi giữa Đăng nhập và Đăng ký
const isRegister = ref(false);

const formData = reactive({
  identifier: '',
  password: '',
  confirmPassword: ''
});

const handleSubmit = () => {
  if (isRegister.value) {
    console.log('Đang đăng ký với:', formData);
    // Gọi API đăng ký ở đây
  } else {
    console.log('Đang đăng nhập với:', formData);
    // Gọi API đăng nhập ở đây
  }
};

const goToForgot = () => {
  alert("Chuyển hướng đến trang quên mật khẩu...");
};
</script>

<style scoped>
/* Màu sắc chủ đạo: Xanh dương (Trust) */
:root {
  --primary-color: #007bff; /* Xanh dương tin cậy */
  --primary-hover: #0056b3;
  --bg-color: #f0f2f5;
  --text-color: #333;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5; /* Màu nền nhẹ nhàng */
  font-family: 'Segoe UI', sans-serif;
}

.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
  box-sizing: border-box; /* Quan trọng để không bị vỡ layout */
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
}

.forgot-pass {
  text-align: right;
  margin-bottom: 1rem;
}

.forgot-pass a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.85rem;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.divider {
  margin: 1.5rem 0;
  text-align: center;
  position: relative;
}

.divider span {
  background: white;
  padding: 0 10px;
  color: #666;
  font-size: 0.85rem;
  position: relative;
  z-index: 1;
}

.divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #eee;
  z-index: 0;
}

.btn-google {
  width: 100%;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  transition: background 0.2s;
}

.btn-google:hover {
  background-color: #f9f9f9;
}

.auth-footer {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}

.auth-footer a {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
}
</style>