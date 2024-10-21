
interface detailsAsentamiento {
    d_tipo_asenta: string,
    c_tipo_asenta: string,
    c_mnpio: string,
    D_mnpio: string,
    d_estado: string,
    c_estado: string,
    d_CP: string
}

export default interface IResponseDetailsAsentamiento {
    data: detailsAsentamiento | null,
    message: string
}