// import React from 'react';

import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPersonBooth } from "react-icons/fa";

import banner from '../../assets/banner.jpg'

const Header = () => {
    return (
        <>
            <Navbar className="container bg-secondary p-2 border border-success shadow-lg fw-bold" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">Foodian Chef-And-Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-white">
                            <Nav.Link href="#features">
                                <Link to="/recipes">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Link to="/blog">Blog</Link>
                            </Nav.Link>
                            <Nav.Link href="#pricin2">About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><FaPersonBooth></FaPersonBooth></Nav.Link>
                            <Nav.Link href="#memes">
                                <Link to='/login'>Log-In</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="conatainer">
                <Card className=" text-white container p-4 shadow-lg my-4 border border-success ">
                    <Card.Img className="img-fluid img-thumbnail  mx-auto" src={banner} alt="Card image" />
                    <Card.ImgOverlay className=" d-flex flex-column justify-content-center align-items-center  ">
                        <Card.Title className="text-center fw-bold display-6">Foodian Chef And Food</Card.Title>
                        <Card.Text className="text-justify px-5 mx-5">
                            Foodian Chef And Food website is an online platform that features culinary expertise and resources for aspiring chefs, food enthusiasts, and industry professionals. From recipes and cooking techniques to restaurant reviews and food trends, a chef website provides a wealth of information for those interested in the art of cooking and dining. It may also offer services such as online classes, recipe books, and cooking tools for purchase.
                        </Card.Text>

                    </Card.ImgOverlay>
                </Card>
            </div>
        </>
    );
};

export default Header;