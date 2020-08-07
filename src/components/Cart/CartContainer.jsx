import React from 'react';
import CartColumns from './CartColumns';
import CartItems from './CartItems';
import styled from 'styled-components'
import CartTotals from './CartTotals'


const CartContainer = (props) => {
   
        return (
            <div>
                <Heading>Your Cart</Heading>
                <CartColumns />
                <CartItems data={props.data} /> 
                <CartTotals data={props.data}/>
            </div>
        )
        }
    




export default CartContainer;

const Heading = styled.h1`
    text-align:center;
    color:#E0A400;
    padding:4rem 0 2rem 0;
`