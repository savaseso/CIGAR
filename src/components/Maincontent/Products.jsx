import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useApolloClient, gql } from '@apollo/client'
import Product from './Product'
import Loading from '../../utils/Loading';
import styled from 'styled-components'
import Pagination from './Pagination'



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
  console.log(data)

  useEffect(() => {
      setPage(1)
  },[searchResult]);

  if (loading) return <Loading />
  if (error) return <p>Error...</p>

  const indexOfLastPost = page * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage


  const renderCigars = (cigars) => {
    return (
      <Container> 
        <Cards>
          {cigars.slice(indexOfFirstPost, indexOfLastPost).map(product => <Product key={product.id} product={product} />)}
        </Cards>
      </Container>)
  }

  if (searchResult !== null && searchResult.length === 0) {
    return <p>No Results</p>
  }


  return (
    <div>
      <Pagination page={page} postPerPage={postPerPage} setPage={setPage} cigars={searchResult || data.products} />
      {renderCigars(searchResult || data.products)}
      <Pagination page={page} postPerPage={postPerPage} setPage={setPage} cigars={searchResult || data.products} />
    </div>)
}



export default Products;

const Container = styled.section`
 /*  height: 25rem; */
`
const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px; 
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`