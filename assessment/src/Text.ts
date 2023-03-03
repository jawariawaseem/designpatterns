import { IElement } from "./IElement";

export class Text implements IElement{

    private _text: string;

    constructor(text: string){
        this._text = text;
    }

    public add(){
        return this._text;
    }
}