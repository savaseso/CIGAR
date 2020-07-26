import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Search } from '@styled-icons/evaicons-solid/Search'



const Logo = ({inputVal, onChange, onSearch}) => {
  console.log(inputVal)
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

const Input = styled.input`
  height: 1.5rem;
`


const LogoImg = styled.img`
  margin-left:2rem;
`