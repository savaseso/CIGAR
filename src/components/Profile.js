import React, {Fragment} from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useQuery, gql } from  '@apollo/client'
import styled from 'styled-components'
import Loading from '../utils/Loading';
import Footer from './Footer'
import NavBar from './NavBar'
import Orders from './Orders'


const ORDERED_ITEMS = gql`
query ($user_id:String!) {
  order_item(where: {user_id: {_eq: $user_id}}, order_by: {created_at: desc}) {
    id
    price
    product_id
    quantity
    created_at
    product_name {
      name
      image
    }
  }
}
`

const Profile = (props) => {
  const {isAuthenticated, loading, user,loginWithRedirect } = useAuth0();
  const { load, error, data } = useQuery(ORDERED_ITEMS, {
    variables: { user_id: user ? user.sub : null }
});  
if(!isAuthenticated){
  return loginWithRedirect()
} 

  if (loading) {
    return <Loading />;
  }
  if (user){
    if(error) console.log(error)
    if(load) console.log('loading')
  /*   if(data) console.log(data) */
     return (
       <Fragment>
       <NavBar />
          <Container>
        
           <MyProfile>
          <Image src={user.picture} alt="Profile" />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
          </MyProfile>
          <div>
          <MyOrders>My Orders</MyOrders>
          {data ? data.order_item.length > 0 ? <Orders data={data} /> : <P> You have no orders yet</P> : null }
          </div>
       
        </Container>
        <Footer />
        </Fragment>
      )  
     
  }

};

export default Profile;

const Container = styled.div`
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 margin:3rem;
`
const MyOrders = styled.h2`
 text-align:center;

`
const MyProfile = styled.div`
 margin:3rem;
 text-align:center;

`
const Image = styled.img`
  border-radius:50%;
  width:250px;
  height:250px;
  margin-bottom:1rem;

`
const P = styled.p`
  margin:3rem;
`