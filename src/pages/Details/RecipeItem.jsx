// import React from 'react';

import { Button, Card } from "react-bootstrap";

const RecipeItem = ({ pd }) => {
    console.log(pd);
    return (
        <Card className="text-center pt-4">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default RecipeItem;