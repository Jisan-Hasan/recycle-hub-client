import React, { useEffect, useState } from "react";
import Product from "../../Products/Product";

const AdvertisedItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/advertisedProduct`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, []);


    if (items.length < 1) {
        return;
    }
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-24 mb-8">Advertised Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    items.map(item => <Product key={item._id} product={item} />)
                }
            </div>
        </div>
    );
};

export default AdvertisedItem;
