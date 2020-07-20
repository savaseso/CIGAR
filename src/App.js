import React from 'react'
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Navbar/Profile";
import SuccessPayment from "./components/SuccessPayment";
import Loading from './utils/Loading';
import GlobalStyles from "./components/styles/globalStyles"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './components/Maincontent/Main'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/Maincontent/ProductDetails'







const App = () => {
  const { loading, error } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  if (error) { throw(error) }
  return (

    <Router>
      <Switch>
        <Route path="/profile" component={Profile} />
{/*        <PrivateRoute path="/cart" component={Cart} />
 */} 
    <Route path="/details/:id" component={ProductDetails}/>
     <Route path="/cart" component={Cart} />
        <Route exact path="/" component={Main} />
        <Route exact path="/successPayment" component={SuccessPayment} />
      </Switch>
      <GlobalStyles />
    </Router>


  );
}

export default App;
