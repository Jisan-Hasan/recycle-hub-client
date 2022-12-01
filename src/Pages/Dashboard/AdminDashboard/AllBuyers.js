import React from 'react';

const AllBuyers = () => {
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
                        {/* {products.map((product, idx) => (
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
                                        className={`${
                                            product.isAdvertise
                                                ? "btn btn-disabled"
                                                : "btn btn-primary"
                                        }`}
                                    >
                                        Advertise
                                    </button>
                                </th>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;