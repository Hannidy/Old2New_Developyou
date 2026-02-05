import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Đảm bảo đường dẫn này đúng

// 1. Tạo app trước
const app = createApp(App)

// 2. Cài đặt Router VÀO app (Phải làm bước này trước khi mount)
app.use(router)

// 3. Cuối cùng mới Mount (Chạy app)
app.mount('#app')