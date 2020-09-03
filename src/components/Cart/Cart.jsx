import React from 'react'
import { useAuth0 } from "../../react-auth0-spa";
import { useSubscription, gql } from '@apollo/client'
import styled from 'styled-components'
import Loading from '../../utils/Loading'
import NavBar from '../NavBar'
import Footer from '../Footer'
import EmptyCart from './EmptyCart'
import CartContainer from './CartContainer'
import Cookies from 'universal-cookie';

const cookies = new Cookies();


const CART = gql`
subscription ($user_id:String!) {
    cart (where: {user_id: {_eq: $user_id}}, order_by: {created_at: desc}) {
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
    const { load, error, data } = useSubscription(CART , {
        variables: { user_id: !user ? cookies.get('device') : user.sub   }
    } );
    

   
    if(loading){
        return <Loading />
      }

        if(!data){
            return <Loading />
        } else {
        return  (
            <div>
                <NavBar />
                {data.cart.length === 0 ? <EmptyCart /> : <CartContainer data={data}/>} 
                <Footer />
            </div>
        )}
      }
   
    


export default Cart;

