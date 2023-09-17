import React from 'react';
import HeroSection from './components/hero';
import Guarantee from './components/guarantee';
import Category from './components/cateogry';
import Hosting from './components/hosting';
import CardListing from './components/cardListings';

function Home() {
    return (
        <div>
            <HeroSection />
            <Guarantee />
            <Category />
            <Hosting />
            <CardListing />
        </div>
    );
}

export default Home;
