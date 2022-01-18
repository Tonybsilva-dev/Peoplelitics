export interface IUpdateUserDTO {
    userID: string,
    email?: string,
    name?: string,
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    doc?: number,
}