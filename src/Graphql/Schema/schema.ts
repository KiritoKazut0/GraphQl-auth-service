import { buildSchema } from "graphql";
export const typeDefs = buildSchema(`
  type User {
    id: ID!
    username: String!
  }

  type AuthResponse {
    data: User
    token: String
    message: String!
  }

  type Asentamientos {
      d_asenta: String!
      d_tipo_asenta: String! 
      c_tipo_asenta: String!
      id_asenta_cpcons: String!
  }
  
  

  type ResponseAsentamientos {
    data: [Asentamientos]
    message: String!
  }

  type ResponseCP {
    cp: String!,
    message: String!
  }

  type detailsAsentamiento {
     d_tipo_asenta: String!,
     c_tipo_asenta: String!,
     c_mnpio: String!,
     D_mnpio: String!,
     d_estado: String!,
     c_estado: String!,
     d_CP: String!
  }

  type IResponseDetailsAsentamiento {
    data: detailsAsentamiento!,
    message: String!
  }


  type Query {
    getAsentamientosByCP(codigoPostal: String!): ResponseAsentamientos
    getCpByAsentamiento(d_asenta: String!): ResponseCP
    getDetailsByAsentamiento(d_asenta: String!): IResponseDetailsAsentamiento
  }

  type Mutation {
    login(username: String!, password: String!, email: String!): AuthResponse
    register(username: String!, password: String!, email: String!): AuthResponse
  }
`) ;
