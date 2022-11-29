import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // get form data
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    };

    return (
        <div className="hero min-h-screen mt-[-5%]">
            <div className="hero-content">
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center">
                            Login
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="john@gmail.com"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="******"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <button className="label-text-alt link link-hover">
                                        Forgot password?
                                    </button>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-xs">
                                    Login Using Social Account
                                </p>
                                <div className="form-control mt-3">
                                    <button className="btn btn-outline">
                                        Google
                                    </button>
                                </div>
                                <p className="text-sm mt-3">
                                    Don't have any account?{" "}
                                    <Link
                                        to="/signup"
                                        className="text-blue-600"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
