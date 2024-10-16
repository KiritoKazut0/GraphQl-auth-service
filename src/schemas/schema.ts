export const typeDefs = `
  type User {
    id: ID!
    username: String!
  }

  type Asentamiento {
     d_codigo: String
     d_asenta: String
     d_tipo_asenta: String
     D_mnpio: String
     d_ciudad: String
     d_CP: String 
     c_estado: String
     c_oficina: String
     c_tipo_asenta: String
     c_mnpio: String
     id_asenta_cpcons: String
     d_zona: String
     c_cve_ciudad: String
  }

  type Query {
    login(username: String!, password: String!): String
    getAsentamientosByCP(codigoPostal: String!): [Asentamiento]
    getCodigoPostalByAsentamiento(asentamiento: String!): String
    getDetailsByAsentamiento(asentamiento: String!): Asentamiento
  }

  type Mutation {
    register(username: String!, password: String!): String
  }
`;
