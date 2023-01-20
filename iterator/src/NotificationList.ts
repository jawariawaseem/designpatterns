import { ArrayIterator } from "./ArrayIterator";

export class NotificationList{

    private _notifications: string[] = [];

    public addNotification(item: string){
        this._notifications.push(item);
    }

    public iterator(){
        return new ArrayIterator(this._notifications);
    }
}