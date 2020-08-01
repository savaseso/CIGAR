import React from 'react'
import { useQuery, gql } from '@apollo/client' 
import { useLocation } from 'react-router-dom'
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import Logo from './Logo'
import Nav from './styles/Navstyles'
import RightSide from './RightSide'
import SearchInput from './SearchInput'
import Menu from './Menu'
import Hamburger from './Hamburger'



/* 
const BURGER = gql`
query  {
    cart @client{
      hamburgerOpen
    }
  }
`; */

const NavBar = ({inputVal, onChange, onSearch}) => {
 /*  const { loading, error, data } = useQuery(BURGER);
  if(data) console.log(loading)
  if(error) console.log(error) */
  let location = useLocation();
  console.log(location.pathname)
    return (
      <Nav>
        <Logo />  
        {location.pathname==='/' ? <SearchInput inputVal={inputVal} onChange={onChange} onSearch={onSearch} /> : null}
        <RightSide />
       {/*  <Hamburger />
        <Menu /> */}
      </Nav>
    )
  

};

export default NavBar;






