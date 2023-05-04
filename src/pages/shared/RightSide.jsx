// import React from 'react';
import { Button, ListGroup } from "react-bootstrap";

import {
    FaGoogle,
    FaGithub,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare
} from 'react-icons/fa';

import pic1 from "../../assets/6-ingredient.jpg"
import pic2 from '../../assets/b-inteligent.jpg'
import pic3 from '../../assets/default.jpg'
import { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";

// import Qzone from "../Qzone/Qzone";
// import bg from "../../../assets/bg.png"

const RightSide = () => {
    const { googleSignIn } = useContext(authContext);

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
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button onClick={handleGoogleLog} className="mb-3 px-5" variant="outline-primary"> <FaGoogle></FaGoogle> Log In With Google</Button>
                <Button className="px-5" variant="outline-secondary"><FaGithub></FaGithub> Log In With Github</Button>
            </div>
            <div className="my-3">
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className="w-full ps-5"> <span className="me-2"><FaFacebookSquare></FaFacebookSquare> </span> Facebook</ListGroup.Item>
                    <ListGroup.Item className="w-full ps-5"> <span className="me-2"> <FaTwitterSquare></FaTwitterSquare></span> Twitter</ListGroup.Item>
                    <ListGroup.Item className="w-full ps-5"> <span className="me-2"><FaInstagramSquare></FaInstagramSquare></span> Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <div className="mt-3 card text-danger fw-bold  w-full">
                <img className="w-full " src={pic1} alt="" />

            </div>
            <div className="mt-3 card text-danger fw-bold  w-full">
                <img className="w-full " src={pic2} alt="" />

            </div>
            <div className="mt-3 card text-danger fw-bold  w-full">
                <img className="w-full " src={pic3} alt="" />

            </div>
        </div>
    );
};

export default RightSide;