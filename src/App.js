import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import './App.css';

function App() {
  // Cart state: [{id, title, price, image, qty, ...}]
  const [cart, setCart] = useState([]);
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add to cart handler
  const handleAddToCart = (product, qty = 1) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { ...product, qty }];
    });
  };

  // Remove from cart handler
  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Change quantity in cart
  const handleQtyChange = (id, qty) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
    ));
  };

  // Login handler
  const handleLogin = () => setIsLoggedIn(true);
  // Logout handler (optional)
  const handleLogout = () => setIsLoggedIn(false);

  // Checkout handler (clear cart)
  const handleCheckout = () => setCart([]);

  return (
    <Router>
    <div className="App">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.qty, 0)} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onRemove={handleRemoveFromCart} onQtyChange={handleQtyChange} />} />
          <Route path="/checkout" element={<Checkout isLoggedIn={isLoggedIn} cart={cart} onCheckout={handleCheckout} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
