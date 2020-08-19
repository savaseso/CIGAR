import React from 'react'
import styled from 'styled-components'
import Button from '../utils/button'
import { ButtonStyle } from './styles/buttonStyles'



const SearchInput = ({inputVal, onChange, onSearch}) => {
    return (
       <Container>
          <Input type='search' value={inputVal} onChange={onChange} placeholder='Search for a cigar' />
          <ButtonStyle onClick={onSearch}>Search</ButtonStyle> 
        </Container>
    )
}


export default SearchInput;


const Container = styled.div`
  @media (max-width: 610px) {
     display:flex;
     flex-direction:column;
     justify-content:center;
     align-items:center;
    }
`

const Input = styled.input`
  height: 2rem;
  width:400px;
  border-radius:15px;
  padding:12px;
  @media (max-width: 1000px) {
      width:300px;
    }
  @media (max-width: 767px) {
      width:250px;
    }
  @media (max-width: 610px) {
    width:220px;
    }
  @media (max-width: 500px) {
      width:200px;
    }
  @media (max-width: 321px) {
      width:180px;
    }

`


