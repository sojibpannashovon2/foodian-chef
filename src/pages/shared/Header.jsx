// import React from 'react';

import { Button, Carousel, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";


import banner from '../../assets/banner.png'
import banner2 from '../../assets/Brown Minimalist Pizza Grand Opening Banner Landscape.png'
import banner3 from '../../assets/Blue Pink Gradient Fashion Banner.png'
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(authContext)
    // console.log(name);


    const handleLogoutButton = () => {
        logOut()
            .then(() => {
                alert("Sign-Out Successfully")
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <>
            <Navbar className="container bg-info p-2  border border-dark shadow-lg fw-bold rounded-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="fw-bold" href="#home">Foodian Chef-And-Food</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            {/* <Nav.Link href="#features" >
                                <Link to="/recipes">Home</Link>

                            </Nav.Link> */}
                            <NavLink to='/recipe' style={isActive => ({
                                color: isActive ? "green" : "blue"
                            })}> Home</NavLink>
                            <Nav.Link href="#pricing">
                                <Link to="/blog">Blog</Link>
                            </Nav.Link>


                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center fw-bold'>
                            {/* {
                                user && <Nav.Link href="#deets"><FaPersonBooth style={{ fontSize: "2rem" }}></FaPersonBooth></Nav.Link>
                            } */}

                            <div className="">
                                {
                                    user && <p> <img className="rounded-circle" style={{ height: "40px", width: "40px" }} src={user?.photoURL} alt="Not Found" /></p>
                                }
                            </div>

                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user ? <><span className="me-2">{user.email}</span><Button variant="success" onClick={handleLogoutButton}>Log-Out</Button></> :

                                        <Link to="/login">

                                            <Button variant="success">Log-In</Button>
                                        </Link>
                                }


                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div > <Carousel className="container mt-3" variant="dark">
                <Carousel.Item>
                    <img
                        className="img-thumbnail d-block w-100 border border-success rounded-5"
                        src={banner2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item >
                    {/* <Carousel.Caption className=" mb-5 pb-5">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                    <img
                        className="img-thumbnail d-block w-100 border border-success rounded-5"
                        src={banner3}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-thumbnail d-block w-100 border border-success rounded-5"
                        src={banner}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel></div>

        </>
    );
};

export default Header;