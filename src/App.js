

import React from 'react'
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Navbar/Profile";
import SuccessPayment from "./components/SuccessPayment";
import Loading from './utils/Loading';
import GlobalStyles from "./components/styles/globalStyles"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './components/Maincontent/Main'





const App = () => {
  const { loading, error } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  if (error) { console.log(error) }
  return (

    <Router>
      <Switch>
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="/" component={Main} />
        <Route exact path="/successPayment" component={SuccessPayment} />
      </Switch>
      <GlobalStyles />
    </Router>


  );
}

export default App;
