export const typeDefs = `
  type Channel {
    id: ID!
    name: String
  }

  // This type specifies the entry points into our API.
  type Query {
    channels: [Channel]
  }
`;