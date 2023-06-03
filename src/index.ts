import express from "express";
import bodyParser from "body-parser";
import resize_img from "./utilities/resize";
import get_dir from "./utilities/dir";
import { check_img_dir, check_query } from "./utilities/checkers";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get(
  "/api",
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const err = check_query(req.query); //check if query has file name and width and height
      if (err) throw err;
      const { image_dir } = get_dir(req.query); //get directory of the input image
      if (!check_img_dir(image_dir)) throw "image not found";
      const img = await resize_img(req.query); //resize image
      res.sendFile(img);
    } catch (err) {
      res.status(400).send(err); //display error
    }
  }
);

app.listen(port);

export default app;
