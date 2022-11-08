import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Allservices from "../../Pages/Home/Services/AllServices/Allservices";
import DetailsService from "../../Pages/Home/Services/DetailsService/DetailsService";
import Login from "../../Pages/Login/Login";
import PlaceReview from "../../Pages/PlaceReview/PlaceReview";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Allservices></Allservices>
            },
            {
                path: '/services/:id',
                element: <DetailsService></DetailsService>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PlaceReview></PlaceReview>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },


        ]
    }
]);

export default router;