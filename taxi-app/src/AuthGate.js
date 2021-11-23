import React from 'react';
import { useUserQuery } from './network/userQuery';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';
import { useAuthToken } from './config/auth';

const AuthGate = () => {

  const [authToken] = useAuthToken();
  const userData = useUserQuery();

  if(userData.data?.me && authToken) {
    return <AuthenticatedApp user={userData.data.me}/>;
  }
  return <UnauthenticatedApp loading={userData.loading}/>;
}

export default AuthGate;
