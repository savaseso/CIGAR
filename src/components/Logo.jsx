import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const Logo = () => {
    return (
        <Container>
          <Link to="/"><LogoImg src='https://res.cloudinary.com/dwrtfccno/image/upload/v1597858949/sickfits/ctorontocigar/output-onlinepngtools_yjsqar.png' /></Link>&nbsp;
        </Container>
    )
}


export default Logo;


const Container = styled.div`
 /*  text-align: right; */
  display:inline;
`


const LogoImg = styled.img`
  margin-left:2rem;
  @media (max-width: 900px) {
    margin-left:0;
    }
   @media (max-width: 700px) {
    margin-left:0;
    width:140x;
    height:40px;
    } 
   @media (max-width: 610px) {
    margin-bottom:20px;
    }
/*   @media (max-width: 650px) {
    height:120px;
    }  */
`