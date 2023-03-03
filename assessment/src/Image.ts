import { IElement } from "./IElement";

export class Image implements IElement{

    private _image: string;

    constructor(image: string){
        this._image = image;
    }

    public add(){
        return this._image;
    }
}