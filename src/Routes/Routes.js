import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import SellerDashboardLayout from "../Layout/SellerDashboardLayout";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>error</p>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/sellerDashboard",
        element: (
            <PrivateRoute>
                <SellerDashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <MyProducts />,
            },
            {
                path: "/sellerDashboard/addProduct",
                element: <AddProduct />,
            },
            {
                path: "/sellerDashboard/myProducts",
                element: <MyProducts />,
            },
        ],
    },
]);

export default router;
