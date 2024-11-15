export interface UserResponse{
    mensaje: string,
    usuario: User
}

export interface User{
    id: number,
    nombre: string,
    email: string,
    telefono: string
}