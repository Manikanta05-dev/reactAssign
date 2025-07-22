import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import sportsProducts from '../sportsProducts';

const Home = ({ onAddToCart }) => {
  // Use first 4 as featured
  const featured = sportsProducts.slice(0, 4);

  return (
    <main>
      <Header title="Welcome to SportsStore" subtitle="Your one-stop shop for all sports gear!" />
      <h2 style={{ textAlign: 'center' }}>Featured Sports Items</h2>
      <div className="products-grid">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
};

export default Home; 