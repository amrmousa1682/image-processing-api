import { check_img_dir, check_query } from "../utilities/checkers";
import path from "path";

describe("test checker function", () => {
  it("test check img dir with correct dir ", () => {
    expect(
      check_img_dir(
        path.join(__dirname, "..", "..", "assets", "full", "encenadaport.jpg")
      )
    ).toBeTruthy();
  });
  it("test check img dir with incorrect dir ", () => {
    expect(
      check_img_dir(
        path.join(__dirname, "..", "..", "assets", "thumb", "hello.jpg")
      )
    ).toBeFalsy();
  });
  it("test query checker with correct values", () => {
    expect(
      check_query({
        filename: "encenadaport",
        width: "200",
        height: "400",
      })
    ).toBeNull();
  });
  it("test query checker without width ", () => {
    expect(
      check_query({
        filename: "encenadaport",
        height: "400",
      })
    ).toBe("image width is needed");
  });
  it("test query checker without height ", () => {
    expect(
      check_query({
        filename: "encenadaport",
        width: "200",
      })
    ).toBe("image height is needed");
  });
  it("test query checker without filename ", () => {
    expect(
      check_query({
        width: "200",
        height: "400",
      })
    ).toBe("image name is needed");
  });
  it("test query checker with unvalid height ", () => {
    expect(
      check_query({
        filename: "encenadaport",
        width: "200",
        height: "-200",
      })
    ).toBe("image height is not valid");
  });
  it("test query checker with unvalid width ", () => {
    expect(
      check_query({
        filename: "encenadaport",
        width: "valid",
        height: "400",
      })
    ).toBe("image width is not valid");
  });
});
