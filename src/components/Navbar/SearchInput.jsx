import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Search } from '@styled-icons/evaicons-solid/Search'
import Button from '../../utils/button'
import {ButtonStyle} from '../styles/buttonStyles'



const SearchInput = ({inputVal, onChange, onSearch}) => {
  console.log(inputVal)
    return (
       <Container>
          <Input type='search' value={inputVal} onChange={onChange} placeholder='Search for a cigar' />
          {/* <button onClick={onSearch}>Search</button> */}
          <ButtonStyle onClick={onSearch}>Search</ButtonStyle> 
        </Container>
    )
}


export default SearchInput;


const Container = styled.div`
`

const Input = styled.input`
  height: 2rem;
  width:400px;
  border-radius:15px;
  padding:12px;
`


const Logo = styled.img`
`