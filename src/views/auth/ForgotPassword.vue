<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2 class="title">Quên Mật Khẩu?</h2>
        <p class="subtitle">
          Đừng lo, hãy nhập email hoặc số điện thoại đã đăng ký để lấy lại mật khẩu nhé.
        </p>
      </div>

      <form @submit.prevent="handleReset" v-if="!isSubmitted">
        <div class="form-group">
          <label>Email hoặc Số điện thoại</label>
          <input 
            type="text" 
            v-model="emailOrPhone" 
            placeholder="Ví dụ: 0987654321 hoặc tuan@gmail.com" 
            required
            :disabled="isLoading"
          />
        </div>

        <button type="submit" class="btn-primary" :disabled="isLoading">
          {{ isLoading ? 'Đang gửi...' : 'Gửi yêu cầu' }}
        </button>
      </form>

      <div v-else class="success-message">
        <div class="icon-check">✓</div>
        <h3>Đã gửi yêu cầu!</h3>
        <p>
          Vui lòng kiểm tra email hoặc tin nhắn SMS gửi đến 
          <b>{{ emailOrPhone }}</b> để đặt lại mật khẩu.
        </p>
      </div>

        <div class="auth-footer">
        <router-link to="/login">
            ← Quay lại trang Đăng nhập
        </router-link>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emailOrPhone = ref('');
const isSubmitted = ref(false); // Trạng thái đã gửi form chưa
const isLoading = ref(false);   // Trạng thái đang tải

const handleReset = () => {
  // Giả lập gọi API gửi mail
  if (!emailOrPhone.value) return;
  
  isLoading.value = true;
  
  setTimeout(() => {
    console.log('Đã yêu cầu reset cho:', emailOrPhone.value);
    isLoading.value = false;
    isSubmitted.value = true; // Chuyển sang màn hình thông báo thành công
  }, 1500);
};

const goBackLogin = () => {
  console.log("Quay về đăng nhập");
  // Sau này cài Router, chỗ này sẽ là router.push('/login')
  // Hiện tại bạn có thể reload lại trang hoặc đổi component ở App.vue
  window.location.reload(); 
};
</script>

<style scoped>
/* Tận dụng lại style của trang Login để đồng bộ */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family: 'Segoe UI', sans-serif;
}

.auth-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center; /* Căn giữa nội dung cho đẹp */
}

.title {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #007bff;
  outline: none;
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

.btn-primary:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.auth-footer {
  margin-top: 2rem;
}

.auth-footer a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.auth-footer a:hover {
  color: #007bff;
}

/* Style cho thông báo thành công */
.success-message {
  animation: fadeIn 0.5s ease;
}

.icon-check {
  width: 60px;
  height: 60px;
  background: #d4edda;
  color: #28a745;
  font-size: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>