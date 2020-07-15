import React from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'


const ITEM = gql`
mutation ($id:name!) {
  createCartItem(product_id: $id, quantity: 1) {
    id
  }
  }
`; 

 const Product = ({product,}) => {
  
  const [addCartItem,{loading, error, data}] = useMutation(ITEM);
    return (
        <Card>
          {/* <img srcSet={product.image} alt={product.name} /> */}
          <p>{product.name}</p>  
          <button
           onClick={()=>{
             console.log(product.id)
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

     height: 15rem; 
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