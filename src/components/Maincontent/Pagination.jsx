import React, { useEffect } from 'react'
import { useQuery, useApolloClient, gql } from '@apollo/client'
import { Link } from "react-router-dom"




const Pagination = (props) => {
  const count = props.cigars.length
  const perPage = props.postPerPage;
  const pages = Math.ceil(count / perPage)
  const page = props.page;
  return (
    <div>

      Page {page} of {pages}
      {pages === 1 || page === pages ? null : <button disabled={pages === page ? true : null}
        onClick={() => {
          props.setPage(page + 1)
        }}
      >+</button>}
      {page === 1 ? null : <button
        onClick={() => {
          props.setPage(page - 1)
        }}
      >-</button>}
    </div>
  )
}


export default Pagination;