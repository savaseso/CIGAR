import React from 'react'
import styled from 'styled-components'
import { useMutation, useApolloClient, gql } from '@apollo/client'
import { useAuth0 } from "../react-auth0-spa";
import { useHistory } from "react-router-dom";
import StarRating from './StarRating'
import Cookies from 'universal-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cookies = new Cookies();

const ITEM = gql`
mutation ($id:name!, $userId:name) {
  createCartItem(product_id: $id, quantity: 1, userId:$userId) {
    id
  }
  }
`;

const Product = (props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [addCartItem, { loading, error, data }] = useMutation(ITEM);
  let history = useHistory();
  const { stock_available } = props.product.products_inventory
  const { name, price, id, image } = props.product
  console.log(cookies.get('device'))
  return (
    <Card>
      <ImageContainer onClick={() => history.push(`/details/${id}`)} image={image}></ImageContainer>
      <Title onClick={() => history.push(`/details/${id}`)}>{name}</Title>
      <CardFooter>
        <StarRating id={id} noRatings={true} />
        <Price>Price: <PriceVal>${price}</PriceVal></Price>
        <Availability>Availability:<Stock stock={stock_available}> {stock_available > 0 ? 'In Stock' : 'Out of Stock'}</Stock></Availability>
        <AddToCart
          onClick={() => {
            /*    if (!isAuthenticated) {
                 return loginWithRedirect()
               } */
            addCartItem({ variables: { id: `${id}`, userId: `${cookies.get('device')}` } })
              .then(() => toast.dark('Item added to the cart'))
              .catch((e) =>toast.error(`This item is ${e.message}`))
          }}
        >Add to Cart</AddToCart>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </CardFooter>
    </Card>
  )
}


export default Product;


const Card = styled.div`
     height: 22.5rem;
     width:22rem; 
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: .5rem;
    -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
     display: flex; 
   -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
    color: #5d5e5e; 
    overflow:hidden;
    text-align:center;
    @media (max-width: 353px) {
      width:19rem;

    }
`


const CardHeader = styled.div`
    cursor: pointer;
     text-align:center;
`
const CardFooter = styled.div`
    position:absolute;
    bottom:0;
    right:25%;
`
const ImageContainer = styled.div`
  width:21rem;
  height:170px;
  cursor: pointer;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-bottom: 0.5rem;
  transition: transform 1s, filter 2s ease-in-out;
  transform: scale(1);
  :hover{
  transform: scale(1.09);
  }
`

const Title = styled.p`
  margin:0.2rem;
  text-align:center;
  font-weight: 600;
  cursor: pointer;


`
const Price = styled.p`
  margin:0.3rem;
`
const PriceVal = styled.span`
    font-weight: 600;
    padding-left:0.8rem;
`
const Availability = styled.p`
  margin:0.5rem;
`

const AddToCart = styled.button`
    display: block;
    margin: 0.7rem auto;
    

`

const Stock = styled.span`
 color: ${props => props.stock > 0 ? 'green' : 'red'};
 font-weight: ${props => props.stock > 0 ? 'bold' : 'normal'};

`