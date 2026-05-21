import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AcService from './pages/services/AcService';
import WashingMachineService from './pages/services/WashingMachineService';
import RefrigeratorService from './pages/services/RefrigeratorService';
import MicrowaveService from './pages/services/MicrowaveService';
import FloatingButtons from './components/FloatingButtons';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/ac" element={<AcService />} />
        <Route path="/services/washing-machine" element={<WashingMachineService />} />
        <Route path="/services/refrigerator" element={<RefrigeratorService />} />
        <Route path="/services/microwave" element={<MicrowaveService />} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </Router>
  );
}

export default App;
