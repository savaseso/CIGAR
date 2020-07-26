import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import {ButtonStyle} from '../styles/buttonStyles'



export default function RightSide() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    if (isAuthenticated) {
        return (
            <Container>
                <Link to="/profile">My Account</Link>
                <Welcome>Welcome {user.nickname}</Welcome>
                <ProfilePicture src={user.picture} alt="Profile Picture" />

               <ButtonStyle onClick={()=>logout()}>Logout</ButtonStyle> 
               <Link to='/cart'><ShoppingCart /></Link>
            </Container>
        )
    } else {
        return (
        <Container>
            <ButtonStyle onClick={loginWithRedirect}>Login/Signup</ButtonStyle>
            <Link to='/cart'><ShoppingCart /></Link>
        </Container>
        )
    }
}



const Container = styled.div`
  text-align: right;
  display:inline; 
`

const ShoppingCart = styled(Cart)`
  color: #E7E7D6;
  width:30px;
  height:30px;
`


const ProfilePicture = styled.img`
    height:25px;
    width:25px;
    border-radius:50%;
`
const Welcome = styled.span`
    color:#E7E7E8;
`