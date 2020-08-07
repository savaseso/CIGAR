import React from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client';
import { Trash } from '@styled-icons/boxicons-regular/Trash'


const UPDATECARTITEM = gql`
  mutation ($id:name!,$quantity: Int!) {
    updateCartItem(id:$id, quantity:$quantity) {
    quantity
  }
  }
`;
const REMOVEITEM = gql`
  mutation ($id:name!) {
    deleteCartItem(product_id: $id) {
    id
  }
  }
`;

const CartItem = ({ data }) => {
    const { id, product, price, quantity } = data;
    const [updateQuantity, { load, err, dat }] = useMutation(UPDATECARTITEM);
    const [removeItem] = useMutation(REMOVEITEM);

    return (
        <Container>
            <ItemContainer>
                <strong><ProductTitle>{product}</ProductTitle></strong>
            </ItemContainer>
            <ItemContainer>
                <p>${' '}{price}</p>
            </ItemContainer>
            <ItemContainer>
                <div>
                    <div>
                        <Button onClick={() => updateQuantity({ variables: { id: `${id}`, quantity: `${quantity - 1}` } })
                            .then(() => console.log(quantity))
                            .catch((e) => console.log(e))} >-</Button>
                        <span>{quantity}</span>
                        <Button onClick={() => updateQuantity({ variables: { id: `${id}`, quantity: `${quantity + 1}` } })
                            .then(() => console.log('ITEM WAS RATED'))
                            .catch((e) => alert(e.message))} >+</Button>
                    </div>
                </div>
            </ItemContainer>
            <ItemContainer>
                <div onClick={() => removeItem({ variables: { id: `${id}`} })
                            .then(() => console.log('ITEM WAS Deleted'))
                            .catch((e) => console.log('ITEM WAS Deleted'))}>
                    <TrashIcon />
                </div>
            </ItemContainer>
            <ItemContainer>
                <strong>item total:${price * quantity}</strong>
            </ItemContainer>
        </Container>
    )
}
export default CartItem


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(5,2fr);
    margin:2rem;
    text-align:center;
    @media (max-width: 768px) {
        grid-template-columns:4fr;
        border:solid 1px #E0A400;
        margin-bottom:2rem;
        opacity:0.8;
  }
`
const ItemContainer = styled.div`
    color:#E0A400;
    @media (max-width:768px) {
       padding:0.75rem;
    }
`
const ProductTitle = styled.span`
       @media (max-width:768px) {
        color:#333;
        opacity:0.8;
    }
`
const Button = styled.span`
    border:1px solid #E0A400;
    padding:10px 10px;
    margin:10px;
    cursor: pointer;
    &:hover{
        background-color:#E0A400;
        color:#000;
    }

`
const TrashIcon = styled(Trash)`
    color: red;
    cursor:pointer;
    width:1.7rem;
    height:1.7rem;
    text-align:center;
    &:hover{
        transform:scale(1.1)
    }

` 