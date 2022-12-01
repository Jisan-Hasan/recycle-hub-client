import React from "react";
import AdvertisedItem from "../AdvertisedItems/AdvertisedItem";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div className="container mx-auto my-5 md:my-28">
            <Banner />
            <Categories />
            <AdvertisedItem />
        </div>
    );
};

export default Home;
