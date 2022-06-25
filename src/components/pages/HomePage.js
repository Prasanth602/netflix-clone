import React from "react";
import HeaderComponent from "../smart/HeaderComponent";
import Separator from "../dumb/Separator/Separator";
import JumboComponent from "../dumb/Jumbo/JumboComponent/JumboComponent";
import AccordianComponent from "../dumb/Accordian/AccordianComponent/AccordianComponent";
import FooterComponent from "../dumb/Footer/FooterComponent/FooterComponent";

function HomePage(){
    return(
        <div className="home-page">
            <HeaderComponent />
            <Separator />
            <JumboComponent/>
            <AccordianComponent />
            <Separator />
            <FooterComponent />
        </div>
    );
}
export default HomePage;