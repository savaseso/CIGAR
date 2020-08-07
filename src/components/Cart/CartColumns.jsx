import React from 'react'
import styled from 'styled-components'

const  CartColumns = (props)  => {
    return(
            <Container>
                <div>
                    <ColumnTitle>Name of product</ColumnTitle>
                </div>
                <div>
                    <ColumnTitle>Price</ColumnTitle>
                </div>
                <div>
                    <ColumnTitle>Quantity</ColumnTitle>
                </div>
                <div>
                    <ColumnTitle>Remove</ColumnTitle>
                </div>
                <div>
                    <ColumnTitle>Total</ColumnTitle>
                </div>
            </Container>
    )
}
export default CartColumns


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(5,2fr);
    margin:1rem auto;
    text-align:center;
    @media (max-width: 768px) {
        display:none;
    }
`

const ColumnTitle = styled.p`
    color: #333;
    opacity:0.7;
`