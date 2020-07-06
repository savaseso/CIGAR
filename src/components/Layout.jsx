import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import styled,{ThemeProvider} from 'styled-components'

const theme = {
    maxWidht:'1000px'
  }
  


const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
        </ThemeProvider>
    )
}
export default Layout