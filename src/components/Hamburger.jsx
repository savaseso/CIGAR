import React from 'react'
import { useQuery, gql, useApolloClient } from '@apollo/client' 
import styled, {css} from 'styled-components'
import { FormatListNumbered } from 'styled-icons/material-sharp';
import { useAuth0 } from "../react-auth0-spa";
import { useLocation } from 'react-router-dom'





const Burger = ({ open, setOpen }) => {
  const { isAuthenticated } = useAuth0();
  let location = useLocation();
    return (
      <StyledBurger  isAuthenticated={isAuthenticated} open={open} onClick={() =>setOpen(!open)  }>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }

  export default Burger;


  const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left:1rem;
  z-index: 10;
   @media (max-width: 610px) {
      top: 15%;
      margin-left:0;

     } 
  ${props => props.isAuthenticated && css`
     @media (min-width: 1040px) {
        display:none;
     }
  `}
  ${props => props.isAuthenticated===false && css`
     @media (min-width: 901px) {
        display:none;
     }
  `}



  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#EFFFFA' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`