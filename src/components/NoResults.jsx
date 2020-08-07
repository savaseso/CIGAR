import React from 'react'
import styled from 'styled-components'
import  { Container }  from '../components/styles/Container'


 const NoResults = () => {
    return (
        <Container>
            <P>No Results</P>
        </Container>
    )
}


export default NoResults;




const P = styled.p`
    font-size:2rem;
    
`