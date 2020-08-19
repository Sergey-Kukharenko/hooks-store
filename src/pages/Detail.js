import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchById, increment} from "../actions";

const Detail = () => {

    const {id} = useParams()

    const {state} = useSelector(state => ({
        state: state.cart
    }))

    const cart = state

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchById(+id))
    }, [dispatch, id])

    const addCart = item => dispatch(increment(item))

    return (

        <section className="mt-100">

            <div className="row">
                <div className="col-md-5 mb-4 mb-md-0">

                    <div className="view zoom z-depth-2 rounded">
                        <img className="img-fluid w-100" src={cart.img} alt={cart.title}/>
                        <div>
                            <div className="mask waves-effect waves-light"></div>
                        </div>
                    </div>

                </div>
                <div className="col-md-7">

                    <h5>Set of 3 seagrass baskets</h5>
                    <p className="mb-2 text-muted text-uppercase small">Storage</p>
                    <ul className="rating">
                        <li>
                            <i className="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li>
                            <i className="fas fa-star fa-sm text-primary"></i>
                        </li>
                        <li>
                            <i className="far fa-star fa-sm text-primary"></i>
                        </li>
                    </ul>
                    <p><span className="mr-1"><strong>$ {cart.price}</strong></span></p>
                    <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente
                        illo.
                        Sit
                        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.</p>
                    <div className="table-responsive">
                        <table className="table table-sm table-borderless mb-0">
                            <tbody>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Size</strong></th>
                                <td>Different sizes</td>
                            </tr>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Material</strong></th>
                                <td>Seagrass</td>
                            </tr>
                            <tr>
                                <th className="pl-0 w-25" scope="row"><strong>Color</strong></th>
                                <td>Sand</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr/>
                    <button type="button" className="btn btn-primary btn-md mr-1 mb-2 waves-effect waves-light">Buy
                        now
                    </button>
                    <button
                        type="button"
                        className="btn btn-light btn-md mr-1 mb-2 waves-effect waves-light"
                        onClick={() => {addCart(cart)}}
                    >
                        <i className="fas fa-shopping-cart pr-2"></i>
                        Add to cart
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Detail;
