export interface LoginEntity {
    email:string, 
    password: string
}

export interface RegisterEntity {
    usernamer: string,
    email: string,
    backupEmail: string,
    confirmEmail: string,
    file?: string,
}