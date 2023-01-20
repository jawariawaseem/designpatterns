import { IIterator } from "./IIterator";

export class ArrayIterator<T> implements IIterator<T>{
     
    private _list: Array<T>;
    private _position: number;

    constructor(list: Array<T>){
        this._list = list;
        this._position = 0;
    }

    hasNext(): boolean {
        return this._position < this._list.length;
    }

    current(): T {
        return this._list[this._position];
    }
    next(): void {
        this._position < this._list.length && this._position++;
    }

    
}