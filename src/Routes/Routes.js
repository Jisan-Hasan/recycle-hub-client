import { createBrowserRouter } from "react-router-dom";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
import Main from "../Layout/Main";
import SellerDashboardLayout from "../Layout/SellerDashboardLayout";
import Blogs from "../Pages/Blogs/Blogs";
import AllBuyers from "../Pages/Dashboard/AdminDashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AdminDashboard/AllSellers";
import AddProduct from "../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
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
]);

export default router;
