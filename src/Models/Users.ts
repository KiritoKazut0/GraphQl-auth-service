import { DataTypes, Model } from "sequelize";
import sequelize from "../Config/conexion_database";
import IUser from "../interface/IUser";

class UserModel extends Model<IUser> implements IUser {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
}

const User = UserModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    username: DataTypes.STRING(20),
    email: DataTypes.STRING(50),
    password: DataTypes.STRING
}, {
    sequelize,
    tableName: 'Users',
    timestamps: false
});


const initializeDatabase = async () => {
    try {
        await sequelize.sync({ force: false }); 
        console.log("users table created successfully");
    } catch (error) {
        console.error(`An error has occurred in Users ${error}`);
    }
};

initializeDatabase();

export default User;