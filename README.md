# EasyTutorMobile
ứng dụng tìm gia sư (update lại vì bản cũ bị lỗi log)

## Setup trước khi chạy ứng dụng

### 1. Tắt nginx server đang chạy trong máy

- Kiểm tra trạng thái chạy của nginx:

  `systemctl status nginx`
  
- Dừng nginx:

  `sudo systemctl stop nginx`
 
 ### 2. Mở xampp control panel và start server

     sudo /opt/lampp/manager-linux-x64.run
 
 ### 3. Chạy Laravel Server
 
    php artisan serve
