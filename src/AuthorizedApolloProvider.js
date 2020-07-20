
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/link-ws';
import { setContext } from '@apollo/link-context';
import React from 'react';
import { useAuth0 } from './react-auth0-spa';


const GRAPHQL_ENDPOINT = "ctorontocigar.herokuapp.com/v1/graphql";


const AuthorizedApolloProvider = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();

  const httpLink = createHttpLink({
    uri: `https://${GRAPHQL_ENDPOINT}`,
  });



  const authLink = setContext(async (_, { headers }) => {

    const token = await getIdTokenClaims();
    console.log(token)

    if (token) {

      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token.__raw}` : ''
        }
      };
    }
  });

  const wsLink = new WebSocketLink({
    uri: `ws://${GRAPHQL_ENDPOINT}`,
    options: {
      reconnect: true,
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
    connectToDevTools: true,
  });

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default AuthorizedApolloProvider;