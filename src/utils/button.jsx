import React from 'react'


const Button = ({ className,name, action}) => <button className={className} onClick={()=>action()}>{name}</button>


export default Button;