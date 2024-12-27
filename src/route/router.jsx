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
import Update from "../Page/SinglePage/Update";
import Private from "../Privates/Private";



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
                path: '/update/:id',
                element: <Update />
            },
            {
                path: '/details/:id',
                element: <Private><PostDetails /></Private> ,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_apiURL}/details/${params.id}`)


            },
            {
                path: '/lost&found',
                element: <LostAndFound />,
                loader: () => fetch(`${import.meta.env.VITE_apiURL}/items`)
            },
            {
                path: '/addItems',
                element: <Private><AddLostAndFound /></Private>
            },
            {
                path: '/allRecovered ',
                element: <Private><AllRecovered /></Private>
            },
            {
                path: '/manageItems',
                element: <Private><ManageItems /></Private>
            },

        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    },
]);


export default router;