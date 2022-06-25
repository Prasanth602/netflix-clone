import React from "react";
import './SubscribeButton.css';

function SubscribeButton({children, ...restProps}){
    return(
        <div className="subscribe-button">
            <a  href="./signup" {...restProps}>
                {children}
            <img className="subscribe-button-image" src="../../../../../images/icons/right-arrow.png" />
            </a> 
        </div>
    )
}
export default SubscribeButton;