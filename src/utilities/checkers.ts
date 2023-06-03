import fs from "fs";
import { ParsedQs } from "qs";

const check_img_dir = (image_dir: string): boolean => {
  return fs.existsSync(image_dir);
};
const check_query = (query: ParsedQs): null | unknown => {
  const width = parseInt(query.width as unknown as string),
    height = parseInt(query.height as unknown as string);
  try {
    if (!query.filename) throw "image name is needed";
    if (!query.width) throw "image width is needed";
    if (!query.height) throw "image height is needed";
    if (isNaN(width) || width <= 0) throw "image width is not valid";
    if (isNaN(height) || height <= 0) throw "image height is not valid";
    return null;
  } catch (err) {
    return err;
  }
};
export { check_img_dir, check_query };
