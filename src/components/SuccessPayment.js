import { useMutation, gql } from  '@apollo/client'
import React, { useEffect } from 'react';
import queryString from 'query-string'
import { useAuth0 } from "../react-auth0-spa";
import Cookies from 'universal-cookie';
import NavBar from './NavBar'
import Footer from './Footer'
import  { Container }  from '../components/styles/Container'
import styled from 'styled-components'


const cookies = new Cookies();



const finish = gql`
mutation paymentInfo ($payerId: String,$paymentId: String,$user_id: String ) {
    successPayment(payerId: $payerId, paymentId: $paymentId,user_id:$user_id) {
    userLink
  }
}
`
export default function SuccessPayment(props) {
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();
    const [paymentSuccess,{error, data}] = useMutation(finish);
    useEffect(() => {
        const value=queryString.parse(props.location.search);
        const {PayerID, paymentId} = value
        console.log(PayerID)

       async function finishPayment() {
        await paymentSuccess({ variables: { payerId: PayerID,paymentId:paymentId,user_id: `${isAuthenticated ? user.sub : cookies.get('device')}`  } });
      }
      // Execute the created function directly
      finishPayment();
       
      },[]);
     
    return (
      <div>
      <NavBar />
        <Container>
           <P>Payment was successful!</P>
        </Container>
      <Footer/>
        </div>
    )
}



const P = styled.p`
    font-size:2rem;
    
`