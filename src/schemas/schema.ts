export const typeDefs = `
  type User {
    id: ID!
    username: String!
  }

  type AuthResponse {
    data: User
    token: String
    message: String
  }


  type Asentamiento {
    d_codigo: String!
    d_asenta: String!
    d_tipo_asenta: String! 
    D_mnpio: String!
    d_estado: String!
    d_ciudad: String!
    d_CP: String!
    c_estado: String!
    c_oficina: String!
    c_tipo_asenta: String!
    c_mnpio: String!
    id_asenta_cpcons: String!
    d_zona: String!
    c_cve_ciudad: String!
  }

  type Query {
    getAsentamientosByCP(codigoPostal: String!): [Asentamiento]
    getCodigoPostalByAsentamiento(asentamiento: String!): String
    getDetailsByAsentamiento(asentamiento: String!): Asentamiento
  }

  type Mutation {
    login(username: String!, password: String!, email: String!): AuthResponse
    register(username: String!, password: String!, email: String!): AuthResponse
  }
`;
