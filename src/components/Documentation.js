import React from 'react';
 // Ensure you have the CSS file in your project

const Documentation = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header fixed-top">
      {/* Header content here */}
    </header>
  );
};

const MainContent = () => {
  return (
    <div className="page-content">
      <div className="container">
        {/* Main content here */}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer content here */}
    </footer>
  );
};

export default Documentation;
