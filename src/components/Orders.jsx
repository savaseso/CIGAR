import React, { useState, useEffect } from 'react'
import OrderItem from './OrderItem'





const Orders = (props) => {
    return (
       <div>
        {props.data.order_item.map((item)=><OrderItem data={item} key={item.id} />)} 
        </div>
    );
}
export default Orders