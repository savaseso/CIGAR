<<<<<<< HEAD
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import React from 'react';
import { useAuth0 } from './react-auth0-spa';

const AuthorizedApolloProvider = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: 'https://ctorontocigar.herokuapp.com/v1/graphql', 
  });

  const authLink = setContext(async (_, { headers }) => {
    
    const token = await getIdTokenClaims();
    if(token){
    return {
      headers: {
        ...headers,
        Authorization: token  ? `Bearer ${token.__raw}` : ''
      }
    };
  }});
  
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

=======
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import React from 'react';
import { useAuth0 } from './react-auth0-spa';

const AuthorizedApolloProvider = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: 'https://ctorontocigar.herokuapp.com/v1/graphql', 
  });

  const authLink = setContext(async (_, { headers }) => {
    
    const token = await getIdTokenClaims();
    if(token){
    return {
      headers: {
        ...headers,
        Authorization: token  ? `Bearer ${token.__raw}` : ''
      }
    };
  }});
  
  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

>>>>>>> 133e4cb47892c03cb1d0ee0ddc8d65ec0191cae0
export default AuthorizedApolloProvider;