export interface IComponent{
    clone:() => IComponent;
    render:() => void;
}