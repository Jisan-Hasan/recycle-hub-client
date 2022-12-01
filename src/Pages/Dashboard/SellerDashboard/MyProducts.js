import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(true);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/myProducts/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [user, refresh]);
    // console.log(products);

    const handleAdvertise = (productId) => {
        fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Product Advertise Successfully!");
                setRefresh(!refresh);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    return (
        <div className="overflow-scroll">
            <h3 className="text-2xl font-bold text-center my-5">My Products</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Buying Price</th>
                            <th>Selling Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, idx) => (
                            <tr
                                key={product._id}
                                className={`${idx % 2 === 0 ? "" : "active"}`}
                            >
                                <th>{idx + 1}</th>
                                <th>{product.name}</th>
                                <th>{product.bPrice}</th>
                                <th>{product.sPrice}</th>
                                <th>{`${
                                    product.isAvailable ? "Available" : "Sold"
                                }`}</th>
                                <th>
                                    <button
                                        onClick={() =>
                                            handleAdvertise(product._id)
                                        }
                                        className={`${
                                            product.isAdvertised
                                                ? "btn btn-disabled cursor-default"
                                                : "btn btn-primary"
                                        }`}
                                    >
                                        Advertise
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

export default MyProducts;
