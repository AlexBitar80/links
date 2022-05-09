import { gql } from "@apollo/client";

const LINKS = gql`
  query {
    allAlllinks {
      id
      name
      url
      icon {
        url
      }
    }
  }
`;

export default LINKS;