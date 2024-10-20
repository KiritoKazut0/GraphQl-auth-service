import AuthRequest from '../interface/AuthRequest';
import AuthResponse from '../interface/AuthResponse';
import validateRequiredFields from '../utils/VerifyFields';
import { loggin } from '../Auth/Login';
import { registerNewUser } from '../Auth/Register';


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

    }
}
