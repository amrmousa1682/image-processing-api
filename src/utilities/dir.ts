import path from "path";
import { ParsedQs } from "qs";

const get_dir = (
  query: ParsedQs
): { image_dir: string; image_dir_out: string } => {
  const name = query.filename as unknown as string,
    width = parseInt(query.width as unknown as string),
    height = parseInt(query.height as unknown as string);
  const image_name_out = name + "_" + width + "_" + height + ".jpg",
    image_dir = path.join(
      __dirname,
      "..",
      "..",
      "assets",
      "full",
      name + ".jpg"
    ),
    image_dir_out = path.join(
      __dirname,
      "..",
      "..",
      "assets",
      "thumb",
      image_name_out
    );
  return { image_dir: image_dir, image_dir_out: image_dir_out };
};
export default get_dir;
