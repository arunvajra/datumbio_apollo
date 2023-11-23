import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GettingStarted from './GettingStarted';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GettingStarted" element={<GettingStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
