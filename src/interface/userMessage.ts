export interface IUserMessage {
    id: string,
    created_at: number,
    user: {
        id: string,
        name: string,
        surname: string,
        avatar: string,
        you: boolean
    },
    message: string,
}