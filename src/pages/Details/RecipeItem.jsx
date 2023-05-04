// import React from 'react';

import { useState } from "react";
import { Button, Card } from "react-bootstrap";

import {

    FaStarHalfAlt,
    FaStar,

} from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RecipeItem = ({ pd }) => {
    // console.log(pd);

    const notify = () => toast("The Recipe Is Favaourtie For Me !!!");

    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        setDisabled(true);
        // perform your button click logic here
    };

    const { recipe_name, ingredients, cooking_method, rating } = pd
    return (
        <Card className=" mt-4">
            <Card.Header className="fw-bold">{recipe_name}</Card.Header>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    {cooking_method}
                    <div className="ms-5 p-4">
                        <h3>Ingridients: </h3>
                        {
                            ingredients.map(pm => <li> {pm}</li>)
                        }
                    </div>
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <Button onClick={handleClick} disabled={disabled} className="ms-4" variant="primary"><span onClick={notify}>Favorite Item</span></Button>
                <div className="me-4 d-flex gap-3 justify-content-center align-items-center">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    {
                        rating && rating
                    }
                </div>
            </Card.Footer>
            <ToastContainer></ToastContainer>
        </Card>
    );
};

export default RecipeItem;