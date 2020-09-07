import React from 'react'
import { useSubscription, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../react-auth0-spa";
import Reviews from './Reviews'
import styled from 'styled-components'
import Footer from './Footer'
import NavBar from './NavBar'
import Loading from '../utils/Loading'
import Error from '../utils/Error'




const CIGAR = gql`
subscription ($id:uuid!){
    products_by_pk(id:$id) {
    image
    name
    price
    description
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

  if (loading) return <Loading />
  if (error) return <Error />

  const { name, image, price, description } = data.products_by_pk
  if (data)
  return (
    <div>
      <NavBar />
      <Container>
        <Inner>
          <ProductImage src={image} alt={name} />
          <div>
            <h1>Product name:</h1>
            <p>{name}</p>
            <h1>Product price:</h1>

            <p>{price}</p>
            <h1>Product description:</h1>

            <p>{description}</p>
          </div>
        </Inner>
        <Reviews data={data} props={props} />
      </Container>
      <Footer />
    </div>
  )
}


export default ProductDetails


const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 1rem auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
 `

const Inner = styled.section`
  display:flex;
  justify-content:center;
  align-items:center;
  @media (max-width: 620px) {
      flex-direction:column;

    }
 `
const ProductImage = styled.img`
  width: 250px;
  height: 300px;
  margin: 2rem;
 `