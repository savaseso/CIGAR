import React from 'react'
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import LeftSide from './LeftSide'
import Nav from '../Navbar/styles/Navstyles'
import RightSide from './RightSide'



const NavBar = ({inputVal, onChange, onSearch}) => {
  
    return (
      <Nav>
        <LeftSide inputVal={inputVal} onChange={onChange} onSearch={onSearch} />  
        <RightSide />
      </Nav>
    )
  

};

export default NavBar;






