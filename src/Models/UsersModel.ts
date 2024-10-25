import { DataTypes, Model } from "sequelize";
import sequelize from "../Config/conexion_database";
import IUser from "../Graphql/interface/IUser"

class UserModel extends Model<IUser> implements IUser {
    id!: string;
    username!: string;
    email!: string;
    password!: string;
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