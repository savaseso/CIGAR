import React from 'react'
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import Logo from './Logo'
import Nav from '../Navbar/styles/Navstyles'
import RightSide from './RightSide'
import SearchInput from './SearchInput'



const NavBar = ({inputVal, onChange, onSearch}) => {
  
    return (
      <Nav>
        <Logo />  
        <SearchInput inputVal={inputVal} onChange={onChange} onSearch={onSearch} />
        <RightSide />
      </Nav>
    )
  

};

export default NavBar;






