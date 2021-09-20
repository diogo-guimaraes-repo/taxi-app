import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { useAuthToken } from "../config/auth";

export const registerMutationGQL = gql`
  mutation SignUpMutation(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
    $phonenumber: String!
    ) {
    register(
      email: $email
      username: $email
      firstName: $firstname
      lastName: $lastname
      phoneNumber: $phonenumber
      password1: $password
      password2: $password
     ) {
      success
      errors
    }
  }
`;

export const useRegisterMutation = () => {
  const [_, setAuthToken, removeAuthToken] = useAuthToken();

  const [mutation, mutationResults] = useMutation(registerMutationGQL, {
    onCompleted: (data) => {
      setAuthToken(data.register.token);
    },
  });

  const signup = (email, password, firstName, lastName, phoneNumber) => {
    return mutation({
      variables: {
        email: email,
        password: password,
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber,
      },
    });
  };

  return [signup, mutationResults];
};