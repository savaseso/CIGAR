import React from 'react'
import { Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";
import styled from 'styled-components'
import { Cart } from '@styled-icons/boxicons-regular/Cart'

const ShoppingCart = styled(Cart)`
  color: #C307;
  width:30px;
  height:30px;
`

const Nav = styled.nav`
  width: 100%;
  height:3.5rem;
  display:flex;
  justify-content:space-between;
  background: #1A1A1D;
  margin:0;
  padding:1rem;
`

const Logo = styled.img`
`

const RightSide = styled.div`
  text-align: right;
  display:inline; 
`
const LeftSide = styled.div`
  text-align: right;
  display:inline;
`
const Input = styled.input`
  height: 1.5rem;
`
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (isAuthenticated) {
    return (
      <Nav>
        <LeftSide>
          <Link to="/"><Logo src='../public\img\tobacco-products-logo.jpg' /></Link>&nbsp;
          <Input type='search' placeholder='Search for a cigar' />
        </LeftSide>
        <RightSide>
          <Link to="/profile">My Account</Link>
          <span>Welcome {user.nickname}</span>
          <button onClick={() => logout()}>Log out</button>
          <ShoppingCart />
        </RightSide>
      </Nav>
    )
  } else {
    return (
      <Nav>
        <LeftSide>
          <Link to="/">Logo</Link>&nbsp;
          <Input type='search' placeholder='Search for a cigar' />
        </LeftSide>
        <RightSide>
          <button onClick={() => loginWithRedirect()}>Log in/Sign up</button>
          <ShoppingCart />
        </RightSide>
      </Nav>
    )
  }

};

export default NavBar;