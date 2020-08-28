import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

const Alert = () => {

    const {error} = useSelector(state => ({
        error: state.shared.error,
    }))

    useEffect(() => {
        if (error)
            show()
        const timer = setTimeout(() => hide(), 3000);
        return () => clearTimeout(timer);
    }, [error])

    const [clsActive, setClsActive] = useState(false)

    const hide = () => setClsActive(false)
    const show = () => setClsActive(true)

    return (
        <div className={clsActive ? "message show" : "message"}>
            <div className="alert alert-danger">{error}</div>
        </div>
    );
};

export default Alert;
