import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/error.png";

const ErrorPage = () => {
    return (
        <div
            style={{ minHeight: "100vh" }}
            className="flex flex-row items-center"
        >
            <div className="container mx-auto">
                <div>
                    <div className="text-center">
                        <span className="text-7xl font-extrabold mx-auto w-full">
                            <img className="mx-auto" src={logo} alt="" />
                        </span>
                        <div className="text-2xl font-semibold mt-10">
                            The page you are looking for was not found.
                        </div>
                        <Link to="/" className="mt-2 text-green-500">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
