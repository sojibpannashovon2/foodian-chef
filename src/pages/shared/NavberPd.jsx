// import React from 'react';

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import { FaPersonBooth } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

const NavberPd = () => {

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
        <Navbar className="container bg-secondary p-2 border border-success shadow-lg fw-bold" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className="fw-bold" href="#home">Foodian Chef-And-Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto text-white">
                        <Nav.Link href="#features">
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        {/* <Nav.Link href="#pricing">
                            <Link to="/blog">Blog</Link>
                        </Nav.Link> */}
                        <NavLink to="/blog" style={isActive => ({
                            color: isActive ? "green" : "blue"
                        })}> Blog</NavLink>


                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center fw-bold gap-2'>
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

                                        <Button variant="secondary">Log-In</Button>
                                    </Link>
                            }


                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavberPd;