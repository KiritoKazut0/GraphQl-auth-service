
export default interface AuthResponse {
    data: {
        id: string,
        username: string,
    } | null,
    token: string | null
    message: string
}