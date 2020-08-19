import React from 'react';
import BasketCart from "./basket-cart";
import {Redirect} from "react-router";
import {useDispatch, useSelector} from "react-redux";

import {decrement, increment, removeFromBasket, changeQuantity} from "../actions";
import {isArrayEmpty} from "../utils";

const BasketCarts = () => {

    const {carts} = useSelector(state => ({
        carts: state.basket
    }))

    const dispatch = useDispatch()

    const removeCart = item => dispatch(removeFromBasket(item))

    const inc = item => dispatch(increment(item))

    const dec = item => dispatch(decrement(item))

    const change = item => dispatch(changeQuantity(item))



    return (
        <div className="card-body">

            <h5 className="mb-4">Cart (<span>{carts.length}</span> items)</h5>

            {
                isArrayEmpty(carts)
                    ? <Redirect to='/'/>
                    : carts.map((cart, idx) => <BasketCart cart={cart} removeCart={removeCart} inc={inc} dec={dec} change={change} key={idx}/>)
            }

            <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1"></i>
                Do not delay the purchase, adding items to your cart does not mean booking them.
            </p>

        </div>
    );

};

export default BasketCarts;
