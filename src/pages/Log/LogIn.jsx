// import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const LogIn = () => {
    return (
        <Container style={{ width: "25rem" }} className=' mx-auto my-5 card p-5 shadow-lg border border-info'>
            <h2 className="mb-3 text-center fw-bold">PLEASE LOG-IN</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className='my-4'>
                    <small>Are you new to the Website?      <Link to="/register">  Registration</Link></small>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
            <div className='text-center'>
                <Form.Text className="text-sucess ">
                    success
                </Form.Text>
                <br />

                <Form.Text className="text-danger">
                    error
                </Form.Text>
            </div>
        </Container>
    );
};

export default LogIn;