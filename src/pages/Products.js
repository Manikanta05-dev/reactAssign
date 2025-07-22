import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import sportsProducts from '../sportsProducts';

const sportsCategories = [
  'football', 'cricket', 'basketball', 'tennis', 'fitness', 'yoga', 'swimming', 'badminton', 'cycling', 'running'
];

const Products = ({ onAddToCart }) => {
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 8;

  useEffect(() => {
    let data = [...sportsProducts];
    if (search) {
      data = data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (category !== 'all') {
      data = data.filter(p => p.category && p.category.toLowerCase().includes(category));
    }
    if (sort === 'asc') {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      data.sort((a, b) => b.price - a.price);
    }
    setFiltered(data);
    setPage(1);
  }, [search, category, sort]);

  // Pagination
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <main>
      <Header title="All Sports Products" />
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search sports items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 200 }}
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All Sports</option>
          {sportsCategories.map(cat => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className="products-grid">
        {paginated.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className="button"
            style={{ margin: '0 0.25rem', background: i + 1 === page ? '#388e3c' : undefined }}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Products; 