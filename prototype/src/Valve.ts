import { IComponent } from "./IComponent";

export class Valve implements IComponent{

    private _flow: number;
    private _radius: number;

    constructor(flow: number){
        this._flow = flow;
    }

    public set flow(flow: number){
        this._flow = flow;
    }

    public set radius(radius){
        this._radius = radius;
    }
    
    public clone(){
        const valve = new Valve(this._flow);
        this._radius = this.radius;
        return valve;
    }

    public render(){
        console.log(this._flow, this._radius);
    }

}