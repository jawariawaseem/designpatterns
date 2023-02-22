import {ILoginStrategy} from "./ILoginStrategy";

export class LoginStrategy implements ILoginStrategy{
    public authenticate(username: string, token: string): boolean{
        if(username === "test123" && token === "abc"){
            console.log("Account login successful!");
            return true;
        }
        console.log("Account login failed!");
        return false
    }

}