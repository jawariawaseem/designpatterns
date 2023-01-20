import { AlertState } from "./AlertState";
import { Silent } from "./Silent";
import { Vibration } from "./Vibrations";


console.log("Is used when an Object changes its behavior based on its internal state");

const alertState = new AlertState();
alertState.notificationAlertState = new Silent();
alertState.notify("new message arrived");

alertState.notificationAlertState = new Vibration();
alertState.notify("new email arrived");