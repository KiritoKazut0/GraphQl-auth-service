import User from "../Models/UsersModel";
import AuthRequest from "../Graphql/interface/AuthRequest";
import AuthResponse from "../Graphql/interface/AuthResponse";
import { encryptPassword } from "../utils/bcryptService"
import { v4 as uuidv4 } from "uuid";
import generateToken from "../utils/generateToken";

export const registerNewUser = async (data: AuthRequest): Promise<AuthResponse> => {
    try {

        const passwordEncrypt = await encryptPassword(data.password);

        const newUser = await User.create({
            email: data.email,
            password: passwordEncrypt,
            username: data.username,
            id: uuidv4()
        })

      const token =  generateToken(newUser.id)

        const response: AuthResponse = {
            data: {
                id: newUser.id,
                username: newUser.username
            },
            message: "User created successfully",
            token
        }

        return response;

    } catch (error) {
        console.log(error);
        return { data: null, message: 'Internal server Error', token: null }
    }

}