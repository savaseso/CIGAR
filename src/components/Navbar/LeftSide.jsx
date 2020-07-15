import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";




const LeftSide = ({inputVal, onChange, onSearch}) => {
  console.log(inputVal)
    return (
        <Container>
          <Link to="/"><Logo src='../public\img\tobacco-products-logo.jpg' /></Link>&nbsp;
          <Input type='search' value={inputVal} onChange={onChange} placeholder='Search for a cigar' />
          <button onClick={onSearch}>Search</button>
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