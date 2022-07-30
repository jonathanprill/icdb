import { gql } from '@apollo/client';


// retrieve all data related to the logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      city
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

//For the Dashboard
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      city
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

//For the Dashboard
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      city
      messages {
        _id
        messageText
        sender
        receiver
      }
      friendCount
    }
  }
`;