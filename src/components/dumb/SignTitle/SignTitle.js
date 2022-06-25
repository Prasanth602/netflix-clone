import React from "react";
import './SignTitle.css';

function SignTitle ({children, ...restProps}){
    return(
        <h2 className="sign-title" {...restProps}>
            {children}
        </h2>
    )

}

export default SignTitle;