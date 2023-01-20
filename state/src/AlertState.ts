import { Alert } from "./Alert";

export class AlertState{
    private _alert: Alert;

    public get notificationAlertState(): Alert{
        return this._alert;
    }

    public set notificationAlertState(notificationAlertState: Alert){
        this._alert = notificationAlertState;
    }

    public notify(msg: string){
        this._alert.notify(msg);
    }
}