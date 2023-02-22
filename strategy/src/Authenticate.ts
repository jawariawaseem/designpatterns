import { ILoginStrategy } from "./ILoginStrategy";

export class Authenticate {

    private _username: string;
    private _token: string;
    constructor(username: string, token: string, ){
        this._username = username;
        this._token = token;
    }

    public authenticateUser(loginStrategy: ILoginStrategy){
        return loginStrategy.authenticate(this._username, this._token);
    }
}