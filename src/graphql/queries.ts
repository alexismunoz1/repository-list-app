import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          ownerAvatarUrl
          url
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      url
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
