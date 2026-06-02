import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  const categories = [
    { name: 'men', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=500' },
    { name: 'women', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500' },
    { name: 'kids', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=500' },
    { name: 'accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' }
  ];

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Define Your Style</h1>
          <p>Discover the New Season Collections</p>
          <Link to="/category/women" className="shop-now-btn">Explore Now</Link>
        </div>
      </section>

      <section className="featured-categories">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link 
              to={`/category/${cat.name}`} 
              key={cat.name} 
              className="category-card"
              style={{ backgroundImage: `url(${cat.img})` }}
            >
              <div className="category-overlay">
                <h3>{cat.name.toUpperCase()}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;