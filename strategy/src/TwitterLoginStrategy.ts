import {ILoginStrategy} from "./ILoginStrategy";

export class TwitterLoginStrategy implements ILoginStrategy{
    public authenticate(username: string, token: string): boolean{
        if(username === "test123" && token === "abc"){
            console.log("Twitter account login successful!");
            return true;
        }
        console.log("Twitter account login failed!");
        return false
    }

}