// import React from 'react';

import { Button, Card } from "react-bootstrap";

import {
    FaBookmark,
    FaShareAltSquare,
    FaStarHalfAlt,
    FaStar,
    FaEye
} from 'react-icons/fa';



const RecipeItem = ({ pd }) => {
    console.log(pd);
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
                <Button className="ms-4" variant="primary">Go somewhere</Button>
                <div className="me-4 d-flex gap-3 justify-content-center align-items-center">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStarHalfAlt></FaStarHalfAlt>
                    {
                        rating
                    }
                </div>
            </Card.Footer>
        </Card>
    );
};

export default RecipeItem;