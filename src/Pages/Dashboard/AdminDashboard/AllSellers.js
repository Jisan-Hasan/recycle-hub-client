import React, { useEffect, useState } from "react";

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/allUser/Seller`)
            .then((res) => res.json())
            .then((data) => {
                setSellers(data);
            });
    }, []);
    return (
        <div className="overflow-scroll">
            <h3 className="text-2xl font-bold text-center my-5">My sellers</h3>

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
                                <th><button className={`${
                                    seller.isVerified ? 'disabled cursor-default' : 'btn btn-info'
                                }`}>{`${
                                    seller.isVerified ? "Verified" : "Verify"
                                }`}</button></th>
                                <th>
                                    <button className="btn btn-warning"
                                    >
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