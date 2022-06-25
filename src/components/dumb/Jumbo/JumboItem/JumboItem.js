import React from "react";
import JumboImage from "../JumboImage/JumboImage";
import JumboSubHeading from "../JumboSubHeading/JumboSubHeading";
import JumboTitle from "../JumboTitle/JumboTitle";
import './JumboItem.css';

function JumboItem({children, alignment, title, subheading, imgSrc, imageAlt, ...restProps}){
    return(
        <div className="jumbo-item">
            {
                alignment === true && 
                (
                <div>
                    <JumboTitle>{ title }</JumboTitle>
                    <JumboSubHeading>{ subheading }</JumboSubHeading>
                </div>
                )
            }
            {
                alignment === false &&
                (
                <div>
                    <JumboImage src = {imgSrc} alt={imageAlt} />
                </div>  
                )
            }
            {
                alignment === true &&
                (
                <div>
                    <JumboImage src = {imgSrc} alt={imageAlt} />
                </div>
                )
            }{
                alignment === false &&
                (
                <div>
                    <JumboTitle>{ title }</JumboTitle>
                    <JumboSubHeading>{ subheading }</JumboSubHeading>
                </div>  
                )
            }
        </div>
        
    )
}

export default JumboItem;
