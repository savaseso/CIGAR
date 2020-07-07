import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { useMutation, gql } from  '@apollo/client'
import Loading from '../../utils/Loading';

const TESZT = gql`
mutation {
  orderPayment(currency: "USD") {
    userLink
  }
}
`

const Profile = (props) => {
  const { loading, user } = useAuth0();
  const [payment,{error, data}] = useMutation(TESZT);
  

  if (loading || !user) {
    return <Loading />;
  }
  if (user){
     return (
       
        <div>
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
        </div>
       
      )  
  }

  
};

export default Profile;