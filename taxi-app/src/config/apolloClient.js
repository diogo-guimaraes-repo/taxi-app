import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { useAuthToken } from "./auth";

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' });

const authMiddleware = (authToken) =>
  new ApolloLink((operation, forward) => {

    if (authToken) {
      operation.setContext({
        headers: {
          authorization: `JWT ${authToken}`,
        },
      });
  }

  return forward(operation);
});

export const useAppApolloClient = () => {
  const [authToken] = useAuthToken();
  const cache = new InMemoryCache().restore({})
  return new ApolloClient({
    link: authMiddleware(authToken).concat(httpLink),
    cache,
  });
};
