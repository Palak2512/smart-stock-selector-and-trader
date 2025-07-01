# 💹 Equinex – Smart Stock Selector & Trader


## 🧠 Overview

> **An intelligent full-stack stock trading simulation platform inspired by Zerodha**

**Equinex** is a dynamic and modern **MERN stack** based simulated trading platform that empowers users to explore real-world stock trading features. Designed for both learning and experimentation, Equinex offers:

🔐 **Secure authentication**, 📊 **interactive charts**, 🧾 **portfolio tracking**, and 🖥️ a beautifully animated **user dashboard**.

---

## 🌟 Key Features

✨ **Responsive Multi-Page Frontend**  
 Professional branding with seamless device adaptability using Material-UI and Bootstrap.

📈 **Trading Dashboard**  
 User-friendly interface to manage trades, orders, positions, and portfolios.

🔒 **Secure Authentication**  
 User signup/login with robust Passport.js-based security.

🛠️ **Comprehensive Trading Tools**  
 Real-time monitoring of orders, funds, holdings, and more.

📊 **Dynamic Charts & Animations**  
 Engaging and interactive visualizations using Chart.js and Framer Motion.

☁️ **Cloud Database Integration**  
 MongoDB Atlas for reliable and scalable cloud storage.

🧩 **Clean and Modular Codebase**  
 Well-structured and easy-to-maintain project architecture.

---

## 🧰 Tech Stack

| 🏗️ Layer             | 🛠️ Technologies Used                                         |
|----------------------|-------------------------------------------------------------|
| 💻 Frontend          | React.js, Material-UI, Bootstrap, Framer Motion, JavaScript |
| 🔙 Backend           | Node.js, Express.js, Passport.js (Authentication)           |
| ☁️ Database          | MongoDB Atlas (Cloud-hosted NoSQL)                         |
| 📈 Data Visualization| Chart.js                                                    |
| ✅ Testing           | Jest                                                        |

---

## 🧱 System Architecture


- **Frontend :** User-facing website for signup, login, and landing pages  
- **Dashboard :** Trading dashboard interface for order and portfolio management  
- **Backend API :** RESTful API server handling and database operations  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- MongoDB Atlas account with an active cluster  

### Installation Steps

1. **Clone the repository**  
```bash
git clone https://github.com/Palak2512/smart-stock-selector-and-trader.git
cd smart-stock-selector-and-trader
```
2. **Install dependencies**  
```
cd frontend && npm install
cd ../dashboard && npm install
cd ../backend && npm install
```
3. **Configure environment variables**  
Create a `.env` file inside the `backend` folder with:  
```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```
4. **Run the servers**  
Open  terminal window and run:  
```
cd backend && npm start
cd frontend && npm start
cd dashboard && npm start
```

## Future Enhancements

- 🤖 AI-powered stock suggestion chatbot for personalized trading advice  
- 📲 Mobile app version for trading on the go  




