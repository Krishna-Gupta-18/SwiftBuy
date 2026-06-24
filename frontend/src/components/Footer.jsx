import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      padding: '40px 20px',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div>
          <h3 style={{ color: '#ea580c', marginBottom: '10px' }}>SwiftBuy</h3>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Premium e-commerce experience for modern shoppers.</p>
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Link to="/about" style={{ color: '#475569', fontSize: '0.95rem' }}>About Us</Link>
          <Link to="/return" style={{ color: '#475569', fontSize: '0.95rem' }}>Return Policy</Link>
          <Link to="/disclaimer" style={{ color: '#475569', fontSize: '0.95rem' }}>Disclaimer</Link>
        </div>

        <div style={{ color: '#64748b', fontSize: '0.95rem' }}>
          &copy; {new Date().getFullYear()} SwiftBuy. All rights reserved.made by @krishna
        </div>
      </div>
    </footer>
  );
};

export default Footer;
