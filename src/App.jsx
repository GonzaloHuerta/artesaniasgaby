import React from 'react';
import Slider from './components/Slider';
import Galeria from './components/Galeria';
import Presentacion from './components/Presentacion';
import RedesSociales from './components/RedesSociales';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Slider />
      <div className="container">
        <Presentacion />
        <RedesSociales />
      </div>
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
