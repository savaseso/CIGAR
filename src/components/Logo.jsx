import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const Logo = () => {
    return (
        <Container>
          <Link to="/"><LogoImg src='https://res.cloudinary.com/dwrtfccno/image/upload/v1595704609/sickfits/ctorontocigar/ccigarlogo_domxfg.png' /></Link>&nbsp;
        </Container>
    )
}


export default Logo;


const Container = styled.div`
  text-align: right;
  display:inline;
`


const LogoImg = styled.img`
  margin-left:2rem;
`