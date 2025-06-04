# Trello Clone with NestJS

Đây là skeleton ứng dụng Trello clone sử dụng NestJS. Mã nguồn được viết bằng TypeScript với cấu trúc module đơn giản (board, column, card).

## Cài đặt

1. Cài Node.js >= 14 và npm.
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Chạy ứng dụng ở chế độ phát triển:
   ```bash
   npm run start:dev
   ```

## Cấu trúc

- `src/boards`: Quản lý board
- `src/columns`: Quản lý column thuộc board
- `src/cards`: Quản lý card thuộc column

Tất cả dữ liệu hiện đang lưu trong bộ nhớ (mảng). Bạn có thể mở rộng bằng cách kết nối với cơ sở dữ liệu thực tế.
