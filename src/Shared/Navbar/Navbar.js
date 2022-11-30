import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    let userRole = "";

    // get User role
    useEffect(() => {
        if (user?.email) {
            fetch(`${process.env.REACT_APP_API_URL}/userRole/${user?.email}`)
                .then((res) => res.json())
                .then((data) => {
                    userRole = data?.role;
                    // console.log(userRole);
                });
        }
    }, [user]);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logged Out successfully!");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    return (
        <div className="navbar bg-base-100 container mx-auto shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                    </ul>
                </div>
                <Link
                    to="/"
                    className="btn btn-ghost normal-case text-xl md:text-4xl"
                >
                    Recycle Bin
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                    <li>
                        <Link>Dashboard</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {!user?.uid ? (
                    <Link to="/login" className="btn">
                        Login
                    </Link>
                ) : (
                    <button onClick={handleLogout} className="btn btn-error">
                        Log Out
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
