export interface LoginEntity {
    email:string, 
    password: string
}

export interface RegisterEntity {
    usernamer: string,
    email: string,
    confirmEmail: string,
    avatar?: string,
}