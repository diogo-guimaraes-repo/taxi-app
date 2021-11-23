import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const userQueryGQL = gql`
  query {
    me {
      id,
      firstName,
      email,
    }
  }
`;

export const useUserQuery = () => useQuery(userQueryGQL);