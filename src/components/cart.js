import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from 'mdbreact';
import {Link} from "react-router-dom";

const Cart = ({cart, addCart}) => {
    return (
        <MDBCol className="d-flex col-lg-4 col-md-12 mb-4">
            <MDBCard>
                <Link to={`/carts/${cart.id}`}>
                    <MDBCardImage className="card-img-top" src={cart.img} waves/>
                </Link>
                <MDBCardBody>
                    <div className="d-flex justify-content-between">
                        <MDBCardTitle className="flex mr-1">{cart.title}</MDBCardTitle>
                        <h4>$ {cart.price}</h4>
                    </div>
                    <MDBCardText>{cart.info}</MDBCardText>
                    <MDBBtn onClick={() => addCart(cart)}>Click</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default Cart;
