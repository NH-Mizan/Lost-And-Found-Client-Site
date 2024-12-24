import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import LogIn from "../Page/SinglePage/LogIn";
import Register from "../Page/SinglePage/Register";
import ErrorPage from "../Page/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import PostDetails from "../Components/PostDetails";
import LostAndFound from "../Page/LostAndFound";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/details/:id',
                element: <PostDetails />
            },
            {
                path: '/lost&found',
                element: <LostAndFound />
            },
          
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    },
]);


export default router;