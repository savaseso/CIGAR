
import React from 'react'
import { useQuery, gql, useApolloClient } from '@apollo/client' 
import { useAuth0 } from "../react-auth0-spa";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cart } from '@styled-icons/boxicons-regular/Cart'



const Menu = ({ open }) => {
  const {isAuthenticated, logout, user,loginWithRedirect } = useAuth0();

    return (
      <StyledMenu  open={open} isAuthenticated={isAuthenticated}  >
        <Link to='/'>Home</Link>
        <Link to='/profile'>My Account</Link>
       <Link to='/cart'>My Cart<ShoppingCart/></Link>
        {isAuthenticated? <Link onClick={logout}>Log Out</Link> : null}
        <Link to='/contact-us'>Contact Us</Link>


      </StyledMenu>
    )
  }


  export default Menu;

  const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateY(25%)' : 'translateY(-100%)'};
  height: 25rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index:9;
  width: 100%;
 @media (max-width: 610px) {
  transform: ${({ open }) => open ? 'translateY(50%)' : 'translateY(-100%)'};
     }
  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.5rem;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #333;
    }
  }
`


const ShoppingCart = styled(Cart)`
  color: #0D0C1D;
  width:40px;
  height:40px;
  :hover{
      transform:scale(1.1)
  }
`