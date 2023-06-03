import get_dir from "../utilities/dir";
import path from "path";

describe("test dir function", () => {
  it("test input image dir function", () => {
    const { image_dir } = get_dir({
      filename: "encenadaport",
      width: "200",
      height: "400",
    });
    expect(image_dir).toBe(
      path.join(__dirname, "..", "..", "assets", "full", "encenadaport.jpg")
    );
  });
  it("test output image dir function", () => {
    const { image_dir_out } = get_dir({
      filename: "encenadaport",
      width: "200",
      height: "400",
    });
    expect(image_dir_out).toBe(
      path.join(
        __dirname,
        "..",
        "..",
        "assets",
        "thumb",
        "encenadaport_200_400.jpg"
      )
    );
  });
});
