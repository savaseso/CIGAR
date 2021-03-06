import React from 'react'
import logo from '../img/spinner.gif'
import styled from 'styled-components'

const Spinner = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

 const Loading = (props) => {
    return (
        <Spinner>
        <img src={logo} alt="loading..." />
        </Spinner>
    )
}


export default Loading;