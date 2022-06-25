import React from "react";
import HeaderWrapper from "../dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../dumb/header/Logo";
import NavBar from "../dumb/header/NavBar/NavBar";
import SignupComponent from "../smart/SignupComponent/SignupComponent";
import FooterComponent from "../dumb/Footer/FooterComponent/FooterComponent";

function SignupPage(){
    return(
        <>
            <HeaderWrapper>
                <NavBar className ="navbar-home">
                    <Logo />
                </NavBar>
                <SignupComponent />    
            </HeaderWrapper>
            <FooterComponent />
        </>
    )
}

export default SignupPage;