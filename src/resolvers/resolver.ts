import AuthRequest from '../interface/AuthRequest';
import AuthResponse from '../interface/AuthResponse';
import validateRequiredFields from '../utils/VerifyFields';
import { loggin } from '../Auth/Login';
import { registerNewUser } from '../Auth/Register';
import { IResponseAsentamientos } from '../interface/IResponseAsentamiento';
import getAsentamientosByCP from '../controllers/getAsentamientoByCP';


export const resolvers = {
    Mutation: {
        login: async (_: void, authRequest: AuthRequest): Promise<AuthResponse> => {
              
            const missingFields = validateRequiredFields(authRequest);
            if (missingFields.length > 0) {
                return { data: null, message: 'Is required Fields', token: null }

            } else {
                const result = await loggin(authRequest);
                return result
            }
        },

        register: async (_:void, authRequest: AuthRequest): Promise<AuthResponse> => {
            const missingFields = validateRequiredFields(authRequest);
            if (missingFields.length > 0) {
                return { data: null, message: 'Is required Fields', token: null }

            } else {
              const result = await registerNewUser(authRequest);
              return result
            }
        }

    },
    
    Query: {
       async getAsentamientosByCP(_:void, { codigoPostal }: { codigoPostal: string }): Promise<IResponseAsentamientos>{
         
            if (!codigoPostal){
               return {data: null, message: "The zip code is required"}
            } else{
             const result = await getAsentamientosByCP(codigoPostal);
             return result
            }
        }
    }
}
