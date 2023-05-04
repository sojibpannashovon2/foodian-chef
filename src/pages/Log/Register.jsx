// import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <Container style={{ width: "30rem" }} className=' mx-auto my-2 card p-5 shadow-lg border border-info'>
            <h2 className="mb-3 text-center fw-bold">PLEASE REGISTER</h2>
            <Form >
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name Please</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />

                </Form.Group>
                <Form.Group controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required />

                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept term and condition" />
                </Form.Group>
                <div className='my-4'>
                    <small>Already have an Account <Link to="/login">  Please Log-In</Link></small>
                </div>

                <Button variant="primary" type="submit">
                    Register
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

export default Register;