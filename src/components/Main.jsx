
import React, {useState} from 'react'
import Products from './Products'
import { useLazyQuery, gql } from '@apollo/client' 
import NavBar from './NavBar'
import Footer from './Footer'
import Loading from '../utils/Loading'
import Error from '../utils/Error'


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





const Main = (props) => {
  
  const [inputVal, setInputVal] = useState('')
  const [search, {loading, error, data}] = useLazyQuery(SEARCH) 
  if(loading) return <Loading />
  if(error) return <Error />
  return (
    <div>
      <NavBar
        inputVal={inputVal}
        onChange={(e)=>setInputVal(e.target.value)}
        onSearch={()=>search({variables:{match:`%${inputVal}%`}})}
      />
      <Products searchResult={data ? data.products : null} />
      <Footer />
    </div>

  )
}



export default Main;


