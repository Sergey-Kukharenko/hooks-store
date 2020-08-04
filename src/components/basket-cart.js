import React from 'react';

const BasketCart = () => {
    return (
        <div className="basket-cart">
            <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100"
                             src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                             alt="Sample"/>
                        <div>
                            <div className="mask waves-effect waves-light">
                                <img className="img-fluid w-100"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"/>
                                <div
                                    className="mask rgba-black-slight waves-effect waves-light"></div>
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
                                        className="minus"></button>
                                    <input className="quantity" min="0" name="quantity"
                                           type="number"/>
                                    <button
                                        className="plus"></button>
                                </div>
                                <small
                                    className="form-text text-muted text-center">
                                    (Note, 1 piece)
                                </small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <a href="#!" type="button"
                                   className="card-link-secondary small text-uppercase mr-3"><i
                                    className="fas fa-trash-alt mr-1"></i> Remove item </a>
                                <a href="#!" type="button"
                                   className="card-link-secondary small text-uppercase"><i
                                    className="fas fa-heart mr-1"></i> Move to wish list </a>
                            </div>
                            <p className="mb-0"><span><strong>$17.99</strong></span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/*<hr className="mb-4"/>*/}
        </div>
    );
};

export default BasketCart;
