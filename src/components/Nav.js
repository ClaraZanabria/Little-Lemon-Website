import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";

const Navbar = () => {
    return (
        <Section>
            <SectionContent>
                <ul className="section-nav">
                    <li><img src="./logo.png" alt="Navigation Logo" className="navlogo"></img></li>
                    <li><a href="./home">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./menu">Menu</a></li>
                    <li><a href="./booking">Booking</a></li>
                    <li><a href="#_">Order Online</a></li>
                    <li><a href="#_">Login</a></li>
                </ul>
            </SectionContent>
        </Section>
    );
};
export default Navbar;