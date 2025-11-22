import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks.jsx/HowItWorks';
import OurServices from './OurServices/OurServices';
import Brands from './Brands/Brands';
import LiveParcel from './LiveParcel/LiveParcel';
import Merchant from './Merchant/Merchant';
import Reviews from './Reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=> res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <LiveParcel></LiveParcel>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;