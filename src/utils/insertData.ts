import path from 'path';
import { readExcel } from './excelReader';
import Asentamiento from '../Models/AsentamientoModel';
import IAsentamientoData from '../Graphql/interface/IAsentamientoData';


async function insertDataToDatabase () {
    try {
        const filePath = path.join(__dirname, '..', 'data', 'codigos_postales.xlsx');
        const excelData: IAsentamientoData[] = readExcel(filePath) as IAsentamientoData[];
    

        for (const data of excelData) {
            await Asentamiento.create({
                c_cve_ciudad: data.c_cve_ciudad,
                c_estado: data.c_estado,
                c_mnpio: data.c_mnpio,
                c_oficina: data.c_oficina,
                c_tipo_asenta: data.c_tipo_asenta,
                d_asenta: data.d_asenta,
                d_ciudad: data.d_ciudad,
                d_codigo: data.d_codigo,
                d_CP: data.d_CP,
                d_estado: data.d_estado,
                D_mnpio: data.D_mnpio,
                d_zona: data.d_zona,
                id_asenta_cpcons: data.id_asenta_cpcons,
                d_tipo_asenta: data.d_tipo_asenta
            });
        }

        console.log('Datos insertados correctamente');
    } catch (error) {
        console.error('Error al insertar los datos:', error);
    }
};


insertDataToDatabase();