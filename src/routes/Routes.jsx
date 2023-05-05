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
import PrivateRoutes from "./PrivateRoutes";



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
                loader: () => fetch(`https://foodian-chef-and-food-server-sojibpannashovon2.vercel.app/recipes`)
            },


        ]

    },
    {
        path: "recipes",
        element: <DetailsLayout></DetailsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><RecipeDetails></RecipeDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://foodian-chef-and-food-server-sojibpannashovon2.vercel.app/recipes/${params.id}`)
            }
        ]
    }
]);

export default router;

