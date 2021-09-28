import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';

import phone from '../../images/phone-mockup.png';
import bg_img from '../../images/bg.jpg';

const Headers = () => {
    return (
        <>
            <div className="overlay">
            </div>
            <div className="header"
                style={{ backgroundImage: `url(${bg_img})` }}>
                <Navigation bg={bg_img} />
                <Hero />
            </div>
        </>
    )
}

export default Headers
