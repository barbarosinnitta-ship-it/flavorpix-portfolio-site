import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<PlaceholderPage title="About" />} />
      <Route path="/holiday" element={<PlaceholderPage title="Holiday" />} />
      <Route path="/cupcakes" element={<PlaceholderPage title="Cupcakes" />} />
      <Route path="/cookies" element={<PlaceholderPage title="Cookies" />} />
      <Route path="/drinks" element={<PlaceholderPage title="Drinks" />} />
      <Route path="*" element={<PlaceholderPage title="Page" />} />
    </Routes>
  );
}

export default App;
