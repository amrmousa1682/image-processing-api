import sharp from "sharp";
import get_dir from "./dir";
import { check_img_dir } from "./checkers";
import { ParsedQs } from "qs";

const resize_img = async (query: ParsedQs): Promise<string> => {
  const width = parseInt(query.width as unknown as string),
    height = parseInt(query.height as unknown as string);
  const { image_dir, image_dir_out } = get_dir(query); //get dir of image input palce ad output

  if (check_img_dir(image_dir_out)) {
    //check if image is exist befor with the same width and height
    return image_dir_out;
  } else {
    await sharp(image_dir).resize(width, height).toFile(image_dir_out); //resize image using sharp
    return image_dir_out;
  }
};

export default resize_img;
