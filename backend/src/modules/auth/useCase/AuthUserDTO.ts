export interface IAuthRequest {
    email: string;
    password: string;
    latitude: number, 
    longitude: number
}

export interface IAuthResponse {
    user: Object,
    token: string
}