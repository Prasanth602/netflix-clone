import React from "react";
import SignText from "../../dumb/SignText/SignText";
import SignTitle from "../../dumb/SignTitle/SignTitle";
import SignButton from "../../dumb/SignButton/SignButton";
import SignInput from "../../dumb/SignInput/SignInput";
import './SignupComponent.css';
import SignLink from "../../dumb/SignLink/SignLink";
import SignCaptcha from "../../dumb/SignCaptcha/SignCaptcha";

function SignupComponent ({ children, ...restProps}){
    return(
        <div className="sign-form-wrapper">
            <form className="sign-form-base">
                <SignTitle>Sign Up</SignTitle>
                <SignInput 
                    type='text'
                    placeholder ="Name"
                />
                <SignInput 
                    type='text'
                    placeholder ="Email Address"
                />
                <SignInput 
                    type='Password'
                    placeholder='Password'
                    autoComplete ='off'
                /> 
                <SignButton>Sign Up</SignButton>
                <SignText>Already a User ? <SignLink>Sign In Now</SignLink> </SignText>  
                <SignCaptcha>This page is protected by Google reCAPTCHA to     ensure you're not a bot. Learn more.
                </SignCaptcha>  
            </form>
        </div>
    )
}
export default SignupComponent