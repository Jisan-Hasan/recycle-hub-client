import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // get form data
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;

        console.log(name, email, password, role);
    };

    return (
        <div className="hero min-h-screen mt-[-5%]">
            <div className="hero-content">
                <div className="card  w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-center">
                            Sign Up
                        </h1>
                        <form onSubmit={handleSubmit}>
                            {/* name field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Your Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            {/* photo field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Your Photo
                                    </span>
                                </label>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full max-w-xs"
                                    required
                                />
                            </div>
                            {/* email field */}
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
                            {/* password field */}
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
                            </div>

                            {/* role select */}
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">
                                        Select Role
                                    </span>
                                    <br />
                                    <label className="flex gap-2">
                                        <input
                                            value="user"
                                            type="radio"
                                            name="role"
                                            className="radio checked:bg-red-500"
                                            defaultChecked
                                        />{" "}
                                        User
                                    </label>
                                    <label className="flex gap-2">
                                        <input
                                            value="seller"
                                            type="radio"
                                            name="role"
                                            className="radio checked:bg-blue-500"
                                        />
                                        Seller
                                    </label>
                                </label>
                            </div>

                            <div className="form-control mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div className="text-center">
                                <p className="text-xs">
                                    Login Using Social Account
                                </p>
                                <div className="form-control mt-3">
                                    <button className="btn btn-outline">
                                        Google
                                    </button>
                                </div>
                                <p className="text-sm mt-3">
                                    Already have any account?{" "}
                                    <Link to="/login" className="text-blue-600">
                                        Login
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

export default SignUp;
