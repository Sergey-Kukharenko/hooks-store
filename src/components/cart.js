import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from 'mdbreact';

const Cart = ({cart, add}) => {
    return (
        <MDBCol className="col-lg-4 col-md-12 mb-4">
            <MDBCard>
                <MDBCardImage className="card-img-top" src={cart.img} waves/>
                <MDBCardBody>
                    <MDBCardTitle>{cart.title}</MDBCardTitle>
                    <MDBCardText>{cart.info}</MDBCardText>
                    <MDBBtn onClick={() => add(cart.id)}>Click</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default Cart;
