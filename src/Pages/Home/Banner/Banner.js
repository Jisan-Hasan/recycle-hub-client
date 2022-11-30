import React from "react";
import img from "../../../asset/banner.jpg";

const Banner = () => {
    return (
        <div className="md:grid md:grid-cols-2">
            <div className="self-center ml-2">
                <h1 className="text-4xl md:text-8xl font-extrabold">
                    RECYCLE BIN
                    <br />
                    BUY or SELL
                </h1>
                <h3 className="text-xl md:text-3xl font-bold mt-3 mb-6 uppercase">
                    Buy or Sell Unused Smartphones.
                </h3>
                <p className="text-lg font-semibold text-gray-600">
                    This website is created for you to buy and sell your new and
                    old recyclables phones.
                    <br />
                    So do your business honestly and don't engage in any kind of
                    fraud.
                </p>
                <button
                    className="bg-emerald-400 px-6 py-2 mt-8 text-white"
                    color=""
                >
                    READ MORE
                </button>
            </div>
            <div className="self-center hidden md:block">
                <img className="rounded" src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;
