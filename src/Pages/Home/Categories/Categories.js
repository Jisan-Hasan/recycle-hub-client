import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);
    return (
        <div>
            <h2 className="mt-24 my-14 text-3xl font-bold text-center">
                All Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {categories.map((category) => (
                    <Link
                        key={category._id}
                        to={`/category/${category.name}`}
                        className="btn btn-info pt-16 pb-24 font-bold text-3xl text-center"
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
