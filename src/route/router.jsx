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
        element: <ErrorPage/>
    },
]);


export default router;