import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import { useSubscription, gql } from '@apollo/client'

const CART = gql`
subscription {
    cart {
    id
    price
    product_id
    product
    quantity
    user_id
  }
  }
`;



const Cart = () => {
    const {isAuthenticated, loading, user,loginWithRedirect } = useAuth0();
    const { load, error, data } = useSubscription(CART);

    console.log(load)
    console.log(error)
    console.log(data)
    if(loading){
        return <p>loading</p>
      }
    if(!isAuthenticated){
        return loginWithRedirect()
      }
    if(isAuthenticated){
        if(!data){
            return <p>loading</p>
        } else {
        return (
            <div>
                {data.cart.map(cartItem=> <p>{cartItem.quantity}</p>)} 
            </div>
        )
        }
    }

}


export default Cart;