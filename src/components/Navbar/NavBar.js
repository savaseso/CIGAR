import React from 'react'
import styled from 'styled-components'
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import LeftSide from './LeftSide'
import Nav from '../Navbar/styles/Navstyles'
import RightSide from './RightSide'



const NavBar = () => {
 
    return (
      <Nav>
        <LeftSide />  
        <RightSide />
      </Nav>
    )
  

};

export default NavBar;






