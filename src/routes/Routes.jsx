import { createBrowserRouter } from "react-router-dom";
// import LogInLayOut from "../layout/LogInLayOut";
// import LogIn from "../pages/Log/LogIn";
// import Register from "../pages/Log/Register";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Blog from "../pages/Home/Blog";
import RecipeDetails from "../pages/Details/RecipeDetails";
import DetailsLayout from "../layout/DetailsLayout";


const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <LogInLayOut></LogInLayOut>,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Navigate to="/recipes/0"></Navigate>
    //         },
    //         {
    //             path: 'login',
    //             element: <LogIn></LogIn>
    //         },
    //         {
    //             path: 'register',
    //             element: <Register></Register>
    //         }
    //     ]
    // },
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/recipes`)
            },


            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]

    },
    {
        path: "recipes",
        element: <DetailsLayout></DetailsLayout>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
            }
        ]
    }
]);

export default router;

