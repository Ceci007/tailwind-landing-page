import React from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Questions from './components/Questions/Questions';

function App() {
  return (
    <div className="relative w-full">
      <Navbar />
      <Header />
      <Features />
      <Pricing />
      <Questions />
    </div>
  );
}

export default App;
