import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuthToken, setUserRole } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
    const [userEmail, setUserEmail] = useState("");
    const {
        loading,
        setLoading,
        createUser,
        signInWithGoogle,
        updateUserProfile,
        signIn,
        resetPassword,
        logout,
    } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // get form data
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                toast.success("Login Successful..!!");
                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
                setLoading(false);
            });

        // console.log(email, password);
    };

    // implement google signin
    const handleGoogleSignIn = () => {
        signInWithGoogle().then((result) => {
            const user = result.user;
            setAuthToken(user);
            setUserRole(user.email, "Buyer");
            toast.success("Logged in Successfully.");
            navigate(from, { replace: true });
        });
    };

    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success("Please Check your inbox for reset link");
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
                console.log(err);
                setLoading(false);
            });
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
                                    onBlur={(event) =>
                                        setUserEmail(event.target.value)
                                    }
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
                                    <button
                                        onClick={handleReset}
                                        className="label-text-alt link link-hover"
                                    >
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
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="btn btn-outline"
                                    >
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
