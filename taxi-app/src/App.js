import React from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import AuthGate from './AuthGate';
import { useAppApolloClient } from './config/apolloClient';

function App() {

  const apolloClient = useAppApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthGate/>
    </ApolloProvider>
  );
}

export default App;
