import React from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../../react-auth0-spa";


const ITEM = gql`
mutation ($id:name!) {
  createCartItem(product_id: $id, quantity: 1) {
    id
  }
  }
`; 

 const Product = ({product,}) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [addCartItem,{loading, error, data}] = useMutation(ITEM);
  const { stock_available } = product.products_inventory
    return (
        <Card>
          <CardImage srcSet={product.image} alt={product.name} />
          <p>{product.name}</p>  
          <p>{product.price}</p>  
          <p>Availability:<Stock stock={stock_available}> {stock_available > 0 ? 'In Stock' : 'Out of Stock' }</Stock></p>
          <button
           onClick={()=>{
              if(!isAuthenticated){
                return loginWithRedirect()
              }
              addCartItem({variables:{id:`${product.id}`}})
                .then(()=> console.log('item added to the cart'))
                .catch((e)=>console.log(e)) 
            }}
            >Add to Cart</button>
        </Card>
    )
}


export default Product;


const Card = styled.div`

     height: 16rem; 
    /*background: red;*/
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: .5rem;
    -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
     display: flex; 
    /* -webkit-box-orient: vertical; */
    /* -webkit-box-direction: normal; */
   -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    color: #5d5e5e; 
`
const CardImage = styled.img`
  width:150px;
  height:150px;
   
`

const Stock = styled.span`
 color: ${props => props.stock > 0 ? 'green' : 'red'}

`