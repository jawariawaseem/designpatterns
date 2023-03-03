import { IElement } from "./IElement";

export enum ElementType{
    Text,
    Image
}

export interface IData{
    elementType: ElementType;
    data: IElement;
}

export interface IFile{

    addData(data: IData): void;
    getFile(): IData[];
}