import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import sportsProducts from '../sportsProducts';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const product = sportsProducts.find(p => p.id === Number(id));

  if (!product) return <div>Product not found.</div>;

  return (
    <main>
      <Header title={product.title} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
        <img src={product.image} alt={product.title} style={{ width: 220, height: 220, objectFit: 'contain' }} />
        <div style={{ maxWidth: 400 }}>
          <div className="price" style={{ fontSize: '1.5rem' }}>${product.price.toFixed(2)}</div>
          <div className="rating">{'★'.repeat(Math.round(product.rating.rate))} ({product.rating.count})</div>
          <p>{product.description}</p>
          <div style={{ margin: '1rem 0' }}>
            <label>Quantity: </label>
            <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} style={{ width: 60 }} />
          </div>
          <button className="button" onClick={() => onAddToCart(product, qty)}>Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail; 