import React from 'react'

 const Product = (props) => {
     console.log(props)
    return (
        <div>
          <p>{props.product.name}</p>  
        </div>
    )
}


export default Product;