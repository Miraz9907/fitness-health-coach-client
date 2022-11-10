import React from 'react';
import Challenges from '../../Challenges/Challenges';
import useTitle from '../../hooks/useTitle';
import About from '../About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Challenges></Challenges>
        </div>
    );
};

export default Home;