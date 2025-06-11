import React from 'react'
import Navbar from '../components/Nav';
import Section from '../components/layout/Section';
import SectionContent from '../components/layout/SectionContent';

function ConfirmedBooking() {
  return (
    <>
        <Navbar/>
        <Section className="section-article-h2" bgColor="#fff" padding="50px">
            <SectionContent >
                <h2>Your booking is confirmed!</h2>
            </SectionContent>
        </Section>
    </>
  )
};

export default ConfirmedBooking;