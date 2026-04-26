import fsn from "fs";
import fs from "fs/promises";
import path from "path";

const basepath =
  "C:\\Users\\chand\\Documents\\VS Code\\CodeWithHarry\\sigma-webdev-course\\Chapter 93";

let files = await fs.readdir(basepath);

for (const element of files) {
  let ext = element.split(".")[element.split(".").length - 1];

  if (ext != "js" && ext != "json" && element.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      fs.rename(
        path.join(basepath, element),
        path.join(basepath, ext, element)
      );
    } else {
      fs.mkdir(ext);
      fs.rename(
        path.join(basepath, element),
        path.join(basepath, ext, element)
      );
    }
  }
}



