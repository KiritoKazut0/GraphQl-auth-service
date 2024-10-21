import Asentamiento from "../Models/AsentamientoModel";
import { IResponseAsentamientos, Asentamientos } from "../Graphql/interface/IResponseAsentamiento";
import IAsentamientoData from "../Graphql/interface/IAsentamientoData";


const getAsentamientosByCP = async (codigoPostal: string): Promise<IResponseAsentamientos> => {
    try {
       
        const result: IAsentamientoData[] = await Asentamiento.findAll({
            where: {
                d_CP: codigoPostal
            }
        });

        if (result.length === 0) return {data: null, message: "No settlements found for this zip code"}

        const response:Asentamientos[] = result.map(data => {
            return {
                c_tipo_asenta: data.c_tipo_asenta,
                d_asenta: data.d_asenta,
                d_tipo_asenta: data.c_tipo_asenta,
                id_asenta_cpcons: data.id_asenta_cpcons
            }
        })

        return { data: response, message: "Settlements found" }

    } catch (error) {
        console.log(error);
        return { data: null, message: "Internal sever error" }
    }
}

export default getAsentamientosByCP;