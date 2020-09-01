import React from 'react';

const BasketAccept = () => {
    return (
        <div className="card-body">

            <h5 className="mb-4">We accept</h5>

            <img className="mr-2" width="45px"
                 src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                 alt="Visa"/>
            <img className="mr-2" width="45px"
                 src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                 alt="American Express"/>
            <img className="mr-2" width="45px"
                 src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                 alt="Mastercard"/>

        </div>
    );
};

export default BasketAccept;
