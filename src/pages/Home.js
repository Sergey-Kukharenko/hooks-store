import React from 'react';
import Carts from "../components/carts";
import Basket from "../components/basket";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Carts/>
            <Basket/>
        </div>
    );
};

export default Home;
