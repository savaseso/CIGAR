import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment';






const OrderItem = (props) => {

    const { price, product_name, quantity, image, created_at } = props.data
    console.log(props)
    console.log()

    return (

        <Container>
            <Inner>
                <Image src={product_name.image} alt="" />
                <span >{product_name.name}</span>
            </Inner>

            <p>${price}</p>
            <p>x{quantity}</p>
            <Moment fromNow>{created_at}</Moment>
        </Container>
    );
}
export default OrderItem


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(4,2fr);
    margin:2rem;
    text-align:center;
    @media (max-width: 768px) {
        grid-template-columns:4fr;
        border:solid 1px #333;
        margin-bottom:2rem;
        opacity:0.8;
  }
`

const Inner = styled.div`
   text-align:left;
`

const Image = styled.img`
    width:25px;
    height:25px;
    margin-right:10px;
    @media (max-width: 768px) {
        display:block;
        margin:10px auto;
    }
`