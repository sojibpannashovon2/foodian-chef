// import React from 'react';

import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";


const Home = () => {
    const recipes = useLoaderData();
    // console.log(recipes);
    return (
        <div >
            {
                recipes.map(recipe => <CardDetails key={recipe.id}
                    recipe={recipe}
                ></CardDetails>)
            }
        </div>
    );
};

export default Home;