import React from "react";

const Product = ({ product, setSelectedProduct }) => {
    console.log(product);
    const { _id, condition, image, location, name, phone, sPrice,pYear } = product;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{condition}</div>
                </h2>
                <p className="text-lg font-bold text-red-500">
                    Price: ${sPrice}
                </p>
                <p>Location: {location}</p>
                <p>Purchase Year: {pYear}</p>
                <p>Phone: {phone}</p>
                <div className="card-actions justify-center mt-4">
                    <label
                        onClick={() => setSelectedProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary"
                    >
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Product;
