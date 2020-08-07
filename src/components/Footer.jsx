
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import SocialIcons from './SocialIcons'



const Footer = (props) => {
    return (
        <Container>
            <StyledLink to='/terms-conditions'>Terms and Conditions</StyledLink>
            <StyledLink to='/contact-us'>Contact Us</StyledLink>
            <SocialIcons />
            <P>© 2018 - ctorontocigar.com All rights reserved</P>
        </Container>
    )
}

export default Footer;



const Container = styled.div`
 height: 400px;
 width: 100vw;
 background-color:${props => props.theme.footer};
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
`


const StyledLink = styled(Link)`
    text-decoration:none;
    font-weight: bold;
    color:#E7E7D6;
    margin:1rem;
   /*  border-radius:10%;
    padding:0.75rem 2rem; */
    &:hover{
        color:#fff;
        transition: color 1s;
    }
 /*    @media (max-width: 550px) {
        font-size:0.75rem;
    } */
 
`



const P = styled.p`
    margin-top: 3rem;
     color:#E7E7D6;
     font-size: 0.8rem;
`