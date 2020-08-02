import React from 'react';

const Cart = ({cart, add}) => {

    return (
        <div className="col-lg-4 col-md-12 mb-4 " key={cart.id}>
            <div className="card">
                <div className="view overlay">
                    <img className="card-img-top"
                         src={cart.img}
                         alt="cap"/>
                    <div>
                        <div className="mask rgba-white-slight"></div>
                    </div>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{cart.title}</h4>
                    <p className="card-text">
                        {cart.info}
                    </p>
                    <div
                        className="btn btn-primary"
                        onClick={() => add(cart.id)}
                    >
                        Button
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
