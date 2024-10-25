
export interface Asentamientos {
    d_asenta: string
    d_tipo_asenta: string 
    c_tipo_asenta: string
    id_asenta_cpcons: string
}



export  interface IResponseAsentamientos {
    data: Asentamientos[] | null
    message: string
}

