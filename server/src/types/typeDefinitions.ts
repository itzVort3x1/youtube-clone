export const typeDefinitions = `
  type Query {
     hello: String!
    users: [User!]!
    getUser(email: String, id: ID): [User!]
    loginUser(email: String!, password: String!): AuthPayload!
    allShortcuts: [Shortcut!]!
    totalUsers: Int
    userShortcuts(user_id: ID!): [Shortcut!]!
    getShortcut(snippet: String, user_id: ID): [Shortcut!]!
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): AuthPayload!
  }
  type Mutation {
    createShortcut(user_id: ID!, snippet: String!, url: String!, id: String!): Shortcut!
  }
  type Mutation {
    updateShortcut(snippet: String!, url: String!, id: String!): Shortcut!
  }
  type Mutation {
    deleteShortcut(snippet: String!, user_id: ID!): Shortcut!
  }
  type AuthPayload {
    token: String!
    user: User
  }
  type Shortcut {
    user_id: ID!
    snippet: String!
    url: String!
    id: String!
  }
  
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;
