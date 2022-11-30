import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div className="container mx-auto my-5 md:my-28">
            <Banner />
            <Categories />
        </div>
    );
};

export default Home;
