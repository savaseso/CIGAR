import React from 'react'
import logo from '../img/Rolling-1s-200px.gif'
import styled from 'styled-components'

const Spinner = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`

 const Loading = (props) => {
     console.log(props)
    return (
        <Spinner>
        <img src={logo} alt="loading..." />
        </Spinner>
    )
}


export default Loading;