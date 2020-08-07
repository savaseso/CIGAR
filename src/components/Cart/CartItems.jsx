import React from 'react'
import { useSubscription, gql } from '@apollo/client'
import CartItem from './CartItem'


const CartItems = (props) => {
    console.log(props.data)
    return (
        <div>
             {props.data.cart.map(cartItem=> <CartItem key={cartItem.id} data={cartItem}/>)} 
        </div>
    )
}


export default CartItems