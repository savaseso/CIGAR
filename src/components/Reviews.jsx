import React, { useState } from 'react'
import {  useMutation, gql } from '@apollo/client'
import { useAuth0 } from "../react-auth0-spa";
import Moment from 'react-moment';
import StarRatings from './StarRating'

const ADDREVIEW = gql`
mutation ($body:String! $cigar_id:uuid! $user_id:String!)  {
  insert_reviews_one(object: {body: $body, cigar_id: $cigar_id, user_id: $user_id}) {
    id
  }
}
`


const Reviews = (props) => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    const [inputVal, setInputVal] = useState('')
    const [addReview] = useMutation(ADDREVIEW);
    const { product_review } = props.data.products_by_pk
    const { id } = props.props.match.params
    return (
        <div>
           {/*  <StarRatings id={props.props.match.params.id} /><span>({props.data.products_by_pk.products_ratings.length})</span> */}
            {
                product_review ?
                    product_review.map(review => <div key={review.id}>
                        <p>{review.body}</p>
                        <Moment fromNow >{review.created_at}</Moment>
                        <span >{' '}by {review.reviews_user.username}</span>
                    </div>)
                    : null
            }
            {
                isAuthenticated ?
                    <div>

                        <input type="text"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                addReview({ variables: { body: `${inputVal}`, cigar_id: `${id}`, user_id: `${user.sub}` } })
                                    .then(() => setInputVal(""))
                                    .catch((e) => console.log(e))
                            }}>
                            submit
                        </button>
                    </div> : null
            }
            
        </div>
    )
}


export default Reviews


