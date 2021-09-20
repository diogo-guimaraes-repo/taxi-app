import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const pwdResetMutationGQL = gql`
  mutation pwdReset(
    $login: String!
    ) {
    sendPasswordResetEmail(
       email:$login,
    ) {
      success
      errors
    }
  }
`;

export const usePwdResetMutation = () => {

  const [mutation, mutationResults] = useMutation(pwdResetMutationGQL, {
    onCompleted: (data) => {

    },
  });

  const pwdReset = (user) => {
    return mutation({
      variables: {
        login: user,
      },
    });
  };

  return [pwdReset, mutationResults];
};