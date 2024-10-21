import {IResponseDetailsAsentamiento, detailsAsentamiento} from "../Graphql/interface/IResponseDetailsAsentamiento";
import Asentamiento from "../Models/AsentamientoModel";

const getDetailsAsentamiento = async(d_asenta: string): Promise<IResponseDetailsAsentamiento> => {
    try {
        
        const result: detailsAsentamiento | null = await Asentamiento.findOne({
            attributes: [
                "c_estado",
                "c_mnpio",
                " c_tipo_asenta",
                "d_CP", "d_estado",
                "D_mnpio",
                "d_tipo_asenta"],
                
            where: {
                d_asenta
            }
        });

    if (!result) return {data: null, message: "No details found for the settlement provided"}    
    
    const response: IResponseDetailsAsentamiento = {
        data: result,
        message: "Settlement details successfully obtained"
    }

    return response

    } catch (error) {
        console.log(error);
        return {data: null, message: 'Internal Server error'}
    }
}

export default getDetailsAsentamiento;