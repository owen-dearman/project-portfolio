import { imageLinkConversion } from "./imageLinkToOb";

describe("suite of tests to check that conversion is accurate", () => {
  test("mapping between link and image is correct", () => {
    expect(
      imageLinkConversion(["img1", "img2"], ["link1", "link2"])
    ).toStrictEqual([
      { img: "img1", link: "link1" },
      { img: "img2", link: "link2" },
    ]);
  });
});
