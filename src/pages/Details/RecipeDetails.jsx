// import React from 'react';

import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import LazyLoad from "react-lazy-load";

const RecipeDetails = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    const { name, photo, years_of_experience, likes, recipes_number, description, recipesItem } = recipe
    return (
        <div>


            <Card border="danger shadow-lg bg-light">
                <Card.Header className="d-flex justify-content-center align-items-center gap-5">
                    <div className="">
                        <LazyLoad offset={500} once>
                            <Card.Img className="img-fluid  p-4 " style={{ height: "300px", padding: "10px", borderRadius: "50px", width: "300px" }} variant="top" src={photo} />

                        </LazyLoad>
                    </div>

                    <div><div className="fw-semibold d-flex flex-column gap-3 ">

                        <span className="border border-success p-2 rounded-lg p-4">Likes: {likes}</span>
                        <span className="border border-success p-2 rounded-lg p-4">Numbers of recipes: {recipes_number}</span>
                        <span className="border border-success p-2 rounded-lg p-4">Year Of Experience: {years_of_experience}</span>
                    </div></div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className="fw-bold">{name}</Card.Title>
                    <Card.Text className="mt-3">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="mt-4">
                {
                    recipesItem.map(pd => <RecipeItem pd={pd} ></RecipeItem>)
                }
            </div>

        </div>
    );
};

export default RecipeDetails;