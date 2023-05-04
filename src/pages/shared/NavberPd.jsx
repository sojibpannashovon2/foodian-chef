// import React from 'react';

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPersonBooth } from "react-icons/fa";

const NavberPd = () => {
    return (
        <Navbar className="container bg-secondary p-2 border border-success shadow-lg fw-bold" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="fw-bold" href="#home">Foodian Chef-And-Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-white">
                        <Nav.Link href="#features">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <Link to="/blog">Blog</Link>
                        </Nav.Link>
                        <Nav.Link href="#pricin2">About</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><FaPersonBooth></FaPersonBooth></Nav.Link>
                        <Nav.Link href="#memes">

                            <Link to="/login">Log-In</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavberPd;