import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/bookings/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [user]);

    console.log(orders);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-12">
                My Booked Product
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, idx) => (
                            <tr
                                key={order._id}
                                className={`${idx % 2 === 0 ? "" : "active"}`}
                            >
                                <th>{idx + 1}</th>
                                <th><img className="w-[75px]" src={order.image} alt=""/></th>
                                <th>{order.title}</th>
                                <th>{order.price}</th>
                                <th>
                                    <button className="btn btn-warning"
                                    >
                                        Pay
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

export default MyOrders;
