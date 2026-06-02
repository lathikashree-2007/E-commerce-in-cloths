import React from 'react';

function Orders({ ordersList }) {
  return (
    <div className="orders-page" style={{ padding: '40px 6%', minHeight: '80vh' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '30px', textAlign: 'center', letterSpacing: '1px' }}>
        YOUR ORDER HISTORY
      </h2>

      {ordersList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>📦</div>
          <h3 style={{ fontSize: '1.25rem', color: '#333', marginBottom: '8px' }}>No Orders Placed Yet</h3>
          <p style={{ color: '#777' }}>Once you confirm checkout from your cart panel, your order info will populate here.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', maxWidth: '800px', margin: '0 auto' }}>
          {ordersList.map((order) => (
            <div key={order.orderId} style={{ background: '#fff', borderRadius: '8px', border: '1px solid #eee', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              
              {/* Header Meta Status Block */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', color: '#111', fontWeight: '700' }}>Order #{order.orderId}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#777', marginTop: '3px' }}>Placed on: {order.date}</p>
                </div>
                <span style={{ background: 'rgba(212, 175, 55, 0.12)', color: '#b39224', padding: '6px 14px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '600' }}>
                  Processing Shipment
                </span>
              </div>

              {/* Delivery and Payment Mode Information */}
              <div style={{ marginBottom: '25px', fontSize: '0.9rem', color: '#555', background: '#f9f9f9', padding: '15px', borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p><strong>Deliver To:</strong> {order.shippingAddress}</p>
                <p><strong>Contact Mobile:</strong> +91 {order.contactPhone}</p>
                {/* NEW FIELD RENDERED HERE */}
                <p><strong>Payment Mode:</strong> <span style={{ color: '#d4af37', fontWeight: '600' }}>{order.paymentMethod}</span></p> 
              </div>

              {/* Items Summary */}
              <div style={{ marginBottom: '15px' }}>
                <h5 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '10px', color: '#111', letterSpacing: '0.5px' }}>ITEMS ORDERED</h5>
                {order.items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', padding: '8px 0', borderBottom: '1px solid #f6f6f6' }}>
                    <span style={{ color: '#555' }}>
                      {item.name} <strong style={{ color: '#111' }}>× {item.quantity}</strong>
                    </span>
                    <span style={{ fontWeight: '600' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>

              {/* Grand Total Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid #eee', fontWeight: '700', fontSize: '1.1rem' }}>
                <span>Grand Total:</span>
                <span style={{ color: '#111', fontSize: '1.3rem' }}>₹{order.grandTotal.toLocaleString('en-IN')}</span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;