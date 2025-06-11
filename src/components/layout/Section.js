import React from "react";

const Section = ({children, bgColor, padding, name}) => {
    return (
        <div id={name} className={`section section-${name}`} style={{backgroundColor: bgColor, paddingTop: padding, paddingBottom: padding}}>
            {children}
        </div>
    )
};

export default Section;