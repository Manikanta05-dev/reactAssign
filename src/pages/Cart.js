import React from 'react';
import Header from '../components/Header';

const Cart = ({ cart, onRemove, onQtyChange }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main>
      <Header title="Your Cart" />
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>Your cart is empty.</div>
      ) : (
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src={item.image} alt={item.title} style={{ width: 50, height: 50, objectFit: 'contain' }} />
                    {item.title}
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={e => onQtyChange(item.id, Number(e.target.value))}
                      style={{ width: 50 }}
                    />
                  </td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                  <td>
                    <button className="button" onClick={() => onRemove(item.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'right', marginTop: '1rem', fontWeight: 600 }}>
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart; 