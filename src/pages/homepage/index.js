import React from 'react';
import HeroSection from './components/hero';
import Guarantee from './components/guarantee';
import Category from './components/category';

function Home() {
  return (
    <div>
      <HeroSection />
      <Guarantee />
      <Category />
    </div>
  );
}

export default Home;
