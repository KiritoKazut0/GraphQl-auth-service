import Asentamiento from "../Models/AsentamientoModel";
import { IResponseAsentamientos, Asentamientos } from "../Graphql/interface/IResponseAsentamiento";

const getAsentamientosByCP = async (codigoPostal: string): Promise<IResponseAsentamientos> => {
    try {
       
        const result: Asentamientos[] = await Asentamiento.findAll({
            attributes:["d_asenta", "d_tipo_asenta", "c_tipo_asenta", "id_asenta_cpcons"],
            where: {
                d_CP: codigoPostal
            }
        });

        if (result.length === 0) return {data: null, message: "No settlements found for this zip code"}


        return { data: result, message: "Settlements found" }

    } catch (error) {
        console.log(error);
        return { data: null, message: "Internal sever error" }
    }
}

export default getAsentamientosByCP;