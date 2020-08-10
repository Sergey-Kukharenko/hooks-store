import React from 'react';
import BasketCart from "./basket-cart";
import {useDispatch, useSelector} from "react-redux";

import {decrement, increment, removeFromBasket} from "../actions";

const BasketCarts = () => {

    const {carts} = useSelector(state => ({
        carts: state.basket
    }))

    const dispatch = useDispatch()

    const removeCart = item => dispatch(removeFromBasket(item))

    const inc = item => dispatch(increment(item))

    const dec = item => dispatch(decrement(item))

    return (
        <div className="card-body">

            <h5 className="mb-4">Cart (<span>{carts.length}</span> items)</h5>

            {
                carts.map((cart, idx) => <BasketCart cart={cart} removeCart={removeCart} inc={inc} dec={dec} key={idx}/>)
            }

            <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1"></i>
                Do not delay the purchase, adding items to your cart does not mean booking them.
            </p>

        </div>
    );

    return <div>Basket</div>
};

export default BasketCarts;
