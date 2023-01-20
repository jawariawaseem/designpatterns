import { IconFactory } from "./IconFactory";
import { IconType, Point } from "./Point";

console.log("REDUCE MEMORY FOOTPRINTS OF OBJECTS, SEPARATE INTRINSIC AND EXTRINSIC STATE");

const iconFactory = new IconFactory();
const icon = iconFactory.getIcon(IconType.Cafe);
console.log(icon);
// const point = new Point(10, 10, icon);
// point.draw();