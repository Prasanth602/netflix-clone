import React from "react";
import FeatureWrapper from "../dumb/header/FeatuerWrapper/FeatureWrapper";
import FeatureTitle from "../dumb/header/FeatureTitle/FeatureTitle";
import HeaderWrapper from '../dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from "../dumb/header/Logo";
import NavBar from "../dumb/header/NavBar/NavBar";
import SignInButton from "../dumb/header/SignInButton/SignInButton";
import SubscribeWrapper from "../dumb/forms/subscribe/SubscribeWrapper/SubscribeWrapper"
import SubscribeEmail from "../dumb/forms/subscribe/SubscribeEmail/SubscribeEmail"
import SubscribeButton from "../dumb/forms/subscribe/subscribeButton/SubscribeButton"


function HeaderComponent (){
    return(
        <HeaderWrapper>
            <NavBar className="navbar-home">
                <Logo />
                <SignInButton />
            </NavBar>
            <FeatureWrapper className="feature-wrapper-home">
                <FeatureTitle className="feature-title-home">
                    Unlimited Movies, TV shows and more
                </FeatureTitle>
            </FeatureWrapper> 
            <SubscribeWrapper className="subscribe-wrapper">
                <SubscribeEmail></SubscribeEmail>
                <SubscribeButton> Get Started </SubscribeButton>
            </SubscribeWrapper>
        </HeaderWrapper>

    )
}
export default HeaderComponent;