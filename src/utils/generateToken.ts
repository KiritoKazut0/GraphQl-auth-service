import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ApolloError } from "apollo-server";

dotenv.config();


const generateToken = (userId: string): string => {
  try {
    const JWT_SECRET = process.env['JWT_SECRET']; 
    if (!JWT_SECRET){
      throw new ApolloError('Error generating token:');
    }
    
    console.log({JWT_SECRET})
    const token = jwt.sign({ userId }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new ApolloError(`Error generating token: ${error}`);
  }

}

export default generateToken