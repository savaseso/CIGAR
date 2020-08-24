import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { useLocation } from 'react-router-dom'
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import Logo from './Logo'
import Nav from './styles/Navstyles'
import RightSide from './RightSide'
import SearchInput from './SearchInput'
import Menu from './Menu'
import Hamburger from './Hamburger'





const NavBar = ({ inputVal, onChange, onSearch }) => {
  const [open, setOpen] = useState(false)
  let location = useLocation();
  console.log(location.pathname)
  return (
    <Nav path={location.pathname}>
        <Logo />
        {location.pathname === '/' ? <SearchInput inputVal={inputVal} onChange={onChange} onSearch={onSearch} /> : null}
        <RightSide open={open} setOpen={setOpen} />
        <Menu open={open} />
    </Nav>
  )


};

export default NavBar;






