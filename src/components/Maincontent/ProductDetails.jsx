import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useSubscription, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../../react-auth0-spa";
import Moment from 'react-moment';
import StarRatings from './StarRating'



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


const ADDREVIEW = gql`
mutation ($body:String! $cigar_id:uuid! $user_id:String!)  {
  insert_reviews_one(object: {body: $body, cigar_id: $cigar_id, user_id: $user_id}) {
    id
  }
}
`

const ProductDetails = (props) => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0();
    const { loading, error, data } = useSubscription(CIGAR, {
        variables: { id: props.match.params.id }
    })
    const [inputVal, setInputVal] = useState('')
    const [addReview, { load, err, review }] = useMutation(ADDREVIEW);

    if (loading) return <p>loading</p>
    if (error) return console.log(error)
    if (err) console.log(err)
    console.log(data)
    const { name, image, price } = data.products_by_pk
    if(data)
    return (
        <div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{price}</p>

            {
                data.products_by_pk.product_review ?
                    data.products_by_pk.product_review.map(review => <div key={review.id}>
                        <p>{review.body}</p>
                        <Moment fromNow>{review.created_at}</Moment>
                        <p>by {review.reviews_user.username}</p>
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
                                addReview({ variables: { body: `${inputVal}`, cigar_id: `${props.match.params.id}`, user_id: `${user.sub}` } })
                                    .then(() => setInputVal(""))
                                    .catch((e) => console.log(e)/* setInputVal(e.message) */)
                            }}>
                            submit
                        </button>
                    </div> : null
            }
            <StarRatings id={props.match.params.id}/><span>({data.products_by_pk.products_ratings.length})</span>

        </div>
    )
}


export default ProductDetails