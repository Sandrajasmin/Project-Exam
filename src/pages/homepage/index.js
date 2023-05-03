import React from 'react';
import HeroSection from './components/hero';
import Guarantee from './components/guarantee';
import Category from './components/category';
import Host from './components/host';
import CardListing from './components/cardListing';

function Home() {
    return (
        <div>
            <HeroSection />
            <Category />
            <Guarantee />
            <Host />
            <CardListing />
        </div>
    );
}

export default Home;
