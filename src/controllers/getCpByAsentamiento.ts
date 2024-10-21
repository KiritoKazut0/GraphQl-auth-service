import IAsentamientoData from "../interface/IAsentamientoData";
import IResponseCP from "../interface/IResponseCP";
import Asentamiento from "../Models/IAsentamientoData";

const getCpByAsentamiento = async (d_asenta: string): Promise<IResponseCP> => {
    try {

        const result: IAsentamientoData | null = await Asentamiento.findOne({
            where: {
                d_asenta
            }
        })

        if (!result) return {cp: null, message: "Settlement not found"}

        const response: IResponseCP = {
            cp: result.d_CP,
            message: 'Postal code retrieved successfully'
        }

        return response
    } catch (error) {
        console.log(error)
        return { cp: null, message: 'Internal sever error' }
    }
}

export default getCpByAsentamiento;