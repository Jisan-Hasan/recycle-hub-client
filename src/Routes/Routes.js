import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <p>error</p>,
        children: [
            {
                index: true,
                element: <p>Hello</p>,
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
]);

export default router;
