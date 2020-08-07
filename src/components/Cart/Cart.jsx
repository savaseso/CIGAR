import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import { useSubscription, gql } from '@apollo/client'
import styled from 'styled-components'
import Loading from '../../utils/Loading'
import NavBar from '../NavBar'
import Footer from '../Footer'
import EmptyCart from './EmptyCart'
import CartContainer from './CartContainer'


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
        return <Loading />
      }
    if(!isAuthenticated){
        return loginWithRedirect()
      }
    if(isAuthenticated){
        if(!data){
            return <Loading />
        } else {
        return (
            <div>
                <NavBar />
                {data.cart.length === 0 ? <EmptyCart /> : <CartContainer data={data}/>} 
                <Footer />
            </div>
        )
        }
    }

}


export default Cart;

