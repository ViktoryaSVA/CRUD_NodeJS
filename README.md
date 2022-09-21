# CRUD NodeJS
# Examples of requests
# User
### POST

### http://localhost:3000/CreateUser
### {
    "login":"testNewUser",
    "email":"testNewUser@gmail.com",
    "password":"testNewUser1234"
### }

### GET
### http://localhost:3000/GetAllUsers

### GET
### http://localhost:3000/GetUserById/_id

### PUT
### http://localhost:3000/UpdateUser/_id

### {
    "email":"new@gmail.com"
### }

### DELETE
### http://localhost:3000/DeleteUser/_id

# ADMIN
### POST
### http://localhost:3000/Admin/RegisterAdmin

### {
    "login":"Admin",
    "email":"Admin@new.com",
    "password":"admin"
### }

### PUT
### http://localhost:3000/Admin/UpdateAdminInfo/_id

### {
    "email":"newAdmin@gewmail.com"
### }

### GET
### http://localhost:3000/Admin/GetAdminInfo
