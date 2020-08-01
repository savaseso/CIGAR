import React from 'react'
import styled from 'styled-components'


 const NoResults = () => {
    return (
        <Container>
            <P>No Results</P>
        </Container>
    )
}


export default NoResults;


const Container = styled.div`
    height:40rem;
    display:flex;
    justify-content:center;
    align-items:center;

`

const P = styled.p`
    font-size:2rem;
    
`