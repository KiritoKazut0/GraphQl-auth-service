import { DataTypes, Model } from "sequelize";
import sequelize from "../Config/conexion_database";
import IAsentamientoData from "../interface/IAsentamientoData";


class AsentamientoModel extends Model<IAsentamientoData> implements IAsentamientoData {
  d_codigo!: string;
  d_asenta!: string;
  d_tipo_asenta!: string;
  D_mnpio!: string;
  d_estado!: string;
  d_ciudad!: string;
  d_CP!: string;
  c_estado!: string;
  c_oficina!: string;
  c_tipo_asenta!: string;
  c_mnpio!: string;
  id_asenta_cpcons!: string;
  d_zona!: string;
  c_cve_ciudad!: string;
}


const Asentamiento = AsentamientoModel.init({
  d_codigo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  d_asenta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  d_tipo_asenta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  D_mnpio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  d_estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  d_ciudad: {
    type: DataTypes.STRING,
    allowNull: true,    
  },
  d_CP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  c_estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  c_oficina: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  c_tipo_asenta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  c_mnpio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_asenta_cpcons: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true, 
  },
  d_zona: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  c_cve_ciudad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  tableName: "asentamientos",
  timestamps: false, 
});

const initializeDatabase = async () => {
  try {
      await sequelize.sync({ force: false }); 
    
      console.log(" asentamiento table created successfully");
  } catch (error) {
      console.error(`An error has occurred in Users ${error}`);
  }
};

initializeDatabase();

export default Asentamiento;
