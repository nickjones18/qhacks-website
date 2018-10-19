import React from "react";
import MobileMenu from "../../../components/MobileMenu";
import { shallow } from "enzyme";

describe("MobileMenu", () => {
  it("renders correctly", () => {
    expect(
      shallow(<MobileMenu breadCrumbs={["I", "LOVE", "SnApShOtS"]} />)
    ).toMatchSnapshot();
  });
});
