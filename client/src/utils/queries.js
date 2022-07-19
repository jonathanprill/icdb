import { gql } from '@apollo/client';


// retrieve all data related to the logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      messages {
        _id
        messageText
        sender
        receiver
      }
    }
  }
`;

//For the Profile Page
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      messages {
        _id
        messageText
        sender
        receiver
      }
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;