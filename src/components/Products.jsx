 import React from 'react'
import { useQuery,useMutation, gql } from  '@apollo/client'
 import { Redirect, Route } from 'react-router'
import { useAuth0 } from "../react-auth0-spa";
import Product from './Product'
import Loading from '../utils/Loading';



const CIGARS = gql`
query {
  products {
    image
    name
    price
    brand_id
  }
  }
`;


const Products = (props) => {
     const { loading, error, data } = useQuery(CIGARS);
    const {  isAuthenticated } = useAuth0();

    if(loading) return <Loading />
    console.log(error)
    if(error) return <p>Error...</p>
    
    if(isAuthenticated){
        console.log(isAuthenticated)
        console.log(data)
        return data.products.map(product => <Product key={product.id} product={product}/>)
    } else {
    return (
        <div>
          
                  {data.products.map(product => {
                      
                  return <div>
                      <img key={product.id} src={product.image} alt="" srcset=""/>
                    <p>nem</p> 
                  </div> 

                })} 

                hi
        </div>
    )
            }
} 


export default Products;