import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import Product from "./Product";

const Products = () => {
    const products = useLoaderData();

    const [selectedProduct, setSelectedProduct] = useState(null);

    if (products.length < 1) {
        return (
            <p className="text-center font-bold my-56 text-xl">
                No Products Available on this category
            </p>
        );
    }
    // console.log(products);
    return (
        <div className="container mx-auto my-12">
            <h2 className="text-center text-2xl font-bold my-5">
                All Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-4">
                {products.map((product) => (
                    <Product
                        setSelectedProduct={setSelectedProduct}
                        key={product._id}
                        product={product}
                    />
                ))}
            </div>
            {selectedProduct && (
                <BookingModal selectedProduct={selectedProduct} />
            )}
        </div>
    );
};

export default Products;
