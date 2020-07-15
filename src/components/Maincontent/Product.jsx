import React from 'react'
import styled from 'styled-components'



 const Product = ({product}) => {
    return (
        <Card>
          {/* <img srcSet={product.image} alt={product.name} /> */}
          <p>{product.name}</p>  
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