<template>
  <header class="header">
    <!-- Left -->
    <div class="header-left">
      <div class="logo">O2N Market</div>

      <!-- Search -->
      <div class="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm cũ..."
        />
        <button>🔍</button>
      </div>
    </div>

    <!-- Center -->
    <nav class="nav-links">
      <router-link to="/">Trang chủ</router-link>
      <router-link to="/products">Sản phẩm</router-link>
      <router-link to="/about">Giới thiệu</router-link>
    </nav>

    <!-- Right -->
    <div class="header-actions">
      <router-link to="/messages" class="icon-btn" title="Tin nhắn">
        💬
        <span class="badge">2</span>
      </router-link>

      <router-link to="/cart" class="icon-btn" title="Giỏ hàng">
        🛒
        <span class="badge">3</span>
      </router-link>

      <router-link to="/login" class="btn-login">
        Đăng nhập
      </router-link>
    </div>
  </header>
</template>




<script setup>
</script>

<style scoped>
.header {
  position: sticky;   /* 🔥 QUAN TRỌNG */
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}


.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.nav-links a {
  margin: 0 15px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
}

.nav-links a.router-link-active {
  color: #007bff;
}

.btn-login {
  background: #007bff;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* icon giỏ hàng & tin nhắn */
.icon-btn {
  position: relative;
  font-size: 1.4rem;
  text-decoration: none;
}

.icon-btn:hover {
  transform: scale(1.1);
}

/* số lượng */
.badge {
  position: absolute;
  top: -6px;
  right: -8px;
  background: #d0021b;
  color: white;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 10px;
}
/* Left group */
.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Search box */
.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
}

.search-box input {
  border: none;
  outline: none;
  padding: 8px 14px;
  width: 220px;
  font-size: 0.9rem;
  font-family: 'Segoe UI', sans-serif;
}

.search-box button {
  border: none;
  background: #007bff;
  color: white;
  padding: 8px 14px;
  cursor: pointer;
}

.search-box button:hover {
  background: #0056b3;
}

</style>
