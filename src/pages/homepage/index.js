import React from 'react';
import HeroSection from './components/hero';
import Guarantee from './components/guarantee';
import Category from './components/category';
import Host from './components/host';

function Home() {
  return (
    <div>
      <HeroSection />
      <Guarantee />
      <Category />
      <Host />
    </div>
  );
}

export default Home;
