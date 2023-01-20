import { IComponent } from "./IComponent";

export class ContextMenu{

    public duplicate(component: IComponent): IComponent{
        return component.clone();
    }
}