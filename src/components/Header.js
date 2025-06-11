import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";
import { CButton } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const Header = () => {
    return (
        <Section name="header" bgColor="#495E57" >
            <SectionContent className="header-container">
                <div className="header-content">
                    <h1 className="header-title">Little Lemon</h1>
                    <h2 className="header-subtitle">Chicago</h2>
                    <p className="header-copy">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <CButton className="header-button" color="warning" size="lg" href="./booking">Reserve a Table</CButton>
                </div>
                <div>
                    <img className="header-img" src="restauranfood.jpg" alt="restaurant"></img>
                </div>
            </SectionContent>
        </Section>
    )
};
export default Header;
