import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';
import Beneficios from './components/Beneficios';
import Planes from './components/Planes';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Menu />
      <Header />
      <Nosotros />
      <Beneficios />
      <Planes />
      <Footer />
    </div>
  );
};

export default Home;
