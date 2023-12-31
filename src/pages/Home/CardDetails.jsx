// import React from 'react';

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

const CardDetails = ({ recipe }) => {
    const { id, name, photo, years_of_experience, likes, recipes_number, description } = recipe
    // console.log(recipe);

    return (


        <Card border="success" className="mb-3 shadow-lg ">
            {/* 
            <Card.Header>Header</Card.Header> */}
            <LazyLoad offset={400} onContentVisible={() => { console.log('loaded!') }} threshold={0.95}>
                <Card.Img className="img-fluid  p-4 " style={{ height: "500px", padding: "10px", borderRadius: "50px" }} variant="top" src={photo} />
            </LazyLoad>

            <Card.Body>
                <Card.Title className="fw-bold">{name}</Card.Title>
                <Card.Text className="w-50">
                    {
                        description.slice(0, 100)
                    }
                </Card.Text>
                <Button variant="outline-success" className=" w-50 fw-bold text-white"><Link className="text-black" to={`/recipes/${id}`}>View-Recipr-Details</Link></Button>
            </Card.Body>
            <Card.Footer>
                <div className="fw-semibold d-flex gap-2 ">

                    <span className="border border-success rounded-3 p-2 ">Experience: {years_of_experience}</span>
                    <span className="border border-success rounded-3 p-2 ">Likes: {likes}</span>
                    <span className="border border-success rounded-3 p-2 ">Recipes: {recipes_number}</span>
                </div>
            </Card.Footer>
        </Card>




    );
};

export default CardDetails;