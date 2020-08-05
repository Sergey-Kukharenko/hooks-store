import React from 'react';
import BasketCart from "./basket-cart";
import {useSelector} from "react-redux";
import {getBasketItemsWithCount} from "../selectors";

const BasketCarts = () => {

    const {carts} = useSelector(state => ({
        carts: getBasketItemsWithCount(state)
    }))

    // console.log(carts)

    return (
        <div className="card-body">

            <h5 className="mb-4">Cart (<span>{carts.length}</span> items)</h5>

            {
                carts.map((cart, idx) => <BasketCart cart={cart} key={idx}/>)
            }


            <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1"></i>
                Do not delay the purchase, adding items to your cart does not mean booking them.
            </p>

        </div>
    );
};

export default BasketCarts;
