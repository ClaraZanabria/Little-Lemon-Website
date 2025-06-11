import React from "react";
import Section from "./layout/Section";
import SectionContent from "./layout/SectionContent";
import { CCard, CCardTitle } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardBody } from '@coreui/react'
import { CCardText } from '@coreui/react'


const Testimonials = () => {
    return (
        <Section bgColor="#495E57">
            <SectionContent > 
                <div className="section-testimonials">
                    <h1>Testimonials</h1>
                </div >
                <div className=" section-testimonials-cards" >
                    <CCard style={{ width: '15rem'}}>
                    <CCardImage orientation="top" src="student.png" width={200} height={200} />
                        <CCardBody>
                            <CCardTitle>Clara</CCardTitle>
                            <CCardText>
                                The food is great! I can't wait for my next visit!
                                </CCardText>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ width: '14rem' }}>
                    <CCardImage orientation="top" src="business-man.png" width={200} height={200}  />
                        <CCardBody>
                            <CCardTitle>Antonio</CCardTitle>
                            <CCardText>
                                The service was amazing, I totally recomend.
                                </CCardText>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ width: '14rem' }}>
                    <CCardImage orientation="top" src="writer.png" width={200} height={200} />
                        <CCardBody>
                            <CCardTitle>Ashlee</CCardTitle>
                            <CCardText>
                                I love the food here!
                                </CCardText>
                        </CCardBody>
                    </CCard>
                    <CCard style={{ width: '14rem' }}>
                    <CCardImage orientation="top" src="trainer.png" width={200} height={200} />
                        <CCardBody>
                            <CCardTitle>Corrine</CCardTitle>
                            <CCardText>
                                The food is so tasty and service was awsome.
                                </CCardText>
                        </CCardBody>
                    </CCard>
                    </div>
            </SectionContent>
        </Section>
    )
};
export default Testimonials;