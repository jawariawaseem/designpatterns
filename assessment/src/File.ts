import { IData } from "./IFile";

export class File{

    private _elements: IData[];

    constructor(){
        this._elements = [];
    }

    public addData(data: IData){
        this._elements.push(data);
    }

    public getFile(){
        return this._elements;
    }
}