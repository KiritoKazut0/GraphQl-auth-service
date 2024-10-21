import IResponseDetailsAsentamiento from "../interface/IResponseDetailsAsentamiento";
import IAsentamientoData from "../interface/IAsentamientoData";
import Asentamiento from "../Models/IAsentamientoData";

const getDetailsAsentamiento = async(d_asenta: string): Promise<IResponseDetailsAsentamiento> => {
    try {
        
        const result: IAsentamientoData | null = await Asentamiento.findOne({
            where: {
                d_asenta
            }
        });

    if (!result) return {data: null, message: "No details found for the settlement provided"}    
    
    const response: IResponseDetailsAsentamiento = {
        data: {
            c_estado: result.c_estado,
            c_mnpio: result.c_mnpio,
            c_tipo_asenta: result.c_tipo_asenta,
            d_CP: result.d_CP,
            d_estado: result.d_estado,
            D_mnpio: result.D_mnpio,
            d_tipo_asenta: result.d_tipo_asenta
        },
        message: "Settlement details successfully obtained"
    }

    return response

    } catch (error) {
        console.log(error);
        return {data: null, message: 'Internal Server error'}
    }
}

export default getDetailsAsentamiento;