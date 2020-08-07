import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings';
import { useQuery, useMutation, useSubscription, useApolloClient, gql } from '@apollo/client';
import { useAuth0 } from "../react-auth0-spa";
import { Data } from 'styled-icons/boxicons-solid';
import {calculateAverage} from '../utils/calculateAverage'


const RATING = gql`
subscription ($id:uuid!) {
    products_by_pk(id:$id) {
    products_ratings {
      rating
      user
    }
  }
  }
`;


const STARRATING = gql`
mutation ($productId:uuid!,$rating:Int!,$user:String!) {
    insert_products_ratings_one(object: {productId: $productId, rating: $rating, user:$user }) {
    id
  }
  }
`; 



const StarRating = (props) => {
    const { isAuthenticated, loginWithRedirect,user } = useAuth0();
    const [rating, setRating] = useState(0);
    const { loading, error, data } = useSubscription(RATING, {
        variables: { id: props.id }
    });
    const [addRating,{load, err, dat}] = useMutation(STARRATING);
   

    useEffect(() => {

        if (data) {

            if (data.products_by_pk.products_ratings.length !== 0) {
                setRating(calculateAverage(data.products_by_pk.products_ratings))
            }

        }
    }, [data])
    const changeRating = (newRating) => {
        addRating({variables:{rating:`${newRating}`,productId:`${props.id}`,user:`${user.sub}`}})
            .then(()=> console.log('ITEM WAS RATED'))
            .catch((e)=>alert('You already rated this product')) 
        
    }

    return (
       
        <StarRatings
            rating={rating}
            starRatedColor="#FED700"
            starHoverColor="#FED700"
            starDimension="20px"
            starSpacing="1px"
            changeRating={isAuthenticated ? props.noRatings ? null : changeRating : null}
            numberOfStars={5}
            name='rating'
        />
  
    );
}
export default StarRating