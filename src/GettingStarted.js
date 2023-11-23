import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Layout from './Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './GettingStarted.css';

const GettingStarted = () => {
  const navigate = useNavigate();


  const navigateToExplore = () => {
    window.location.href = 'http://20.228.109.190'; // Redirect to the Node.js proxy endpoint
  };

  const navigateToDocumentation = () => {
    window.location.href = 'http://localhost:3001/'; // Redirect to the Node.js proxy endpoint
  };

  return (
    <Layout pageName="Getting Started">
      <div className="cards-container">
        {/* Explore in Notebook */}
        <Card 
          className="custom-card" 
          sx={{ backgroundColor: 'rgba(229, 249, 236, 0.18)' }} 
          onClick={navigateToExplore}>
          
          <CardContent>
            <Typography variant="h5" component="div" className="custom-typography">
              Explore in Notebook
            </Typography>
            <hr className="divider" />
            <Typography className="subheader">Lorem ipsum dolor sit amet</Typography>
            <IconButton className="card-arrow" style={{ color: 'white', backgroundColor: '#24543D', borderRadius: '50%' }}>
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Card>

        {/* API Access */}
        <Card 
          className="custom-card"
          sx={{ backgroundColor: 'rgba(229, 249, 236, 0.18)' }} >

          <CardContent>
            <Typography variant="h5" component="div" className="custom-typography">
              API Access
            </Typography>
            <hr className="divider" />
            <Typography className="subheader">Lorem ipsum dolor sit amet</Typography>
            <IconButton className="card-arrow" style={{ color: 'white', backgroundColor: '#24543D', borderRadius: '50%' }}>
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Card>

        {/* Documentation */}
        <Card 
          className="custom-card"
          sx={{ backgroundColor: 'rgba(229, 249, 236, 0.18)' }}
          onClick={navigateToDocumentation}>

          <CardContent>
            <Typography variant="h5" component="div" className="custom-typography">
              Documentation
            </Typography>
            <hr className="divider" />
            <Typography className="subheader">Lorem ipsum dolor sit amet</Typography>
            <IconButton className="card-arrow" style={{ color: 'white', backgroundColor: '#24543D', borderRadius: '50%' }}>
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default GettingStarted;
