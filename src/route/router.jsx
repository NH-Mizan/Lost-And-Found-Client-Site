import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import LogIn from "../Page/SinglePage/LogIn";
import Register from "../Page/SinglePage/Register";
import ErrorPage from "../Page/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import PostDetails from "../Components/PostDetails";
import LostAndFound from "../Page/LostAndFound";
import AddLostAndFound from "../Page/AddLostAndFound";
import AllRecovered from "../Page/AllRecovered";
import ManageItems from "../Page/ManageItems";
import LatestFind from "../Page/LatestFind";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                children: [
                    {
                        path: '/',
                        element: <LatestFind />
                    }
                ]
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
                element: <PostDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiURL}/details/${params.id}`)


            },
            {
                path: '/lost&found',
                element: <LostAndFound />,
                loader: () => fetch(`${import.meta.env.VITE_apiURL}/items`)
            },
            {
                path: '/addItems',
                element: <AddLostAndFound />
            },
            {
                path: '/allRecovered ',
                element: <AllRecovered />
            },
            {
                path: '/manageItems',
                element: <ManageItems />
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
]);


export default router;