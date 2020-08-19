import React, { useEffect } from 'react'
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import SuccessPayment from "./components/SuccessPayment";
import Loading from './utils/Loading';
import GlobalStyles from "./components/styles/globalStyles"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/ProductDetails'
import styled, { ThemeProvider } from 'styled-components'
import Termsandconditions from './components/Termsandconditions';
import ContactUs from './components/ContactUs';
import ScrollToTop from './utils/ScrollToTop';
import { getCookie } from './utils/getCookie'
import { uuidv4 } from './utils/uuidv4'




const theme = {
  maxWidth: '1000px',
  buttonColor: '#9E6924',
  iconsColor: '#E7E7D6',
  navBar: '#24292E',
  footer: '#24292E'
}



const App = (props) => {


  useEffect(() => {
    let device = getCookie('device')

    if (device == null || device == undefined) {
      device = uuidv4()
    }

    document.cookie = 'device=' + device + ";domain=;path=/"

  }, []);


  const { loading, error } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  if (error) { throw (error) }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route path="/profile" component={Profile} />
            {/*        <PrivateRoute path="/cart" component={Cart} />
 */}
            <Route path="/details/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/" component={Main} />
            <Route exact path="/successPayment" component={SuccessPayment} />
            <Route exact path="/terms-conditions" component={Termsandconditions} />
            <Route exact path="/contact-us" component={ContactUs} />
          </Switch>
        </ScrollToTop>
        <GlobalStyles />
      </Router>
    </ThemeProvider>


  );
}

export default App;
