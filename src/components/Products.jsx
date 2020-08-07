import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useApolloClient, gql } from '@apollo/client'
import Product from './Product'
import Loading from '../utils/Loading';
import styled from 'styled-components'
import Pagination from './Pagination'
import NoResults from './NoResults'
import Error from '../utils/Error';




const CIGARS = gql`
query {
  products {
      id
      brand_id
      image
      name
      price
      products_inventory {
      stock_available
    }
  }
  }
`;


const Products = ({ searchResult }) => {
  const { loading, error, data } = useQuery(CIGARS);
  const [page, setPage] = useState(1)
  const [postPerPage] = useState(10)

  useEffect(() => {
      setPage(1)
  },[searchResult]);

  if (loading) return <Loading/>
  if (error) return <Error />
 

  const indexOfLastPost = page * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage


  const renderCigars = (cigars) => {
    return (
        <Cards>
          {cigars.slice(indexOfFirstPost, indexOfLastPost).map(product => <Product key={product.id} product={product} />)}
        </Cards>
      )
  }

  if (searchResult !== null && searchResult.length === 0) {
    return <NoResults />
  }


  return (
    <Container> 
      <Pagination page={page} postPerPage={postPerPage} setPage={setPage} cigars={searchResult || data.products} />
      {renderCigars(searchResult || data.products)}
      <Pagination page={page} postPerPage={postPerPage} setPage={setPage} cigars={searchResult || data.products} />
    </Container>
  )
}



export default Products;

const Container = styled.section`
  max-width: ${props=> props.theme.maxWidth};
  margin: 1rem auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px; 
 /*  max-width: ${props => props.theme.maxWidth}; */
  margin: 2rem auto;
/*   @media (max-width: 775x) {
    grid-template-columns: 1fr important!;
    } */
`