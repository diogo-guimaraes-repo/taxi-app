import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export const pwdChangeMutationGQL = gql`
  mutation pwdChange(
    $token: String!
    $password1: String!
    $password2: String!
    ) {
      passwordReset(
       token:$token,
       newPassword1:$password1,
       newPassword2:$password2,
    ) {
      success
      errors
    }
  }
`;

export const usePwdChangeMutation = () => {

  const [mutation, mutationResults] = useMutation(pwdChangeMutationGQL, {
    onCompleted: (data) => {

    },
  });

  const pwdChange = (token, password1, password2) => {
    return mutation({
      variables: {
        token: token,
        password1: password1,
        password2: password2,
      },
    });
  };

  return [pwdChange, mutationResults];
};