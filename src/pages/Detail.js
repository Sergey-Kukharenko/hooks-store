import React from 'react';
import {useParams} from "react-router";

const Detail = (props) => {

    const {id} = useParams()


    return (
        <div>
            Detail {id}
        </div>
    );
};

export default Detail;
