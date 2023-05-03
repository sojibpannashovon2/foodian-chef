// import React from 'react';
import { Button, ListGroup } from "react-bootstrap";

import {
    FaGoogle,
    FaGithub,
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare
} from 'react-icons/fa';

// import Qzone from "../Qzone/Qzone";
// import bg from "../../../assets/bg.png"
const RightSide = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className="mb-3 px-5" variant="outline-primary"> <FaGoogle></FaGoogle> Log In With Google</Button>
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
            <div>
                {/* <Qzone></Qzone> */}
            </div>
            <div className="mt-3 card text-white w-full">
                {/* <img className="w-full" src={bg} alt="" /> */}
                <div className="card-img-overlay ">
                    <h5 className="card-title text-center fw-bold my-5">Create An Amazing Newspaper</h5>
                    <p className="card-text text-center my-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className="btn btn-danger my-4 mx-auto ms-5 px-4">Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightSide;