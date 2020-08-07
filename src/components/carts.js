import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {fetchPhones, increment} from '../actions'
import Cart from "./cart";

const Carts = () => {

    const {carts} = useSelector(state => ({
        carts: state.carts
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhones())
    }, [dispatch])

    const addCart = item => dispatch(increment(item))

    return (
        <div className="row">
            {
                Object.values(carts).map((cart, idx) => <Cart cart={cart} addCart={addCart} key={idx}/>)
            }
        </div>
    )
}

export default Carts
