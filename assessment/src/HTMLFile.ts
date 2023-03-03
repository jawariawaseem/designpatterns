import { IFile } from "./IFile";

export class HTMLFile{

    private _file: IFile

    constructor(file: IFile){
        this._file = file;
    }

    public export(){
        const fileData = this._file.getFile();
        console.log("exported to HTML ");
        for(let index=0; index < fileData.length; index++){
            console.log(fileData[index].data);
        }
    }
}