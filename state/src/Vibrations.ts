import { Alert } from "./Alert";

export class Vibration implements Alert{
    public notify(msg: string){
        console.log("vibration state...");
        console.log(msg);
    }
}