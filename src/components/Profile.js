import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useMutation, gql } from  '@apollo/client'
import Loading from '../utils/Loading';
import Footer from './Footer'
import NavBar from './NavBar'


const TESZT = gql`
mutation {
  orderPayment(currency: "USD") {
    userLink
  }
}
`

const Profile = (props) => {
  const {isAuthenticated, loading, user,loginWithRedirect } = useAuth0();
  const [payment] = useMutation(TESZT);
  

  if (loading) {
    return <Loading />;
  }
  if (user){
     return (
        <div>
          <NavBar />
        <p>hello</p>
         <Fragment>
          <img src={user.picture} alt="Profile" />
    
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={async ()=>{
               
               const data = await payment()
               console.log(data)
                window.location.replace(data.data.orderPayment.userLink)
               console.log(window.location.pathname)
            }}>pay</button>
        </Fragment> 
        <Footer />
        </div>
       
      )  
  }
  if(!isAuthenticated){
    return loginWithRedirect()
  }
 

  
};

export default Profile;