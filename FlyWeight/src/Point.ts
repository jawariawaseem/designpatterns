import { PointIcon } from "./PointIcon";

export enum IconType{
    Cafe,
    School
}
export class Point{
    
    private _x: number;
    private _y: number;
    private _pointIcon: PointIcon;

    constructor(x: number, y: number, pointIcon: PointIcon){
        this._x = x;
        this._y = y;
        this._pointIcon = pointIcon;
    }

    public draw(){
        console.log(this._x, this._y, this._pointIcon.icon, this._pointIcon.type);
    }

}