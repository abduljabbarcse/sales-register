# Finance Dashboard Application

![App Screenshot](https://via.placeholder.com/1200x600/556B2F/FFFFFF?text=Finance+Dashboard)

A modern financial dashboard built with React, Redux, and Material-UI featuring user authentication and transaction management.

## 🌐 Live Demo

Access the deployed application:  
🔗 [https://yourusername.github.io/finance-dashboard](https://yourusername.github.io/finance-dashboard)

## ✨ Features

- **🔐 Secure Authentication**
  - Login/Register functionality
  - Form validation with error handling
  - Session management

- **💰 Financial Management**
  - View income/expense transactions
  - Add new transactions with dropdown selection
  - Real-time data updates

- **🎨 Modern UI**
  - Olive green and white color theme
  - Fully responsive design
  - Loading states and notifications
  - Clean, intuitive interface

## 🔑 Login Credentials

Use these test accounts to explore the application:

| Username | Password  | Expected Result       |
|----------|-----------|-----------------------|
| `Sam`    | `password`| ✅ Successful login    |
| `Mat`    | any value | ❌ Shows error message |
| Any other| any value | ❌ Shows error message |

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/finance-dashboard.git
   cd finance-dashboard
Install dependencies

bash
npm install
Start development server

bash
npm run dev
Open in browser

http://localhost:5173
🚀 Deployment (GitHub Pages)
Install gh-pages:

bash
npm install gh-pages --save-dev
Add to package.json:

json
"homepage": "https://yourusername.github.io/finance-dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
Run deployment:

bash
npm run deploy
📁 Project Structure
src/
├── api/               # Mock API services
├── assets/            # Static assets
├── components/        # Reusable components
│   ├── Header.jsx     # Navigation header
│   └── Footer.jsx     # Page footer
├── pages/             # Application views
│   ├── LoginPage.jsx  # Login screen
│   ├── RegisterPage.jsx # Registration
│   └── LandingPage.jsx # Dashboard
├── redux/             # State management
│   ├── store.js       # Redux store
│   └── appSlice.js    # Redux slice
├── theme/             # UI theme
│   └── theme.js       # MUI theme config
├── App.jsx            # Root component
└── main.jsx           # Entry point
🧰 Technologies Used
React

Redux

MUI

Vite

React Router

📜 Available Scripts
bash
# Start development server
npm run dev

# Create production build
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy
📝 Usage Instructions
Login Page

Enter username "Sam" and password "password" for successful login

Click "Register here" link to create new account

Dashboard

View financial summary table

Add new transactions using the form

Click refresh button to update data

Use logout button to sign out

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

<div align="center"> <sub>Built with ❤️ by Your Name</sub> </div> ```
