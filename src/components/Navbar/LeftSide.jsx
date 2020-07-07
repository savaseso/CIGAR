import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";



const LeftSide = () => {
    return (
        <Container>
          <Link to="/"><Logo src='../public\img\tobacco-products-logo.jpg' /></Link>&nbsp;
          <Input type='search' placeholder='Search for a cigar' />
        </Container>
    )
}


export default LeftSide;


const Container = styled.div`
  text-align: right;
  display:inline;
`

const Input = styled.input`
  height: 1.5rem;
`


const Logo = styled.img`
`