import { ElementType, IFile } from "./IFile";

export class TextFile{

    private _file: IFile

    constructor(file: IFile){
        this._file = file;
    }

    public export(){
        const fileData = this._file.getFile();
        console.log("exported to Text ");
        for(let index=0; index < fileData.length; index++){
            if(fileData[index].elementType === ElementType.Text)
                console.log(fileData[index].data);
        }
    }
}