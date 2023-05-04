// import React from 'react';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LogIn = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(authContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null)

    const navigate = useNavigate();
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/recipes'

    const handleLogInSubmittButton = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully Register !!!");
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    // Google and GitHub auth

    const handleGoogleLog = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGitHubLog = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container style={{ width: "25rem" }} className=' mx-auto my-5 card p-5 shadow-lg border border-info'>
            <h2 className="mb-3 text-center fw-bold">PLEASE LOG-IN</h2>
            <Form onSubmit={handleLogInSubmittButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <div className='my-4'>
                    <small>Are you new to the Website?      <Link to="/register">  Registration</Link></small>
                </div>

                <Button className='mb-3' variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <small>Are you want to Log In with  Authorized App ??</small>

                <div className='d-flex d-flex justify-content-center align-items-center fw-bold gap-5 mt-3'>
                    <Button onClick={handleGoogleLog} variant="outline-success"> <span> <FaGoogle></FaGoogle></span> Google</Button>
                    <Button onClick={handleGitHubLog} variant="outline-success"> <span><FaGithub></FaGithub></span> GitHub</Button>
                </div>



            </Form>
            <div className='text-center'>
                <Form.Text className="text-sucess ">
                    {success}
                </Form.Text>
                <br />

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </div>
        </Container>
    );
};

export default LogIn;