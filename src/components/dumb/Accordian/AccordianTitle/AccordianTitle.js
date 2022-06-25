import React from "react";
import './AccordianTitle.css';

function AccordianTitle({ children,isOpen, handleClick, ...restProps}){

    return(
        <div className="accordian-title" {...restProps} onClick = {()=> handleClick()}>
            {children}
            {
                isOpen === true &&
                (
                    <img src="images/icons/icons8-close-24.png" className="accordian-icon" />
                )
            }
            {
                isOpen === false &&
                (
                    <img src="images/icons/icons8-add-24.png" className="accordian-icon" />
                )
            }
        </div>
    )
}
export default AccordianTitle;