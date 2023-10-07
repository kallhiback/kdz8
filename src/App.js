import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Slider from './pages/Slider';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;