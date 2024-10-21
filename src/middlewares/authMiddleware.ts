import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

const authMiddleware = (req: Request, res:Response, next: NextFunction) => {
    const dataHeader = req.headers.authorization;

    if (!dataHeader){
        return {
            data: null,
            message: 'No token provided'
        }
    }

    const token = dataHeader.split(' ')[1];
    const SECRET = process.env['JWT_SECRET'] || 'default';

    const isValid = jwt.verify(token, SECRET)
    
    if (!isValid){
        return {
            data: null,
            message: "Token Invalid"
        }
    }

    next();

}

export default authMiddleware;