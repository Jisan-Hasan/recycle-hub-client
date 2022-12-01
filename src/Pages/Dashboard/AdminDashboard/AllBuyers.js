import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/allUser/Buyer`)
            .then((res) => res.json())
            .then((data) => {
                setBuyers(data);
            });
    }, []);
    return (
        <div className="overflow-scroll">
            <h3 className="text-2xl font-bold text-center my-5">All Buyers</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((buyer, idx) => (
                            <tr
                                key={buyer._id}
                                className={`${idx % 2 === 0 ? "" : "active"}`}
                            >
                                <th>{idx + 1}</th>
                                <th>{buyer.name}</th>
                                <th>{buyer.email}</th>
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

export default AllBuyers;