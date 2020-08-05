import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {addToBasket, fetchPhones} from '../actions'
import Cart from "./cart";


const Carts = () => {

    const {carts} = useSelector(state => ({
        carts: state.carts
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhones())
    }, [dispatch])

    const add = id => dispatch(addToBasket(id))

    return (
        <div className="row">
            {
                Object.values(carts).map((cart, idx) => <Cart cart={cart} add={add} key={idx}/>)
            }
        </div>
    )
}

export default Carts
