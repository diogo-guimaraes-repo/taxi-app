import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "../config/auth";

export const loginMutationGQL = gql`
  mutation login(
    $login: String!
    $password: String!
    ) {
    tokenAuth(
       username:$login,
       password: $password
    ) {
      success
      errors
      unarchiving
      token
      refreshToken,
      unarchiving,
      user {
        id
        username,
      }
    }
  }
`;

export const useLoginMutation = () => {
  const [_, setAuthToken, removeAuthToken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(loginMutationGQL, {
    onCompleted: (data) => {
      setAuthToken(data.tokenAuth.token);
    },
  });

  const login = (user, password) => {
    removeAuthToken();
    return mutation({
      variables: {
        login: user,
        password: password,
      },
    });
  };

  return [login, mutationResults];
};