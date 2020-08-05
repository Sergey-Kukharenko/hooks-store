import React from 'react';
import BasketCarts from "./basket-carts";
import BasketDelivery from "./basket-delivery";
import BasketAccept from "./basket-accept";
import BasketTotal from "./basket-total";
import BasketCode from "./basket-code";

const Basket = () => {
    return (
        <section className="mt-5 mb-4">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <BasketCarts/>
                    </div>
                    <div className="card mb-4">
                        <BasketDelivery/>
                    </div>
                    <div className="card mb-4">
                        <BasketAccept/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <BasketTotal/>
                    </div>
                    <div className="card mb-4">
                        <BasketCode/>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Basket;