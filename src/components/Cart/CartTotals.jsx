import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useMutation, gql } from  '@apollo/client'

const PAYMENT = gql`
mutation {
  orderPayment(currency: "USD") {
    userLink
  }
}
`

const CartTotals = ({data}) => {

const { id, product, price, quantity } = data;
const [payment] = useMutation(PAYMENT);

console.log(data.cart)


    const getTotal = cart => {
         return cart.reduce((accumulator, currentValue)=> currentValue.price * currentValue.quantity + accumulator
        ,0)
    }
    
    return (
        <React.Fragment>
            <Container>
                <Totals>
                   {/*  <Link to='/Products'>
                        <ClearCart onClick={clearCart}>Clear Cart</ClearCart>
                    </Link> */}
                   {/*  <Total><TotalText>subtotal :</TotalText> <strong>{cartSubtotal.toFixed(2)}</strong></Total>
                    <Total><TotalText>tax : </TotalText><strong>{cartTax}</strong></Total>
                    {shipping === 28 ? <Total><TotalText>shipping : </TotalText><strong>{shipping}</strong></Total> : null} */}
                    <Total><TotalText>total : </TotalText><strong>${getTotal(data.cart)}</strong></Total>
                   {/*  <Label> Click here if you are in the US{' '}<ReactCountryFlag code="us" svg /> or Canada{' '}<ReactCountryFlag code="ca" svg /></Label>
                    <Input
                        type="checkbox"
                        checked={USACANADA}
                        onChange={handleChange}
                    /> */}
                    <button onClick={async ()=>{
               
               const data = await payment()
               console.log(data)
                window.location.replace(data.data.orderPayment.userLink)
               console.log(window.location.pathname)
            }}>pay</button>
             </Totals>
            </Container>
        </React.Fragment>
    )
}
export default CartTotals



const Container = styled.div`
    max-width:960px;
    margin: 0 auto;
    padding:2rem 0;
    display:flex;
    justify-content:flex-end;
    @media (max-width: 1100px) {
        justify-content:center;
    }
   `
const ClearCart = styled.button`
    padding:0.30rem 0.5rem;
    border:1px solid red;
    border-radius:10%;
    color:#fff;
    background-color:red;
    font-size:1rem;
    &:hover{
        background-color:#fff;
        color:red;
        cursor: pointer;
    }
`

const Totals = styled.div`
     display:flex;
    flex-direction:column;
    align-items:center;
`


const Total = styled.h5`
    padding:0.75rem;
    font-size:1.3rem;
    color:#E0A400;
`

const TotalText = styled.span`
    font-style:italic;
    color:#333;
    text-align:left;
`
const Label = styled.label`
    display: inline-block;
    color:#fff;
    padding:5px;
`

const Input = styled.input`
     margin:10px;
     width:20px;
     height:20px;
`