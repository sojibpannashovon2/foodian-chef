import { Navigate, createBrowserRouter } from "react-router-dom";
import LogInLayOut from "../layout/LogInLayOut";
import LogIn from "../pages/Log/LogIn";
import Register from "../pages/Log/Register";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import Blog from "../pages/Home/Blog";
import RecipeDetails from "../pages/Details/RecipeDetails";
import DetailsLayout from "../layout/DetailsLayout";
import ErrorPage from "../pages/shared/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <LogInLayOut></LogInLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',

                element: <Navigate to="/recipes"> </Navigate>,

            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "recipes",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/recipes',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/recipes`)
            },


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

