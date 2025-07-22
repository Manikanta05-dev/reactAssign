import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('https://fakestoreapi.com/auth/login', form);
      setLoading(false);
      onLogin();
      navigate('/');
    } catch {
      setLoading(false);
      setError('Invalid credentials.');
    }
  };

  return (
    <main>
      <Header title="Login" />
      <form onSubmit={handleSubmit} style={{ maxWidth: 350, margin: '0 auto' }}>
        <div className="form-group">
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </div>
        {error && <div style={{ color: 'red', marginBottom: 10 }}>{error}</div>}
        <button className="button" type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </main>
  );
};

export default Login; 