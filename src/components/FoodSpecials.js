import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";
import { CCard, CCardTitle } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CButton } from '@coreui/react';

const FoodSpecials = () => {
    return (
        <Section>
            <SectionContent>
                <div className="section-food">
                    <h1>This Week Specials!</h1>
                </div>
                <div className=" section-food-cards" >
                    <CCard style={{ width: '18rem' }}>
                    <CCardImage orientation="top" src="greeksalad.jpg" height='220px'/>
                        <CCardBody>
                            <CCardTitle>Card title</CCardTitle>
                            <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                                <CButton color="warning" size="sm">Order Now</CButton>
                        </CCardBody>
                    </CCard>
                    <CCard  style={{ width: '18rem' }}>
                    <CCardImage orientation="top"src="pinchos.jpg" height='220px'/>
                        <CCardBody>
                            <CCardTitle>Card title</CCardTitle>
                            <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CCardText>
                                <CButton color="warning" size="sm">Order Now</CButton>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ width: '18rem' }}>
                    <CCardImage orientation="top" src="lemoncake.jpg" height='220px'/>
                        <CCardBody>
                            <CCardTitle>Card title</CCardTitle>
                            <CCardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </CCardText>
                            <CButton color="warning" size="sm">Order Now</CButton>
                        </CCardBody>
                    </CCard>
                </div>
            </SectionContent>
        </Section>
    )
};
export default FoodSpecials;
