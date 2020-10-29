import React, { useEffect } from 'react';
import NavBar from './NavBar'
import Footer from './Footer'
import  { Container }  from '../components/styles/Container'
import styled from 'styled-components'





export default function NotFound(props) {
   
    return (
      <div>
      <NavBar />
        <Container>
           <P>Not found</P>
        </Container>
      <Footer/>
        </div>
    )
}



const P = styled.p`
    font-size:2rem;
    
`