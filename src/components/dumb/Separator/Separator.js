import React from "react";
import './Separator.css';

function Separator ({children, ...restProps}){
    return (
        <div className="separator" {...restProps}>
            {children}
        </div>
    )
}

export default Separator;