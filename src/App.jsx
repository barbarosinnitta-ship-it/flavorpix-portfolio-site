import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import Navbar from './components/Navbar.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HolidayPage from './pages/HolidayPage.jsx';
import CupcakesPage from './pages/CupcakesPage.jsx';
import CookiesPage from './pages/CookiesPage.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/holiday" element={<HolidayPage />} />
        <Route path="/cupcakes" element={<CupcakesPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/drinks" element={<PlaceholderPage title="Drinks" />} />
        <Route path="*" element={<PlaceholderPage title="Page" />} />
      </Routes>
    </>
  );
}

export default App;
