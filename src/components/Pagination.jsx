import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


const ButtonPag = styled.button`
 
    border: 1px solid ${props => props.theme.buttonColor} ;
    color: ${props => props.theme.buttonColor};
    padding: 7.5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius:13px;
    margin:10px;
    cursor:pointer;
    :hover {
        background-color:#B8843F;
        color: #fff;
    }
`



const Pagination = (props) => {
  const count = props.cigars.length
  const perPage = props.postPerPage;
  const pages = Math.ceil(count / perPage)
  const page = props.page;
  return (
    <div>
       {page === 1 ? null : <ButtonPag
        onClick={() => {
          props.setPage(page - 1)
        }}
      > ← Prev</ButtonPag>}

      Page {page} of {pages}
      {pages === 1 || page === pages ? null : <ButtonPag disabled={pages === page ? true : null}
        onClick={() => {
          props.setPage(page + 1)
        }}
      > Next →</ButtonPag>}
      
     
    </div>
  )
}


export default Pagination;