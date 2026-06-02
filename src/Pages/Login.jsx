import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
      navigate('/');
    } else {
      alert('Please enter valid sign-in details.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay"></div>
      <div className="login-container">
        <div className="login-brand-side">
          <h2>FASHIONHUB</h2>
          <p>Elevate your everyday look with curated traditional & modern style statements.</p>
        </div>
        <div className="login-form-side">
          <div className="login-card">
            <h3>Welcome Back</h3>
            <p>Sign in to unlock exclusive collections</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="login-submit-btn">Explore Collections</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;