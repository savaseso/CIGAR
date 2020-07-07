import React from 'react'
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer'
import styled, {ThemeProvider} from 'styled-components'

const theme = {
    maxWidth:'1000px',
    buttonColor:'#fff',
    navBar: '#1A1A1D',
    footer:'#333'
  }
  

const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <NavBar />
            <Container>{props.children}</Container>
            <Footer />
        </div>
        </ThemeProvider>
    )
}
export default Layout



const Container = styled.div`
  width:1000px;
  margin: 0 auto;
`