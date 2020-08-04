import React from 'react';
import BasketCart from "./basket-cart";

const BasketCarts = () => {
    return (
        <div className="card-body">

            <h5 className="mb-4">Cart (<span>2</span> items)</h5>

            <BasketCart/>

            <p className="text-primary mb-0">
                <i className="fas fa-info-circle mr-1"></i>
                Do not delay the purchase, adding items to your cart does not mean booking them.
            </p>

        </div>
    );
};

export default BasketCarts;
