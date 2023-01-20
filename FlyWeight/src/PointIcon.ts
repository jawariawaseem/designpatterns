import { IconType } from "./Point";

export class PointIcon{
    
    private _icon: Int8Array;
    private _type: IconType;

    constructor(icon: Int8Array, type: IconType){
        this._icon = icon;
        this._type = type;
    }

    public get icon(){
        return this._icon;
    }

    public get type(){
        return this._type;
    }
}