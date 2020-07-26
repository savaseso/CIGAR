
import React from 'react'
import styled from 'styled-components'
//import { Facebook } from '@styled-icons/boxicons-logos/FacebookSquare'
import { Link } from "react-router-dom";



 const Footer = (props) => {
    return (
        <Container>
            {/* <Social /> */}
            <StyledLink to='/terms-conditions'>Terms and Conditions</StyledLink>
            <StyledLink to='/contact-us'>Contact Us</StyledLink>
           {/*  <Social>Terms and Conditions</Social>
            <AllRights>Terms and Conditions</AllRights> */}
        </Container>
    )
}

export default Footer;



const Container = styled.div`
 height: 400px;
 width: 100vw;
 background:${props => props.theme.footer};
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

