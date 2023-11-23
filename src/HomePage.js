import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './HomePage.css';

const HomePage = () => {

  const navigate = useNavigate();

  const handleStartBuildingClick = () => {
    navigate('/GettingStarted'); // Navigate to Getting Started page
  };

  const currentYear = new Date().getFullYear(); 

  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  return (
    <div 
      className="homepage"
      style={{ 
        backgroundImage: 'url(/background.jpeg)', // Setting the background image directly here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <div className="logo">
        <img src="/datum_bio_logo3.png" alt="Logo" />
      </div>

      <button className="contact-us-btn" onClick={toggleContactPopup}>
        Contact Us
      </button>

      {showContactPopup && (
        <div className="contact-popup">
          <p>hello@datum.bio</p>
        </div>
      )}


      <h1 className="homepage-heading">
        Welcome to Apollo Dev Hub
      </h1>

      <p className="homepage-tagline">
        Build on top of connected health data with ease
      </p>

      <button className="start-building-btn" onClick={handleStartBuildingClick}>
        Start Building
      </button>

      <div className="cards-container">
        <Card className="homepage-card" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', color: 'white' }}>
          <CardContent>
            <Typography variant="h5">Data Exploration</Typography>
            <Typography variant="body1">
              Explore connected datasets with simplicity on Jupyter Hub.
            </Typography>
          </CardContent>
        </Card>

        <Card className="homepage-card" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', color: 'white' }}>
          <CardContent>
            <Typography variant="h5">Flexible Integration</Typography>
            <Typography variant="body1">
              Call our API to get direct data access to your applications.
            </Typography>
          </CardContent>
        </Card>

        <Card className="homepage-card" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', color: 'white' }}>
          <CardContent>
            <Typography variant="h5">Comprehensive Documentation</Typography>
            <Typography variant="body1">
              Easily understand our datasets and biomedical concepts.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <footer className="layout-footer">
        <p>© {currentYear} datum.md Inc. All Rights Reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
