import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from './Graphql/Schema/schema';
import { resolvers } from "./Graphql/resolvers/resolver"
import dotenv from 'dotenv';
// import  "./utils/insertData";

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = parseInt(process.env.PORT || "4000");

(async () => {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: PORT,
      }
    });
    console.clear();
    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.error("Error al inciar el servidor: ", error)
    
  }
})();
