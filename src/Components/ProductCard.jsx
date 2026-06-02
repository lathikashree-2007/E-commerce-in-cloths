import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card" style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <div className="product-img-container" style={{ height: '320px', overflow: 'hidden' }}>
        <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="product-details" style={{ padding: '20px' }}>
        <h4 style={{ fontSize: '1.05rem', marginBottom: '8px', color: '#333', fontWeight: '600' }}>{product.name}</h4>
        <p style={{ color: '#111', fontWeight: '700', fontSize: '1.2rem', marginBottom: '15px' }}>₹{product.price.toLocaleString('en-IN')}</p>
        <button 
          onClick={() => addToCart(product)} 
          style={{ width: '100%', padding: '12px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;