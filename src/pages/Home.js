import React from 'react';
import Carts from "../components/carts";
import {arrData} from "../utils/loops/createData";

const Home = () => {



    console.log(arrData(1))

    return (
        <div>
            <h1>Home</h1>
            <Carts/>
        </div>
    );
};

export default Home;
