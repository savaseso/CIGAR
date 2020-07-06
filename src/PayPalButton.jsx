import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import { useMutation , gql } from "@apollo/client";


const UPDATE_CART = gql`
 mutation MyMutation($user_id:String,$order_id:String,$price:Int,$product_id:String) {
  delete_cart(where: {}) {
    affected_rows
  }
  insert_order(objects: {user_id: $user_id}) {
    affected_rows
  }
  insert_order_item(objects: {order_id:$order_id, price: $price, product_id: $product_id, user_id: $user_id}) {
    affected_rows
  }
}
`;

const PaypalCheckoutButton = ({ order, clearCart,total, history }) => {
  const [updateCart, { loading, error, data }] = useMutation(UPDATE_CART);

  console.log(order,total)
  const paypalConf = {
    currency: 'USD',
    env: 'sandbox',
    client: {
      sandbox: 'AdRMcrng6rD2ecnNN_jIcgl_f3M7tifX5uxrsVZ_k2t47lWJ72FqE8EI7YJCB6EbnIz_WzeK4lzf04Tb',
      production: '',
    },
    style: {
      label: 'pay',
      size: 'medium', // small | medium | large | responsive
      shape: 'rect',   // pill | rect
      color: 'gold',  // gold | blue | silver | black
    },
  };

  const PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: total,
            currency: paypalConf.currency,
          },    
          item_list: {
            items: order
          },
        },
      ],
      note_to_payer: "Contact us for any questions on your order.",
    };

    return actions.payment.create({
      payment,
    });
  };

  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
      .then(response => {
       console.log(data)
       // updateCart({ variables: { user_id:'google', order_id:data.orderID,price:,product_id:}  }) // nem jo meg dolgozni rajta
        alert(`The payment was succeeded! ID: ${response.id}`)
      })
      .catch(error => {
	      alert('An authorization error occured!');
      });
  };

  const onError = (error) => {
    alert ('Error happened' );
  };

  const onCancel = (data, actions) => {
    alert( 'Payment cancellation' );
  };


  return (
    <PayPalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
    />

  );
}

export default PaypalCheckoutButton;