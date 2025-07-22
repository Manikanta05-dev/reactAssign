import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation if Add to Cart button is clicked
    if (e.target.closest('button')) return;
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }} tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') handleCardClick(e); }}>
      <img src={product.image} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="price">${product.price.toFixed(2)}</div>
      <div className="rating">{'★'.repeat(Math.round(product.rating.rate))} ({product.rating.count})</div>
      <button onClick={e => { e.stopPropagation(); onAddToCart(product); }}>Add to Cart</button>
    </div>
  );
};

export default ProductCard; 