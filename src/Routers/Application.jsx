import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import Category from '../Pages/Category';
import Login from '../Pages/Login';
import Orders from '../Pages/Orders';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Application() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const [ordersList, setOrdersList] = useState([]); 
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Form Fields State Parameters
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentType, setPaymentType] = useState('Cash on Delivery (COD)'); // NEW: Payment state
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedInStatus);
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    setCart([]);
    setOrdersList([]);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to cart!`);
  };

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Your cart is empty!");

    const newOrderObj = {
      orderId: Math.floor(100000 + Math.random() * 900000), 
      date: new Date().toLocaleString('en-IN'),
      items: [...cart],
      grandTotal: totalAmount,
      shippingAddress: address,
      contactPhone: phone,
      paymentMethod: paymentType // NEW: Storing selected payment method
    };

    setOrdersList([newOrderObj, ...ordersList]);
    setOrderPlaced(true);
    setCart([]);
    setAddress('');
    setPhone('');
    setPaymentType('Cash on Delivery (COD)'); // Reset to default
  };

  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 6%', background: '#111', color: '#fff', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', textDecoration: 'none' }}>FASHIONHUB</Link>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={{ color: '#fff' }}>Home</Link>
          {isAuthenticated && (
            <>
              <Link to="/category/men" style={{ color: '#fff' }}>Men</Link>
              <Link to="/category/women" style={{ color: '#fff' }}>Women</Link>
              <Link to="/category/kids" style={{ color: '#fff' }}>Kids</Link>
              <Link to="/category/accessories" style={{ color: '#fff' }}>Accessories</Link>
              
              <Link to="/orders" style={{ color: '#d4af37', fontWeight: '600' }}>My Orders ({ordersList.length})</Link>
              
              <button 
                onClick={() => { setIsCartOpen(!isCartOpen); setOrderPlaced(false); }} 
                style={{ background: '#d4af37', color: '#111', border: 'none', padding: '8px 15px', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}
              >
                🛒 Cart ({cart.reduce((a, b) => a + b.quantity, 0)})
              </button>
              <button onClick={handleLogout} style={{ background: 'transparent', color: '#ff4d4d', border: '1px solid #ff4d4d', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
            </>
          )}
          {!isAuthenticated && <Link to="/login" style={{ color: '#fff', background: '#333', padding: '8px 16px', borderRadius: '4px' }}>Login</Link>}
        </div>
      </nav>

      <div style={{ minHeight: '80vh', position: 'relative' }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route 
            path="/category/:type" 
            element={isAuthenticated ? <Category addToCart={addToCart} /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/orders" 
            element={isAuthenticated ? <Orders ordersList={ordersList} /> : <Navigate to="/login" replace />} 
          />
          <Route path="*" element={<Homepage />} />
        </Routes>

        {/* --- CART OVERLAY SIDEBAR --- */}
        {isCartOpen && (
          <div style={{ position: 'fixed', top: 0, right: 0, width: '420px', height: '100vh', background: '#fff', boxShadow: '-5px 0 25px rgba(0,0,0,0.15)', zIndex: 1000, padding: '30px', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#111' }}>Your Order Checkout</h3>
              <button onClick={() => { setIsCartOpen(false); setOrderPlaced(false); }} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            {orderPlaced ? (
              <div style={{ textAlign: 'center', padding: '40px 10px', color: '#2b2b2b' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#27ae60', marginBottom: '10px' }}>Order Confirmed!</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '20px' }}>Your collection items have been saved successfully.</p>
                <Link to="/orders" onClick={() => setIsCartOpen(false)} style={{ display: 'inline-block', background: '#111', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: '600' }}>
                  Go to My Orders
                </Link>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '25px' }}>
                  {cart.length === 0 ? (
                    <p style={{ color: '#777', textAlign: 'center', padding: '20px' }}>Your shopping cart is currently empty.</p>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px dashed #eee' }}>
                        <img src={item.img} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ flex: 1 }}>
                          <h5 style={{ fontWeight: '600', fontSize: '0.95rem' }}>{item.name}</h5>
                          <p style={{ color: '#666', fontSize: '0.85rem' }}>Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {cart.length > 0 && (
                  <div style={{ borderTop: '2px solid #111', paddingTop: '15px', marginBottom: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '1.2rem', marginBottom: '25px' }}>
                      <span>Total Amount:</span>
                      <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                    </div>

                    <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Delivery & Payment Details</h4>
                      
                      <input 
                        type="text" 
                        placeholder="Full Delivery Address" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px', width: '100%' }} 
                        required 
                      />
                      
                      <input 
                        type="tel" 
                        placeholder="10-Digit Mobile Number" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px', width: '100%' }} 
                        required 
                      />

                      {/* NEW: Payment Type Selection Dropdown */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#555' }}>Select Payment Method:</label>
                        <select 
                          value={paymentType} 
                          onChange={(e) => setPaymentType(e.target.value)}
                          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '6px', background: '#fff', fontSize: '0.95rem', cursor: 'pointer' }}
                        >
                          <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                          <option value="UPI (Google Pay / PhonePe)">UPI (Google Pay / PhonePe)</option>
                          <option value="Credit / Debit Card">Credit / Debit Card</option>
                          <option value="Net Banking">Net Banking</option>
                        </select>
                      </div>

                      <button type="submit" style={{ width: '100%', padding: '14px', background: '#d4af37', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Confirm & Place Order
                      </button>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <Footer />
    </Router>
  );
}

export default Application;