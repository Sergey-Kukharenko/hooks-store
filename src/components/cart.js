import React from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol} from 'mdbreact';

const Cart = ({cart, add}) => {
    return (
        <MDBCol>
            <MDBCard>
                <MDBCardImage className="img-fluid" src={cart.img} waves/>
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
