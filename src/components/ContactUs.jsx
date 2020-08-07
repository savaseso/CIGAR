import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'
const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <Inner>
                <H1>Contact us</H1>
                <Info>
                    <h2>Call or Email Us</h2>
                    <p>Tel: +1 647.111.1234</p>
                    <p>Email: ctorontocigar@gmail.com</p>
                </Info>
                <Info>
                    <h2>Business Hours</h2>
                    <p>Monday to Friday – 9:00 a.m. until 5:00 p.m.</p>
                    <p>Saturday – 10:00 a.m. until 4:00 p.m.</p>
                    <p>Sunday – Closed</p>
                </Info>
            </Inner>
            <Footer />
        </div>
    )
}


export default ContactUs



const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    height:30rem;
    margin: 1rem auto;
`
const Info = styled.div`
text-align:center;
margin:4rem;
`
const H1 = styled.h1`
   text-align:center;
`