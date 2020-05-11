
import { gql } from 'apollo-boost';

export const SignIn = gql`
  mutation signIn($login: String!, $password: String!) {
    signIn(data: { login: $login, password: $password }) {
      id
      login
      token
      teacher {
        firstName
        id
        lastName
      }
      school {
        name
        id
      }
      parent {
        firstName
        id
        lastName
      }
      student {
        firstName
        id
        lastName
      }
    }
  }
`;