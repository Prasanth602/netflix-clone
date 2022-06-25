import React from "react";
import HeaderWrapper from "../dumb/header/HeaderWrapper/HeaderWrapper";
import Logo from "../dumb/header/Logo";
import NavBar from "../dumb/header/NavBar/NavBar";
import SigninComponent from "../smart/SigninComponent/SigninComponent";
import FooterComponent from "../dumb/Footer/FooterComponent/FooterComponent";

function SigninPage(){
    return(
        <>
            <HeaderWrapper>
                <NavBar className ="navbar-home">
                    <Logo />
                </NavBar>
                <SigninComponent />    
            </HeaderWrapper>
            <FooterComponent />
        </>
    )
}

export default SigninPage;