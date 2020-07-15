
import React from 'react'
import styled from 'styled-components'





 const Footer = (props) => {
    return (
        <Container>
            Footer
        </Container>
    )
}

export default Footer;



const Container = styled.div`
 height: 20vh;
 width: 100vw;
 background:${props => props.theme.footer};
`