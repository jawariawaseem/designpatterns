import { IconType } from "./Point";
import { PointIcon } from "./PointIcon";

export class IconFactory{

    private _icons: Map<IconType, PointIcon>;

    constructor() {
        this._icons = new Map<IconType, PointIcon>();
    }

    public getIcon(type: IconType): PointIcon{
        let icon = this._icons.get(type);
        if(!icon){
            this._icons.set(type, new PointIcon(new Int8Array(8), type));
        }
        return icon;
    }
}