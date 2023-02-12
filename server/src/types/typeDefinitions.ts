export const typeDefinitions = `
  type Query {
    loginUser(email: String!, password: String!): AuthPayload!
    loggedInUser(id: ID!): allUserDetails!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): AuthPayload!
  }

  type Mutation {
    createBookmark(user_id: ID!, video_id: String!): Bookmarks!
  }

  type AuthPayload {
    token: String!
    user: User
  }

  type allUserDetails {
    user: userDetails
    bookmarks: [Bookmarks]
  }

  type userDetails {
    id: ID!
    name: String!
    email: String!
  }

  type Bookmarks{
    id: ID!
    user_id: ID!
    video_id: String!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;
