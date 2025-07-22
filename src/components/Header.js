import React from 'react';

const Header = ({ title, subtitle }) => (
  <header style={{ padding: '2rem 0', textAlign: 'center' }}>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
  </header>
);

export default Header; 