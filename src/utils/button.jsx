import React from 'react'
import styled from 'styled-components'


 const Button = ({ className,name, action}) => <ButtonStyle className={className} onClick={action}>{name}</ButtonStyle>

export default Button;


 const ButtonStyle = styled.button`
    background-color: #9E6924;
  border: none;
  color: #E7E7CA;
  padding: 7.5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius:13px;
  margin:10px;
  cursor:pointer;
`