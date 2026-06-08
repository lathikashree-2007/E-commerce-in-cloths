import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleResetSubmit = (e) => {
    e.preventDefault();
    
    // Simple verification feedback loop
    if (email.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div style={styles.authWrapper}>
      <h2 style={{ marginBottom: '8px', fontSize: '26px', fontWeight: 'bold' }}>Reset Password</h2>
      
      {!isSubmitted ? (
        <>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
            Enter your registered email address below and we'll send you a secure link to reset your account credentials.
          </p>
          
          <form onSubmit={handleResetSubmit} style={styles.formStructure}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address *</label>
              <input 
                type="email" 
                required 
                placeholder="name@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                style={styles.field} 
              />
            </div>

            <button type="submit" style={styles.primaryBtn}>Send Reset Link</button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <div style={{ fontSize: '40px', marginBottom: '15px' }}>📩</div>
          <h4 style={{ margin: '0 0 10px 0', color: '#27ae60' }}>Link Dispatched Successfully!</h4>
          <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>
            We have transmitted an access recovery link to <strong>{email}</strong> if it exists in our core architecture records.
          </p>
        </div>
      )}

      <div style={styles.footerPrompt}>
        Remember your details? <Link to="/login" style={styles.boldLink}>Back to Sign In</Link>
      </div>
    </div>
  );
}

const styles = {
  authWrapper: { maxWidth: '420px', margin: '70px auto', padding: '35px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff', color: '#1a202c', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'sans-serif' },
  formStructure: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' },
  label: { fontSize: '13px', fontWeight: '600', color: '#4a5568' },
  field: { padding: '12px', borderRadius: '5px', border: '1px solid #cbd5e0', fontSize: '14px', backgroundColor: '#fff', color: '#2d3748', outline: 'none' },
  primaryBtn: { padding: '13px', backgroundColor: '#1a202c', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' },
  footerPrompt: { marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #edf2f7', fontSize: '14px', textAlign: 'center', color: '#718096' },
  boldLink: { color: '#3182ce', fontWeight: 'bold', textDecoration: 'none' }
};