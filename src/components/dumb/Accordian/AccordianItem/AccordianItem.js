import React from "react";
import './AccordianItem.css';

function AccordianItem({ children, ...restProps }){
    return(
        <div className="accordian-item" { ...restProps }>
            {children}
        </div>
    )
}
export default AccordianItem;