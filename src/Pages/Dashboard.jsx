import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1>User Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dash-card summary-card">
          <h3>Welcome Back!</h3>
          <p className="user-email">guest@fashionhub.com</p>
        </div>
        <div className="dash-card status-card">
          <h3>Active Cart Items</h3>
          <p className="stat-number">0</p>
        </div>
        <div className="dash-card orders-card">
          <h3>Past Orders</h3>
          <p className="stat-number">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;