
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws';
import { setContext } from '@apollo/link-context';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import React from 'react';
import { useAuth0 } from './react-auth0-spa';


const GRAPHQL_ENDPOINT = "ctorontocigar.herokuapp.com/v1/graphql";


const AuthorizedApolloProvider = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();
  

  const httpLink = createHttpLink({
    uri: `https://${GRAPHQL_ENDPOINT}`,
    credentials: 'include'
  });



  const authLink = setContext(async (_, { headers }) => {

    const token = await getIdTokenClaims();
    console.log(token)

    if (token) {

      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token.__raw}` : '',
          credentials: 'include'

        },
      };
    }
  });

  const wsLink = new WebSocketLink({
    uri: `wss://${GRAPHQL_ENDPOINT}`,
    options: {
      reconnect: true,
      credentials: 'include',
      connectionParams: async () => {
        const token = await getIdTokenClaims();
        if(token){
                return {
                    headers: {
                        Authorization: `Bearer ${token.__raw}`,
                    }
      }
    }
    }
  }});
  

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink)
  );

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    credentials: 'include',
    connectToDevTools: true,
    resolvers:{
      Query:{
        isOpen (){
          
          return false

        } 
    }}
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default AuthorizedApolloProvider;