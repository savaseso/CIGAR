import React from 'react'
import { useAuth0 } from "../react-auth0-spa";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'
import { ButtonStyle } from './styles/buttonStyles'



const RightSide = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    if (isAuthenticated) {
        return (
            <Container>
                <div>
                    <Greetings>
                        <Welcome>Welcome <Name to="/profile">{user.nickname}</Name></Welcome>
                        <ProfilePicture src={user.picture} alt="Profile Picture" />
                    </Greetings>
                    <Social>
                        <a href="https://www.facebook.com/torontocigar/" target="_blank" rel="noopener noreferrer"><FB /></a>
                        <a href="https://www.instagram.com/c.torontocigar/" target="_blank" rel="noopener noreferrer"><IG /></a>
                        <a href="https://api.whatsapp.com/send?phone=+16472713251" target="_blank" rel="noopener noreferrer"><WA /></a>
                    </Social>
                </div>
                <Inner>
                    <ButtonStyle onClick={() => logout()}>Logout</ButtonStyle>
                    <Link to='/cart'><ShoppingCart /></Link>
                </Inner>
            </Container>
        )
    } else {
        return (
            <Container>
                <ButtonStyle onClick={loginWithRedirect}>My Account</ButtonStyle>
                <Link to='/cart'><ShoppingCart /></Link>
            </Container>
        )
    }
}


export default RightSide;


const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`
const Inner = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
`
const Greetings = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`

const ShoppingCart = styled(Cart)`
  color:${props => props.theme.iconsColor};
  width:40px;
  height:40px;
  :hover{
      transform:scale(1.1)
  }
`

const Social = styled.div`
padding:0.5rem;

`
const FB = styled(Facebook)`
    color: ${props => props.theme.iconsColor};
    width:30px;
    height:30px;
    cursor:pointer;
    :hover {
        color:#4267B2;
        transition: color 0.7s ease-in;
    }
`
const IG = styled(Instagram)`
    color: ${props => props.theme.iconsColor};
    width:30px;
    height:30px;
    cursor:pointer;
    :hover {
        color: ${props => props.theme.iconsColor};;
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        border-radius: 10px;   
    }
`
const WA = styled(Whatsapp)`
    color: ${props => props.theme.iconsColor};
    width:30px;
    height:30px;
    cursor:pointer;
    :hover {
        color:#25d366;
        transition: color 0.7s ease-in;
    }
`


const ProfilePicture = styled.img`
    height:25px;
    width:25px;
    border-radius:50%;
    margin-right:3rem;
    margin-left:0.5rem;
`
const Welcome = styled.span`
    color:#E7E7E8;
`

const Name = styled(Link)`
    margin-left:0.1rem;
    color:#9E6924;
`