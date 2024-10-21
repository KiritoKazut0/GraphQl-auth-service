import express from "express";
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import authMiddleware from "./middlewares/authMiddleware";
import { typeDefs } from './Graphql/Schema/schema';
import { resolvers } from "./Graphql/resolvers/resolver";
import 'dotenv/config';


const app = express();
const PORT = parseInt(process.env.PORT || "4000");

app.use(authMiddleware);
app.use(express.json())

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  try {
    await server.start();

    app.use('/', expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.authorization,
      }),
    }));

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Error al inciar el servidor: ", error)
  }
})();


