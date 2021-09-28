import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = ({ phone }) => {
    return (
        <Container className="hero">
            <div className="left">
                <h1>
                    Github Search
                </h1>
                <p>
                    Are you tired of browsing through a tons of repos ? git search helps you to find useful information about your potential employee on a single click,
                    fast search, easy to navigate, user friendly.
                </p>
                <Link>
                    <button className="abt_btn">About Us</button>
                </Link>
            </div>
            <div className="right">
                <img src={phone} alt="phone" className="phone" />
            </div>
        </Container>
    )
}

export default Hero
