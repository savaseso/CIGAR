
import React, {useState} from 'react'
import Products from './Products'
import styled, { ThemeProvider } from 'styled-components'
import { useLazyQuery, gql } from '@apollo/client' 
import NavBar from '../Navbar/NavBar'
import ImageBanner from './ImageBanner'
import Footer from '../Footer/Footer'


const SEARCH = gql`
 query Search($match: String) {
  products(where: {name: {_ilike: $match}}) {
    brand_id
    id
    image
    name
    price
    products_inventory {
      stock_available
    }
  }
}
`


const theme = {
  maxWidth: '1000px',
  buttonColor: '#fff',
  navBar: '#24292E',
  footer: '#333'
}


const Main = (props) => {
  
  const [inputVal, setInputVal] = useState('')
  const [search, {loading, error, data}] = useLazyQuery(SEARCH) 

  return (
    <ThemeProvider theme={theme}>
      <NavBar
        inputVal={inputVal}
        onChange={(e)=>setInputVal(e.target.value)}
        onSearch={()=>search({variables:{match:`%${inputVal}%`}})}
      />
     
      <Products searchResult={data ? data.products : null} />
      <Footer />

    </ThemeProvider>

  )
}



export default Main;


