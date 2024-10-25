import AuthRequest from "../Graphql/interface/AuthRequest";
import AuthResponse from "../Graphql/interface/AuthResponse";
import User from "../Models/UsersModel";
import generateToken from "../utils/generateToken";
import { comparePassword } from "../utils/bcryptService";
import IUser from "../Graphql/interface/IUser";

export const loggin = async (data: AuthRequest): Promise<AuthResponse> => {

    try {

        const userFind: IUser | null = await User.findOne({
             where: { 
                email: data.email,
                 username: data.username
              }})

              
        if (!userFind) return { data: null, message: 'User not found', token: null }
        const result = await comparePassword(data.password, userFind.password);
       
        if (!result) {

            return { data: null, message: 'Invalid Credentials', token: null }

        } else {

            const token = await generateToken(userFind.id);
            const response: AuthResponse = {
                data: {
                    id: userFind.id,
                    username: userFind.username
                },
                message: 'Login Successful',
                token
            }
            return response
        }

    } catch (error) {
        console.log(error)
        return { data: null, message: 'Internal server Error', token: null }
    }
}