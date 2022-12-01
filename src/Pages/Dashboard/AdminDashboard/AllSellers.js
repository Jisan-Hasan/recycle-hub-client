import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteUserFromDB, setUserVerifyStatus } from "../../../api/auth";

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/allUser/Seller`)
            .then((res) => res.json())
            .then((data) => {
                setSellers(data);
            });
    }, [refresh]);

    // verify seller
    const handleVerify = (email) => {
        setUserVerifyStatus(email, true);
        toast.success("User verified Successfully!");
        setRefresh(!refresh);
    };

    // Delete Seller
    const handleDelete = (email) => {
        fetch(`${process.env.REACT_APP_API_URL}/deleteUser/${email}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data=> {
            if(data.deletedCount){
                toast.success("User Deleted Successfully");
                setRefresh(!refresh);
            }
        })
    }

    return (
        <div className="overflow-scroll">
            <h3 className="text-2xl font-bold text-center my-5">All sellers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, idx) => (
                            <tr
                                key={seller._id}
                                className={`${idx % 2 === 0 ? "" : "active"}`}
                            >
                                <th>{idx + 1}</th>
                                <th>{seller.name}</th>
                                <th>{seller.email}</th>
                                <th>
                                    <button
                                        onClick={() =>
                                            handleVerify(seller.email)
                                        }
                                        className={`${
                                            seller.isVerified
                                                ? "disabled cursor-default"
                                                : "btn btn-info"
                                        }`}
                                    >{`${
                                        seller.isVerified
                                            ? "Verified"
                                            : "Verify"
                                    }`}</button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(seller.email)} className="btn btn-warning">
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;
