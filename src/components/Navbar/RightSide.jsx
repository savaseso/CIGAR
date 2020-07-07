import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import Button from '../../utils/button'



export default function RightSide() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    if (isAuthenticated) {
        return (
            <Container>
                <Link to="/profile">My Account</Link>
                <span>Welcome {user.nickname}</span>
                <ProfilePicture src={user.picture} alt="Profile Picture" />

               <Button name={'Logout'} action={logout} /> 
                <ShoppingCart />
            </Container>
        )
    } else {
        return (
        <Container>
            <LoginStyle name={'Login/Signup'} action={loginWithRedirect} />
            <ShoppingCart />
        </Container>
        )
    }
}



const Container = styled.div`
  text-align: right;
  display:inline; 
`

const ShoppingCart = styled(Cart)`
  color: #C307;
  width:30px;
  height:30px;
`

const LoginStyle = styled(Button)`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
`

const ProfilePicture = styled.img`
    height:20px;
    width:25px;
    border-radius:50%;
`