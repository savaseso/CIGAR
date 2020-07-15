import React, { useEffect } from 'react'
import { Link } from "react-router-dom"




const Pagination = (props) => {
  const count = props.cigars.length
  const perPage = props.postPerPage;
  const pages = Math.ceil(count / perPage)
  const page = props.page;
  return (
    <div>
       {page === 1 ? null : <button
        onClick={() => {
          props.setPage(page - 1)
        }}
      > ← Prev</button>}

      Page {page} of {pages}
      {pages === 1 || page === pages ? null : <button disabled={pages === page ? true : null}
        onClick={() => {
          props.setPage(page + 1)
        }}
      > Next →</button>}
      
     
    </div>
  )
}


export default Pagination;