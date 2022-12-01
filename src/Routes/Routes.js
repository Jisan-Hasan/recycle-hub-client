import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import BuyerDashboardLayout from "../Layout/BuyerDashboardLayout";
import Main from "../Layout/Main";
import SellerDashboardLayout from "../Layout/SellerDashboardLayout";
import Blogs from "../Pages/Blogs/Blogs";
import AllBuyers from "../Pages/Dashboard/AdminDashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AdminDashboard/AllSellers";
import MyOrders from "../Pages/Dashboard/BuyerDashboard/MyOrders";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
            {
                path: "/blogs",
                element: <Blogs />,
            },
            {
                path: "/category/:brand",
                element: (
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_API_URL}/products/${params.brand}`
                    ),
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
    {
        path: "/adminDashboard",
        element: (
            <PrivateRoute>
                <AdminDashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <AllSellers />,
            },
            {
                path: "/adminDashboard/allSeller",
                element: <AllSellers />,
            },
            {
                path: "/adminDashboard/allBuyer",
                element: <AllBuyers />,
            },
        ],
    },
    {
        path: "/buyerDashboard",
        element: (
            <PrivateRoute>
                <BuyerDashboardLayout />
            </PrivateRoute>
        ),
        children: [
            {
                index: true,
                element: <MyOrders />,
            },
            {
                path: "/buyerDashboard/myOrders",
                element: <MyOrders />,
                
            },
        ],
    },
]);

export default router;
