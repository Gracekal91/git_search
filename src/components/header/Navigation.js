import React from 'react'
import { Link } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <nav>
            <Container className="navContent">
                <div className="logo">
                    <SiGithub />
                </div>
                <div className="menu">
                    <Link to="/" className="menu_item">About</Link>
                    <Link className="menu_item">V1.0.0.1</Link>
                </div>
            </Container>
        </nav>
    )
}

export default Navigation
