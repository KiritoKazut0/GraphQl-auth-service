import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ApolloError } from "apollo-server";

dotenv.config();


const JWT_SECRET = process.env['JWT_SECRET'] || 'default'

const generateToken = (userId: string): string => {
  try {
    const token = jwt.sign({ userId }, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new ApolloError (`Error generating token: ${error}`);
  }

}

export default generateToken