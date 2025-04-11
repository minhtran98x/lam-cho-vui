# ✅ NodeJS Backend - Checklist Siêu Gọn (Chỉ học phần CỐT LÕI)

🎯 Mục tiêu: Viết được backend thực tế (CRUD + Auth + MongoDB)  
➡️ Chuẩn bị tư duy để học NestJS không bị ngợp

---

## 📦 1. Node.js Core + Setup

- [ ] Cài Node.js, npm
- [ ] Hiểu `require`, `module.exports`, `__dirname`
- [ ] Dùng `nodemon` để auto-reload
- [ ] Dùng `.env` với `dotenv`
- [ ] Biết tạo script trong `package.json`
- [ ] Hiểu event loop cơ bản

📚 Udemy: Section 3 + 4

---

## 🚀 2. ExpressJS + Routing

- [ ] Tạo Express server (`express()`, `app.listen`)
- [ ] Viết route: `GET`, `POST`, `PUT`, `DELETE`
- [ ] Xử lý `req.body`, `req.params`, `req.query`
- [ ] Middleware cơ bản (logger, body-parser)
- [ ] Custom error handler

📚 Udemy: Section 5 + 6 + 8 (bỏ phần EJS)

---

## 🧱 3. Tổ chức project (MVC Style)

- [ ] Tách route → controller
- [ ] Tạo các folder: `controllers/`, `routes/`, `models/`
- [ ] Giữ logic ở controller, không viết trong route

📚 Udemy: Section 7

---

## 💾 4. MongoDB + Mongoose

- [ ] Cài MongoDB local hoặc dùng MongoDB Atlas
- [ ] Kết nối Mongoose với app
- [ ] Tạo Schema & Model
- [ ] Viết các CRUD cơ bản với Mongoose
- [ ] Hiểu populate, ref

📚 Udemy: Section 12 + 13

---

## 🔐 5. Authentication với JWT

- [ ] Đăng ký người dùng → hash password (bcrypt)
- [ ] Đăng nhập → so sánh password
- [ ] Tạo token với `jsonwebtoken`
- [ ] Middleware kiểm tra token (Auth middleware)
- [ ] Gắn `req.user` để xác định người dùng

📚 Udemy: Section 15 + 17

---

## 📄 6. REST API + CRUD Thực Chiến

- [ ] Tạo Todo model (gắn với User)
- [ ] API: tạo / lấy / sửa / xóa todo
- [ ] Chỉ cho user thao tác với todo của họ

📚 Udemy: Section 24 + 25

---

## 🔁 7. Pagination

- [ ] Nhận `page`, `limit` từ query
- [ ] Tính `skip = (page - 1) * limit`
- [ ] Truy vấn `.skip(skip).limit(limit)`
- [ ] Trả về `data`, `totalItems`, `page`, `totalPages`

📚 Udemy: Section 21

---

## ✅ Sau checklist này, bạn đã:

✔️ Viết được backend CRUD + Auth  
✔️ Biết tổ chức code theo controller/service  
✔️ Làm API trả JSON chuẩn REST  
✔️ Sẵn sàng sang NestJS (`@Controller`, `@Injectable`, `@UseGuards`...)

---

🔥 Let’s gooooooo! Copy vào VSCode / Notion và bắt đầu checklist nhé 😎
