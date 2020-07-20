import React from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../../react-auth0-spa";
import { useHistory } from "react-router-dom";



const ITEM = gql`
mutation ($id:name!) {
  createCartItem(product_id: $id, quantity: 1) {
    id
  }
  }
`; 

 const Product = (props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [addCartItem,{loading, error, data}] = useMutation(ITEM);
  let history = useHistory();
  const { stock_available } = props.product.products_inventory
  const { name, price, id, image  } = props.product
    return (
        <Card>
          <div onClick={()=>history.push(`/details/${id}`)}>
          <CardImage srcSet={image} alt={name} />
          <p>{name}</p>  
          <p>{price}</p>  
          <p>Availability:<Stock stock={stock_available}> {stock_available > 0 ? 'In Stock' : 'Out of Stock' }</Stock></p>
          </div>
          <button
           onClick={()=>{
              if(!isAuthenticated){
                return loginWithRedirect()
              }
              addCartItem({variables:{id:`${id}`}})
                .then(()=> console.log('item added to the cart'))
                .catch((e)=>console.log(e)) 
            }}
            >Add to Cart</button>
        </Card>
    )
}


export default Product;


const Card = styled.div`

     height: 20rem;
     width:22rem; 
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
  width:170px;
  height:170px;
   
`

const Stock = styled.span`
 color: ${props => props.stock > 0 ? 'green' : 'red'}

`