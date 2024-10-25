import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config();


export const encryptPassword = async (password: string): Promise<string> => {
    try {
        const Salts = parseInt(process.env['SALTS_RAUNDS'] || '5');
        console.log(Salts)
        const hashPassword = await bcrypt.hash(password, Salts);
        return hashPassword;
    } catch (error) {
        console.error('Error al encriptar la contraseña:', error);
        throw new Error('Error al encriptar la contraseña');
    }
};

export const comparePassword = async (passwordEntry: string, hashedPassword: string): Promise<boolean> => {
    try {
        const result = await bcrypt.compare(passwordEntry, hashedPassword);
        return result;
        
    } catch (error) {
        console.error('Error al comparar contraseñas:', error);
        throw new Error('Error en la verificación de la contraseña.');
    }
}
