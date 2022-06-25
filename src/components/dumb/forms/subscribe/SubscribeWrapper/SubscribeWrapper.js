import React from "react";
import './SubscribeWrapper.css';

function SubscribeWrapper({children, ...restProps}){
    return(
        <div {...restProps}>
            {children}
        </div>
    )
}
export default SubscribeWrapper;
