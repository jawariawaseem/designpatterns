import { Alert } from "./Alert";

export class Silent implements Alert{
    public notify(msg: string){
        console.log("silent state...");
        console.log(msg);
    }
}