import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'



const Error = (props) => {
    return (
        <div>
            <NavBar />
            <Container>
                <P>Something has happened, please try again</P>
            </Container>
            <Footer />
        </div>
    )
}

export default Error



const Container = styled.div`
    height:40rem;
    display:flex;
    justify-content:center;
    align-items:center;

`

const P = styled.p`
    font-size:2rem;
`