# 💸 Finance Dashboard Application

![App Screenshot](https://via.placeholder.com/1200x600/556B2F/FFFFFF?text=Finance+Dashboard)

A modern financial dashboard built with **React**, **Redux**, and **Material-UI** featuring secure authentication and transaction management.

---

## 🌐 Live Demo

Access the deployed application:
🔗 [https://yourusername.github.io/finance-dashboard](https://yourusername.github.io/finance-dashboard)

---

## ✨ Features

### 🔐 Secure Authentication

* Login/Register functionality
* Form validation with error handling
* Session-based access control

### 💰 Financial Management

* View income and expense transactions
* Add new transactions with category selection
* Real-time data updates via Redux

### 🎨 Modern UI

* Olive green and white theme
* Responsive layout across devices
* Smooth loading states and notifications
* Clean, accessible interface

---

## 🔑 Login Credentials

Use these test credentials to explore the app:

| Username | Password   | Behavior              |
| -------- | ---------- | --------------------- |
| `Sam`    | `password` | ✅ Successful login    |
| `Mat`    | any value  | ❌ Shows error message |
| Others   | any value  | ❌ Shows error message |

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/finance-dashboard.git
   cd finance-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   ```
   http://localhost:5173
   ```

---

## 🚀 Deployment (GitHub Pages)

1. **Install `gh-pages`**

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Update `package.json`**

   ```json
   "homepage": "https://yourusername.github.io/finance-dashboard",
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy the app**

   ```bash
   npm run deploy
   ```

---

## 📁 Project Structure

```
src/
🔽️ api/               # Mock API services
🔽️ assets/            # Static images and icons
🔽️ components/        # Reusable UI components
    🔽️ Header.jsx     # Top navigation
    🔽️ Footer.jsx     # Bottom footer
🔽️ pages/             # Route-based pages
    🔽️ LoginPage.jsx
    🔽️ RegisterPage.jsx
    🔽️ LandingPage.jsx
🔽️ redux/             # Redux logic
    🔽️ store.js
    🔽️ appSlice.js
🔽️ theme/             # Material UI theme config
    🔽️ theme.js
🔽️ App.jsx            # Root app component
🔽️ main.jsx           # Application entry point
```

---

## 🧰 Technologies Used

* [React](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Material UI](https://mui.com/)
* [Vite](https://vitejs.dev/)
* [React Router](https://reactrouter.com/)

---

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📝 Usage Instructions

### 🧱 Login Page

* Enter username `"Sam"` and password `"password"` for successful login
* Click **"Register here"** to create a new account

### 📊 Dashboard

* View financial summary
* Add transactions using the form
* Refresh data with refresh button
* Logout using the top-right button

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by Your Name</sub>
</div>
