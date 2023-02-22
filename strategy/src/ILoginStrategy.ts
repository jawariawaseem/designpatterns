export interface ILoginStrategy{
    authenticate: (username: string, token: string) => boolean;
}