import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ selectedProduct }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, sPrice, image } = selectedProduct;
    // const [buyerPhone, setBuyerPhone] = useState("");
    // const [meetLocation, setMeetLocation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const bookInfo = {
            title: name,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            image,
            productId: _id,
            price: sPrice,
            location: e.target.meetLocation.value,
            buyerPhone: e.target.buyerPhone.value,
        };

        fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success("Product Booked Successfully");
                }
            });

        console.log(bookInfo);
    };
    return (
        <>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">
                        Please Provide Some Info For Booking!
                    </h3>
                    <form onSubmit={handleSubmit}>
                        {/* Product Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Product Name:
                                </span>
                            </label>
                            <input
                                type="text"
                                defaultValue={name}
                                readOnly
                                disabled
                                className="input input-success w-full"
                            />
                        </div>

                        {/* Selling Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Product Name:
                                </span>
                            </label>
                            <input
                                type="text"
                                defaultValue={sPrice}
                                readOnly
                                disabled
                                className="input input-success w-full"
                            />
                        </div>
                        {/* Buyer Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Name:</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                disabled
                                className="input input-success w-full"
                            />
                        </div>
                        {/* Buyer Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Email:</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.email}
                                readOnly
                                disabled
                                className="input input-success w-full"
                            />
                        </div>
                        {/* Buyer Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Phone:</span>
                            </label>
                            <input
                                name="buyerPhone"
                                type="text"
                                placeholder="+88017000000"
                                className="input input-success w-full"
                                required
                            />
                        </div>
                        {/* Meet Location */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Meet Location:
                                </span>
                            </label>
                            <input
                                name="meetLocation"
                                type="text"
                                placeholder="Dhaka"
                                className="input input-success w-full"
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="form-control w-full">
                            <input
                                type="submit"
                                className="btn btn-success w-full my-5"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
