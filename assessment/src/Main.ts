import { Image } from "./Image";
import { Text } from "./Text";
import { File } from "./File";
import { IElement } from "./IElement";
import { ElementType } from "./IFile";
import { HTMLFile } from "./HTMLFile";
import { TextFile } from "./TextFile";

const file = new File();

file.addData({elementType: ElementType.Text, data: new Text("abc")});
file.addData({elementType: ElementType.Image, data: new Image("image1")});

const htmlFile = new HTMLFile(file);
htmlFile.export();

const textFile = new TextFile(file);
textFile.export();
