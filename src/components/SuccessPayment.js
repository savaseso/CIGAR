import { useMutation, gql } from  '@apollo/client'
import React, { useEffect } from 'react';
import queryString from 'query-string'



const finish = gql`
mutation paymentInfo ($payerId: String,$paymentId: String) {
    successPayment(payerId: $payerId, paymentId: $paymentId) {
    userLink
  }
}
`
export default function SuccessPayment(props) {
    const [paymentSuccess,{error, data}] = useMutation(finish);
    useEffect(() => {
        const value=queryString.parse(props.location.search);
        const {PayerID, paymentId} = value
        console.log(PayerID)

       async function finishPayment() {
        await paymentSuccess({ variables: { payerId: PayerID,paymentId:paymentId } });
      }
      // Execute the created function directly
      finishPayment();
       
      },[]);
     
    return (
        <div>
            successfull
        </div>
    )
}
