import React from 'react';
import './Layout.css'; // Ensure this CSS file exists

const Layout = ({ children, pageName }) => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="logo">
          <img src="/datum_bio_logo2.png" alt="Logo" />
        </div>
        <div className="vertical-line"></div>
        <div className="page-name">{pageName}</div>
        <button className="feedback-button">Provide Feedback</button> {/* Feedback Button */}
      </header>

      <main>
        {children}
      </main>

      <footer className="layout-footer">
        <p>© {currentYear} datum.md Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
