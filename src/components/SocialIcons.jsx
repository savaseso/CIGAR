import React from 'react'
import styled from 'styled-components';
import { Facebook, Instagram, Whatsapp } from '@styled-icons/boxicons-logos'

const SocialIcons = () => {
    return (
        <div>
             <Social>
                        <a href="https://www.facebook.com/torontocigar/" target="_blank" rel="noopener noreferrer"><FB /></a>
                        <a href="https://www.instagram.com/c.torontocigar/" target="_blank" rel="noopener noreferrer"><IG /></a>
                        <a href="https://api.whatsapp.com/send?phone=+16472713251" target="_blank" rel="noopener noreferrer"><WA /></a>
            </Social>
        </div>
    )
}


export default SocialIcons


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
        transition: color 0.5s ease-in;
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
        transition: color 0.5s ease-in;
    }
`