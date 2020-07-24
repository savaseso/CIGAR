import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useSubscription, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../../react-auth0-spa";
import Moment from 'react-moment';
import StarRatings from './StarRating'
import Reviews from './Reviews'



const CIGAR = gql`
subscription ($id:uuid!){
    products_by_pk(id:$id) {
    image
    name
    price
    product_review {
      body
      id
      created_at
      reviews_user {
        username
      }
    }
    products_ratings {
      rating
    }
  }
}
`;


const ProductDetails = (props) => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    const { loading, error, data } = useSubscription(CIGAR, {
        variables: { id: props.match.params.id }
    })

    if (loading) return <p>loading</p>
    if (error) return console.log(error)
   
    const { name, image, price } = data.products_by_pk
    if(data) 
    return (
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>
            <Reviews data={data} props={props} />
        </div>
    )
}


export default ProductDetails