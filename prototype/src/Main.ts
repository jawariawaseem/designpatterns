import { ContextMenu } from "./ContextMenu";
import { Valve } from "./Valve";

console.log("Create new objects by copying an existing object");

const valve = new Valve(100);
valve.radius = 200;
valve.render();

const contextMenu = new ContextMenu();
const valve2 = contextMenu.duplicate(valve);
valve2.render();