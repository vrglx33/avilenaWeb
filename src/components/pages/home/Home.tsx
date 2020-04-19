import React from 'react';
import {Location} from '@reach/router';
import BackgroundSlider from 'react-background-slider'

const Home = () => (
    <BackgroundSlider
    images={[image1, image2, ...]}
    duration={10} transition={2} />
);

export default Home;
