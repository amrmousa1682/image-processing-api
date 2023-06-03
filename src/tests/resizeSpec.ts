import resize_img from "../utilities/resize";
import path from "path";
describe("test helper function", () => {
  it("test resize image", async () => {
    const img = await resize_img({
      filename: "encenadaport",
      width: "200",
      height: "400",
    });
    expect(img).toBe(
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
