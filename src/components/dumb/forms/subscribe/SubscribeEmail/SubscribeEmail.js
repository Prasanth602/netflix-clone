import React from "react";
import './SubscribeEmail.css';

function SubscribeEmail ({...restProps}){
    return(
        <input className="subscribe-email" placeholder="Enter Email address" {...restProps} />
    )
}
export default SubscribeEmail;