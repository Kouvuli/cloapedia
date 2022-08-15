# Đồ án cá nhân: Cloapedia

## 1. Mô tả
Website xem tin tức, thời trang, lối sống,... của tạp chí Cloapedia


## 2. Thành viên

| Name             | ID       |
| ---------------- | -------- |
| Lê Đức Tâm       | 19120644 |


## 3. Hướng dẫn chạy chương trình

### Chạy website client (port: 3000):

-   Ở thư mục gốc, chạy lệnh:
    `cd client && npm i && npm start`
-   Tài khoản đăng nhập:
    -   Username: godofwar
    -   Password: 1234

### Thông tin Database (PostgreSQL):
| Name     | Database Credential                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host     | ec2-52-22-136-117.compute-1.amazonaws.com                                                                                                                |
| Database | d79eaot5g8kepb                                                                                                                                           | 
| User     | uhktxkcnjqsfcy                                                                                                                                           |
| Port     | 5432                                                                                                                                                     | 
| Password | afbd21c5aac9f19ed81b814466bebea1f6f06a26213a85397156d231439e4a18

## 4. Deploy endpoints:
-   Client: https://splendid-client-xi.vercel.app
-   Server: https://splendid-app-server.herokuapp.com/api/v1

## 5. API Documentations:
-   Sử dụng 2 API: Guardian API, Cloapedia API.
-   Guardian API dùng để lấy dữ liệu về tin tức từ báo TheGuardian
-   Cloapedia API dùng để quản lý người dùng và các thông tin blog, comment,...
-   Xem thêm thông tin server ở file README.md trong ./server.

