import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './Graphql/Schema/schema';
import { resolvers } from "./Graphql/resolvers/resolver";
import IContex from "./Graphql/interface/auth/Context";
import 'dotenv/config';
import authPlugin from './middlewares/authMiddleware';
import express from "express"

const app = express();
app.use(express.json())

const PORT = parseInt(process.env['PORT'] || '3001');

const server = new ApolloServer <IContex>({
  typeDefs,
  resolvers,
  plugins: [authPlugin]
});

const startServer = async () => {
  try {
    await server.start();
    
    app.use('/', 
      expressMiddleware(server, {
        context: async ({ req }) => ({
          token: req.headers.authorization || null,
          isAuthenticated: false,
          message: ""
        })
      })
    );

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor: ", error);
  }
};

startServer();
