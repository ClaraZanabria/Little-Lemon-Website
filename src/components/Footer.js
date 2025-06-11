import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";

const Footer = () => {
    return (
        <Section style={{display: 'column'}} >
            <SectionContent className="section-footer">
                <div className="section-footer-nav">
                    <img src="logo.png" alt="logo"></img>
                </div>
                <div className="section-footer-nav">
                    <b>Doormat Navigation</b>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservations</p>
                    <p>Order Online</p>
                    <p>Login</p>
                </div>
                <div className="section-footer-nav">
                    <b>Contact</b>
                    <p>Adress</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>
                <div className="section-footer-nav">
                    <b>Social Media Links</b>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </SectionContent>
        </Section>
    );
};
export default Footer;