import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const verifyAccountMutationGQL = gql`
  mutation verifyAccount(
    $token: String!
    ) {
      verifyAccount(
       token:$token,
    ) {
      success
      errors
    }
  }
`;

export const useVerifyAccountMutation = () => {

  const [mutation, mutationResults] = useMutation(verifyAccountMutationGQL, {
    onCompleted: (data) => {

    },
  });

  const verifyAccount = (token, password1, password2) => {
    return mutation({
      variables: {
        token: token,
      },
    });
  };

  return [verifyAccount, mutationResults];
};