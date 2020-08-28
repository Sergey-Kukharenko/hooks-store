import React, {Fragment, useEffect} from 'react';
import Header from "./components/header";
import routes from "./routes";
import firebase from "./services/firebase";
import {useDispatch} from "react-redux";
import {autoSignIn} from "./actions/auth";
import Alert from "./components/alert";

export default function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const payload = {email: user.email, id: user.uid}
                dispatch(autoSignIn(payload))
            }
        });
    },)

    return (
        <Fragment>
            <Header/>
            <div className="col-lg-12">
                {routes}
            </div>
            <Alert/>
        </Fragment>
    );
}
