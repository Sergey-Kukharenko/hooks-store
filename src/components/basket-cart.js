import React from 'react';

const BasketCart = ({cart, removeCart, inc, dec, change}) => {

    const handleOnChange = (e, cart) => {
        const value = e.target.value;
        // e.target.value.replace(/[^1-9]/g, "")
        cart.quantity = +value;
        change(cart)
    };

    return (
        <div className="basket-cart">
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src={cart.img} alt="Sample"/>
                        <div>
                            <div className="mask waves-effect waves-light">
                                <img className="img-fluid w-100" src={cart.img} alt={cart.title}/>
                                <div className="mask rgba-black-slight waves-effect waves-light"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>Blue denim shirt</h5>
                                <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                                <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                                <p className="mb-3 text-muted text-uppercase small">Size: M</p>
                            </div>
                            <div>
                                <div className="def-number-input number-input safari_only mb-0 w-100">
                                    <button
                                        className="minus"
                                        onClick={() => dec(cart)}
                                    ></button>
                                    <input
                                        className="quantity"
                                        min="1"
                                        name="quantity"
                                        value={cart.quantity}

                                        onChange={e => handleOnChange(e, cart)}
                                        type="number"
                                    />
                                    <button
                                        className="plus"
                                        onClick={() => inc(cart)}
                                    >

                                    </button>
                                </div>
                                <small
                                    className="form-text text-muted text-center">
                                    (Note, 1 piece)
                                </small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <div
                                    className="card-link-secondary small text-uppercase mr-3"
                                    onClick={() => removeCart(cart)}
                                >
                                    <i className="fas fa-trash-alt mr-1"></i>
                                    Remove item
                                </div>
                                <a href="#!" type="button"
                                   className="card-link-secondary small text-uppercase"><i
                                    className="fas fa-heart mr-1"></i> Move to wish list </a>
                            </div>
                            <p className="mb-0"><span><strong>{cart.price}</strong></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="card-separator mb-4"/>
        </div>
    );
};

export default BasketCart;
