# SwiftBuy 🛒

SwiftBuy is a full-stack eCommerce web application built to provide a seamless online shopping experience. The platform supports two distinct user roles: **Admin** and **User**, with secure authentication and authorization implemented using **JWT (JSON Web Tokens)** and **bcrypt** for password hashing.

## 🚀 Features

### User Features

* User Registration and Login
* Secure Authentication using JWT
* Password Encryption using bcrypt
* Browse Products
* View Product Details
* Add Products to Cart
* Manage Shopping Cart
* Place Orders
* User Profile Management

### Admin Features

* Secure Admin Login
* Add New Products
* Update Existing Products
* Delete Products
* Manage Product Inventory
* View and Manage Platform Products

## 🔐 Authentication & Security

* JWT-based Authentication
* Protected Routes for Users and Admins
* Password Hashing with bcrypt
* Role-Based Access Control (RBAC)
* Secure API Endpoints

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Context API / State Management
* Axios
* CSS / Bootstrap / Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Security

* JSON Web Token (JWT)
* bcrypt

## 📂 Project Structure

```text
SwiftBuy/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/SwiftBuy.git
cd SwiftBuy
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start Backend Server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The application will run on:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:5000
```


## 🎯 Learning Outcomes

This project helped in understanding:

* Full Stack MERN Development
* REST API Development
* Authentication & Authorization
* Role-Based Access Control
* Secure Password Management
* State Management in React
* MongoDB Database Operations
* CRUD Functionality Implementation

## 🔮 Future Enhancements

* Payment Gateway Integration
* Order Tracking System
* Wishlist Functionality
* Product Reviews & Ratings
* Email Notifications
* Advanced Admin Analytics
* Multi-Vendor Support

## 👨‍💻 Author

**Krishna Gupta**

GitHub: https://github.com/Krishna-Gupta-18

---

⭐ If you found this project useful, consider giving it a star on GitHub.
