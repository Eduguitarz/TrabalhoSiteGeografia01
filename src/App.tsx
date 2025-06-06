import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CompanyHistory from './components/CompanyHistory';
import ProductGrid from './components/ProductGrid';
import Founders from './components/Founders';
import Footer from './components/Footer';
import './animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Welcome />
      <CompanyHistory />
      <ProductGrid />
      <Founders />
      <Footer />
    </div>
  );
}

export default App;