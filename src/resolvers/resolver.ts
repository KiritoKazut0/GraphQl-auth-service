import { readExcel } from '../utils/excelReader';
import AsentamientoData from '../interface/IAsentamientoData';
import AuthRequest from '../interface/AuthRequest';
import AuthResponse from '../interface/AuthResponse';
import validateRequiredFields from '../utils/VerifyFields';
import path from 'path';
import { loggin } from '../Auth/Login';
import { registerNewUser } from '../Auth/Register';

const filePath = path.join(__dirname, '..', 'data', 'codigos_postales.xlsx');
const excelData: AsentamientoData[] = readExcel(filePath) as AsentamientoData[];


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
