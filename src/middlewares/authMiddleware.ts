import { GraphQLRequestContext } from "@apollo/server";
import IContext from "../Graphql/interface/auth/Context";
import jwt from "jsonwebtoken"

const authPlugin = {
  async requestDidStart() {
    return {
      async didResolveOperation(requestContext: GraphQLRequestContext<IContext>) {

        const { contextValue } = requestContext;
        const token = contextValue.token

        try {

          if (!token) {
            contextValue.message = "No token Provided"
            contextValue.isAuthenticated = false
            return
          }



          const SECRET = process.env['JWT_SECRET'];
          
          if (!SECRET) {
            contextValue.message = 'No se pudo cargar las variables de entorno'
            return
          }

          jwt.verify(token, SECRET);
          contextValue.isAuthenticated = true;

        } catch (error) {
          console.error(error)
          contextValue.isAuthenticated = false
          contextValue.message = 'Invalid or expired token'
        }
      }
    }
  }

}

export default authPlugin;