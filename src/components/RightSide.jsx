import React from 'react'
import { useAuth0 } from "../react-auth0-spa";
import styled, {css} from 'styled-components';
import { Link } from "react-router-dom";
import { Cart } from '@styled-icons/boxicons-regular/Cart'
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'
import { ButtonStyle } from './styles/buttonStyles'
import SocialIcons from './SocialIcons'
import Hamburger from './Hamburger'



const RightSide = ({open,setOpen}) => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    if (isAuthenticated) {
        return (
            <div>
            <Container isAuthenticated>
                <div>
                    <Greetings>
                        <Welcome>Welcome <Name to="/profile">{user.nickname}</Name></Welcome>
                        <ProfilePicture src={user.picture} alt="Profile Picture" />
                    </Greetings>
                   <SocialIcons />
                </div>
                <Inner>
                    <ButtonStyle onClick={() => logout()}>Logout</ButtonStyle>
                    <Link to='/cart'><ShoppingCart /></Link>
                </Inner>
            </Container>
            <Hamburger open={open} setOpen={setOpen} />
            </div>
        )
    } else {
        return (
            <div>
            <Container>
                <SocialIcons />
                <ButtonStyle onClick={loginWithRedirect}>My Account</ButtonStyle>
                <Link to='/cart'><ShoppingCart /></Link>
            </Container>
            <Hamburger open={open} setOpen={setOpen} />
            </div>
        )
    }
}


export default RightSide;


const Container = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 ${props => props.isAuthenticated && css`
     @media (max-width: 1040px) {
        display:none;
     }
  `}
 @media (max-width: 900px) {
      display:none;
    }
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

