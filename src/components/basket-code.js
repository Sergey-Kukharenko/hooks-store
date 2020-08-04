import React from 'react';

const BasketCode = () => {
    return (
        <div className="card-body">

            <a className="dark-grey-text d-flex justify-content-between collapsed"
               data-toggle="collapse" href="#collapseExample" aria-expanded="false"
               aria-controls="collapseExample">
                Add a discount code (optional)
                <span><i className="fas fa-chevron-down pt-1"></i></span>
            </a>

            <div className="collapse">
                <div className="mt-3">
                    <div className="md-form md-outline mb-0">
                        <input type="text" className="form-control font-weight-light"
                               placeholder="Enter discount code"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasketCode;
