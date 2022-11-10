import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Allservices from "../../Pages/Home/Services/AllServices/Allservices";
import DetailsService from "../../Pages/Home/Services/DetailsService/DetailsService";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import PlaceReview from "../../Pages/PlaceReview/PlaceReview";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateReview from "../../UpdateReview/UpdateReview";
import NotFound from "../NotFound/NotFound";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
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
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
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
                element: <PrivateRoute><PlaceReview></PlaceReview></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },


        ]
    }
]);

export default router;