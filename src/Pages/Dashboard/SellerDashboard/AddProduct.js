import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    // get all categories options
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });
    }, []);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const bPrice = form.bPrice.value;
        const sPrice = form.sPrice.value;
        const pYear = form.pYear.value;
        const location = form.location.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const description = form.description.value;

        // get image & host on imgbb
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append("image", image);

        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbbKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.data.display_url);
                /* console.log(
                    name,
                    data.data.display_url,
                    phone,
                    bPrice,
                    sPrice,
                    pYear,
                    location,
                    category,
                    condition,
                    description
                ); */
                // save product info to the db
                const product = {
                    sellerEmail: user?.email,
                    name,
                    image: data.data.display_url,
                    phone,
                    bPrice,
                    sPrice,
                    pYear,
                    location,
                    category,
                    condition,
                    description,
                    isAvailable: true,
                    isAdvertised: false,
                };
                fetch(`${process.env.REACT_APP_API_URL}/addProduct`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(product),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);
                        if (data.insertedId) {
                            toast.success("Product Added Successfully");
                            navigate("/sellerDashboard/myProducts");
                        }
                    })
                    .catch((err) => {
                        toast.error(err.message);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h2 className="text-2xl mb-5 text-center">
                List a Product for Sell
            </h2>
            <div className="md:w-2/3 lg:w-3/5 mx-auto">
                <form onSubmit={handleSubmit}>
                    {/* Product name */}
                    <label className="label">
                        <span className="label-text">Product Name:</span>
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="iPhone 13 pro max"
                        className="input input-bordered input-success w-full"
                        required
                    />

                    <div className="flex gap-5">
                        {/* Product image */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Product Image
                                </span>
                            </label>
                            <input
                                type="file"
                                id="image"
                                accept="image/*"
                                name="image"
                                className="file-input file-input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">
                                    Phone Number:
                                </span>
                            </label>
                            <input
                                name="phone"
                                type="text"
                                placeholder="+8801951005859"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        {/* Product Buying Price */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">
                                    Buying Price:
                                </span>
                            </label>
                            <input
                                name="bPrice"
                                type="number"
                                placeholder="199.99"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </div>
                        {/* Product Selling Price */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">
                                    Selling Price:
                                </span>
                            </label>
                            <input
                                name="sPrice"
                                type="number"
                                placeholder="99.99"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </div>
                        {/* Product Purchase Year*/}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">
                                    Purchase Year:
                                </span>
                            </label>
                            <input
                                name="pYear"
                                type="number"
                                placeholder="2019"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </div>
                    </div>

                    {/* categories & location */}
                    <div className="flex gap-5">
                        {/* Location */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Location:</span>
                            </label>
                            <input
                                name="location"
                                type="text"
                                placeholder="Dhaka"
                                className="input input-bordered input-success w-full"
                                required
                            />
                        </div>
                        {/* Product Category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Select Product Category
                                </span>
                            </label>
                            <select
                                className="select select-success"
                                name="category"
                                required
                            >
                                {categories.map((category) => (
                                    <option key={category._id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Select Product condition */}
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">
                                Product Condition:
                            </span>
                            <br />
                            <label className="flex gap-2">
                                <input
                                    value="Excellent"
                                    type="radio"
                                    name="condition"
                                    className="radio checked:bg-red-500"
                                    defaultChecked
                                />{" "}
                                Excellent
                            </label>
                            <label className="flex gap-2">
                                <input
                                    value="Good"
                                    type="radio"
                                    name="condition"
                                    className="radio checked:bg-blue-500"
                                />
                                Good
                            </label>
                            <label className="flex gap-2">
                                <input
                                    value="Fair"
                                    type="radio"
                                    name="condition"
                                    className="radio checked:bg-yellow-500"
                                />
                                Fair
                            </label>
                        </label>
                    </div>

                    {/* Product Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Product Description:
                            </span>
                        </label>
                        <textarea
                            name="description"
                            className="textarea textarea-success h-24"
                            required
                        ></textarea>
                    </div>
                    {/* submit button */}
                    <button
                        type="submit"
                        className="btn btn-block btn-success my-5"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
