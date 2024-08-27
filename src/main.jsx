// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
