import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ isLoggedIn, cart, onCheckout }) => {
  const [form, setForm] = useState({ name: '', address: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://fakestoreapi.com/carts', {
        userId: 1,
        date: new Date().toISOString(),
        products: cart.map(item => ({ productId: item.id, quantity: item.qty }))
      });
      setLoading(false);
      onCheckout();
      alert('Order placed successfully!');
      navigate('/');
    } catch {
      setLoading(false);
      alert('Checkout failed.');
    }
  };

  return (
    <main>
      <Header title="Checkout" />
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} required />
        </div>
        <button className="button" type="submit" disabled={loading}>{loading ? 'Placing Order...' : 'Place Order'}</button>
      </form>
    </main>
  );
};

export default Checkout; 