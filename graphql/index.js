import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";

export default () => {
  const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    credentials: 'include'
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = process.env.accessToken;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
    defaultHttpLink: false
  });

  return {
    client
  }
}